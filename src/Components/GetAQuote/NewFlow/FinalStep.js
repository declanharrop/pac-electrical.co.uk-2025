'use client';

import { Turnstile } from 'next-turnstile';
import { useQuoteFlow } from '@/Context/QuoteFlowContext';
import Styles from '@/Styles/Pages/QuoteFlowDynamic.module.css';

export default function FinalStep({ data, service }) {
  const { userDetails, addUserDetails, handleSubmit, handleVerify } =
    useQuoteFlow();
  const urlService = service ? service.toLowerCase() : '';

  return (
    <div className={Styles.StepContainer}>
      <div className={Styles.StepTitle}>
        <h3>{data.question.toUpperCase()}</h3>
        <p style={{ marginTop: '15px', color: '#666', lineHeight: '1.5' }}>
          Thank you for completing our solar quote form. When you click submit,
          you will receive an email asking for more details. Once you reply, you
          will receive your fully bespoke quote.
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
              marginBottom: '8px',
              fontWeight: 'bold',
            }}
          >
            Additional Comments (Optional)
          </label>
          <textarea
            value={userDetails.details}
            onChange={(e) => addUserDetails({ details: e.target.value })}
            placeholder={data.placeholder}
            rows={4}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '2px solid #ccc',
              fontSize: '1rem',
              fontFamily: 'inherit',
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <Turnstile
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
            onVerify={handleVerify}
            theme="light"
          />
        </div>

        <button
          type="submit"
          className={`${Styles.SubmitButton} ${Styles[urlService]}`}
          style={{ marginTop: '2rem' }}
        >
          SUBMIT QUOTE <span>&rarr;</span>
        </button>
      </form>
    </div>
  );
}
