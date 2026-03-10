'use client';

import React, { useState } from 'react';
import styles from './RequestCallback.module.css';

export default function RequestCallbackPage() {
  const [formData, setFormData] = useState({
    name: '',
    service: '', // CHANGED: Start empty so the placeholder shows
    phone: '',
  });

  const [status, setStatus] = useState('idle');
  const [phoneError, setPhoneError] = useState('');

  const validateUKPhone = (number) => {
    const cleaned = number.replace(/[\s\-()]/g, '');
    const ukPhoneRegex =
      /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/;
    return ukPhoneRegex.test(cleaned);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'phone') {
      setPhoneError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateUKPhone(formData.phone)) {
      setPhoneError('Please enter a valid UK phone number.');
      return;
    }

    setStatus('loading');

    // Zapier Webhook Trigger
    const endpoint = 'https://hooks.zapier.com/hooks/catch/11615843/uxre54h/';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify({
          type: 'Callback Request',
          name: formData.name,
          service: formData.service,
          phone: formData.phone,
        }),
      });

      const result = await response.json();

      if (result.status === 'success') {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.successContainer}>
        <h2 className={styles.heading}>Request Received!</h2>
        <p
          className={styles.subheading}
          style={{ color: '#fff', fontSize: '1.8rem', maxWidth: '50rem' }}
        >
          Thanks, {formData.name}. Our {formData.service} team will give you a
          call back shortly on {formData.phone}.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.heading}>Request a Callback</h2>
      <p className={styles.subheading}>
        Leave your details and an expert will call you back.
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="name"
            required // ALREADY REQUIRED
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        {/* Custom Select Wrapper */}
        <div className={styles.inputGroup}>
          <div className={styles.selectWrapper}>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={styles.input}
              required // CHANGED: Now the browser will block submission if left empty
              // Optional inline style to make the placeholder text look grey like the other inputs until selected
              style={{ color: formData.service === '' ? '#888888' : '#333333' }}
            >
              {/* CHANGED: The disabled hidden placeholder option */}
              <option value="" disabled hidden>
                What service do you require?
              </option>
              <option value="Solar">Solar PV & Battery</option>
              <option value="EV">EV Chargers</option>
              <option value="Electrical">General Electrical</option>
            </select>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <input
            type="tel"
            name="phone"
            required // ALREADY REQUIRED
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className={`${styles.input} ${phoneError ? styles.inputError : ''}`}
          />
          {phoneError && <span className={styles.errorText}>{phoneError}</span>}
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className={styles.submitButton}
        >
          {status === 'loading' ? 'SENDING...' : 'CALL ME BACK'}
        </button>

        {status === 'error' && (
          <p className={styles.errorText} style={{ textAlign: 'center' }}>
            Something went wrong connecting to the server. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
