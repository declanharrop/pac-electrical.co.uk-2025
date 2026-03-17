'use client';

import { useState } from 'react';
import { useQuoteFlow } from '@/Context/QuoteFlowContext';
import Styles from '@/Styles/Pages/QuoteFlowDynamic.module.css';

export default function AddressConfirmStep({ data, service, currentStep }) {
  const { userDetails, chooseOption } = useQuoteFlow();
  const urlService = service ? service.toLowerCase() : '';

  // Pre-fill the state directly from what the Map saved in Context
  const [formData, setFormData] = useState({
    addressLine1: userDetails.addressLine1 || '',
    addressLine2: userDetails.addressLine2 || '',
    county: userDetails.county || '',
    postcode: userDetails.postcode || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Route to Step 9 (or wherever you need them to go next)
    const nextStepNumber = parseInt(currentStep) + 1;
    const nextRoute = `/quote/${urlService}/${nextStepNumber}`;

    // Update Context with any manual corrections they made!
    // Notice we DO NOT touch coordinates here, so the exact map pin is preserved perfectly.
    chooseOption(formData, nextRoute);
  };

  return (
    <div className={Styles.StepContainer}>
      <div className={Styles.StepTitle}>
        <h3>{data.question.toUpperCase()}</h3>
        <p style={{ marginTop: '10px' }}>
          Please check your address below and make any necessary corrections
          (e.g. adding a flat number).
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className={Styles.ContactForm}
        style={{ maxWidth: '500px', margin: '0 auto' }}
      >
        <div className={Styles.InputGroup}>
          <label
            style={{
              display: 'block',
              textAlign: 'left',
              marginBottom: '5px',
              fontWeight: 'bold',
            }}
          >
            Address Line 1
          </label>
          <input
            type="text"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
            required
          />
        </div>

        <div className={Styles.InputGroup}>
          <label
            style={{
              display: 'block',
              textAlign: 'left',
              marginBottom: '5px',
              fontWeight: 'bold',
            }}
          >
            Town / City (Line 2)
          </label>
          <input
            type="text"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleChange}
          />
        </div>

        <div className={Styles.InputGroup}>
          <label
            style={{
              display: 'block',
              textAlign: 'left',
              marginBottom: '5px',
              fontWeight: 'bold',
            }}
          >
            County
          </label>
          <input
            type="text"
            name="county"
            value={formData.county}
            onChange={handleChange}
          />
        </div>

        <div className={Styles.InputGroup}>
          <label
            style={{
              display: 'block',
              textAlign: 'left',
              marginBottom: '5px',
              fontWeight: 'bold',
            }}
          >
            Postcode
          </label>
          <input
            type="text"
            name="postcode"
            value={formData.postcode}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className={`${Styles.SubmitButton} ${Styles[urlService]}`}
          style={{ marginTop: '1rem' }}
        >
          CONFIRM & CONTINUE <span>&rarr;</span>
        </button>
      </form>
    </div>
  );
}
