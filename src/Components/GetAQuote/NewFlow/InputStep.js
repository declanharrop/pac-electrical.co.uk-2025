'use client';

import { useState } from 'react';
import { useQuoteFlow } from '@/Context/QuoteFlowContext';
import Styles from '@/Styles/Pages/QuoteFlowDynamic.module.css';

export default function InputStep({ data, service, currentStep }) {
  const { userDetails, addUserDetails, chooseOption } = useQuoteFlow();
  const urlService = service ? service.toLowerCase() : '';

  // Pre-fill if they hit the back button
  const [inputValue, setInputValue] = useState(userDetails[data.field] || '');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      setError('Please enter a value to continue.');
      return;
    }

    // Determine the next step (use custom nextStep if provided, else chronological)
    const nextStepNumber = data.nextStep
      ? data.nextStep
      : parseInt(currentStep) + 1;
    const nextRoute = `/quote/${urlService}/${nextStepNumber}`;

    // Save to context and navigate
    chooseOption({ [data.field]: inputValue }, nextRoute);
  };

  return (
    <div className={Styles.StepContainer}>
      <div className={Styles.StepTitle}>
        <h3>{data.question.toUpperCase()}</h3>
      </div>

      {/* Reusing the ContactForm classes for consistent, beautiful styling */}
      <form onSubmit={handleSubmit} className={Styles.ContactForm}>
        <div className={Styles.InputGroup}>
          <input
            type={data.inputType || 'text'}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setError('');
            }}
            placeholder={data.placeholder}
            className={error ? Styles.InputError : ''}
            style={{ textAlign: 'center', fontSize: '2rem' }} // Centered text looks better for single inputs
          />
          {error && <span className={Styles.ErrorMessage}>{error}</span>}
        </div>

        <button
          type="submit"
          className={`${Styles.SubmitButton} ${Styles[urlService]}`}
        >
          NEXT <span>&rarr;</span>
        </button>
      </form>
    </div>
  );
}
