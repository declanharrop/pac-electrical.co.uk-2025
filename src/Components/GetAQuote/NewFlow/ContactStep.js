'use client';

import { useState } from 'react';
import { useQuoteFlow } from '@/Context/QuoteFlowContext';
import Styles from '@/Styles/Pages/QuoteFlowDynamic.module.css';

export default function ContactStep({ service, currentStep }) {
  const { userDetails, addUserDetails, handlePartialSubmit } = useQuoteFlow();
  const urlService = service ? service.toLowerCase() : '';

  // Local state for the form inputs and errors
  const [formData, setFormData] = useState({
    name: userDetails.name || '',
    email: userDetails.email || '',
    phone: userDetails.phone || '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation Logic
  const validateForm = () => {
    const newErrors = {};

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    // Email Validation (Standard Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // UK Phone Validation:
    // ^(07|01)\d{9}$ matches 07 or 01 followed by exactly 9 digits (11 total)
    // ^\+44\d{10}$ matches +44 followed by exactly 10 digits (13 total)
    const phoneRegex = /^((07|01)\d{9}|\+44\d{10})$/;
    // Remove spaces from the input before testing
    const strippedPhone = formData.phone.replace(/\s+/g, '');

    if (!strippedPhone || !phoneRegex.test(strippedPhone)) {
      newErrors.phone =
        'Please enter a valid UK phone number (e.g., 07..., 01..., or +44...).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear the error as they type
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const newData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    };

    // 1. Save to Context for the rest of the form to use
    addUserDetails(newData);

    // 2. Calculate next route
    const nextStep = parseInt(currentStep) + 1;
    const nextRoute = `/quote/${urlService}/${nextStep}`;

    // 3. Pass the fresh data DIRECTLY into the partial submit
    await handlePartialSubmit(newData, nextRoute);
  };

  return (
    <div className={Styles.StepContainer}>
      <div className={Styles.StepTitle}>
        <h3>YOUR DETAILS</h3>
      </div>

      <form onSubmit={onSubmit} className={Styles.ContactForm}>
        {/* Name Input */}
        <div className={Styles.InputGroup}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={errors.name ? Styles.InputError : ''}
          />
          {errors.name && (
            <span className={Styles.ErrorMessage}>{errors.name}</span>
          )}
        </div>

        {/* Email Input */}
        <div className={Styles.InputGroup}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={errors.email ? Styles.InputError : ''}
          />
          {errors.email && (
            <span className={Styles.ErrorMessage}>{errors.email}</span>
          )}
        </div>

        {/* Phone Input */}
        <div className={Styles.InputGroup}>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="07123456789 or +447123..."
            className={errors.phone ? Styles.InputError : ''}
          />
          {errors.phone && (
            <span className={Styles.ErrorMessage}>{errors.phone}</span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`${Styles.SubmitButton} ${Styles[urlService]}`}
        >
          {isSubmitting ? 'SAVING...' : 'CONTINUE'}
        </button>
      </form>
    </div>
  );
}
