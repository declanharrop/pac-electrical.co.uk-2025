'use client';

import { useState, useRef } from 'react';
import { ArrowRight, Upload, CheckCircle } from 'lucide-react';
import styles from '../Styles/JobApplicationForm.module.css';

export default function JobApplicationForm({ jobTitle }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cvFile, setCvFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const fileInputRef = useRef(null);

  function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (file) setCvFile(file);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!cvFile) {
      setError('Please attach your CV before submitting.');
      return;
    }

    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('position', jobTitle);
      formData.append('cv', cvFile);

      const res = await fetch('/api/apply', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (data.status === 'success') {
        setSubmitted(true);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <section className={styles.Section}>
        <div className={styles.Container}>
          <div className={styles.Success}>
            <div className={styles.SuccessIcon}>
              <CheckCircle size={56} color="var(--green)" />
            </div>
            <h2 className={styles.SuccessTitle}>Application Received</h2>
            <p className={styles.SuccessBody}>
              Thanks {name.split(' ')[0]}. We&apos;ve got your application for{' '}
              <strong>{jobTitle}</strong> and we&apos;ll be in touch shortly.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.Section}>
      <div className={styles.Container}>
        <h2 className={styles.Heading}>
          APPLY FOR THIS <span>ROLE</span>
        </h2>
        <p className={styles.SubHeading}>
          Fill in your details and attach your CV — we&apos;ll take it from there.
        </p>

        <form className={styles.Form} onSubmit={handleSubmit}>
          <div className={styles.Field}>
            <label className={styles.Label}>Position</label>
            <input
              className={styles.Input}
              type="text"
              value={jobTitle}
              readOnly
            />
          </div>

          <div className={styles.Field}>
            <label className={styles.Label}>Full Name</label>
            <input
              className={styles.Input}
              type="text"
              placeholder="Jane Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className={styles.Field}>
            <label className={styles.Label}>Email Address</label>
            <input
              className={styles.Input}
              type="email"
              placeholder="jane@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.Field}>
            <label className={styles.Label}>Phone Number</label>
            <input
              className={styles.Input}
              type="tel"
              placeholder="07700 900000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className={styles.Field}>
            <label className={styles.Label}>CV / Resume</label>
            <div
              className={`${styles.UploadArea} ${cvFile ? styles.HasFile : ''}`}
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload size={28} className={styles.UploadIcon} />
              <span className={styles.UploadLabel}>
                {cvFile ? cvFile.name : 'Click to upload your CV'}
              </span>
              <span className={styles.UploadHint}>PDF or Word — max 10MB</span>
              <input
                ref={fileInputRef}
                className={styles.HiddenInput}
                type="file"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={handleFileChange}
              />
            </div>
          </div>

          {error && <p className={styles.Error}>{error}</p>}

          <button className={styles.SubmitBtn} type="submit" disabled={submitting}>
            {submitting ? 'Sending...' : <>Submit Application <ArrowRight size={18} /></>}
          </button>
        </form>
      </div>
    </section>
  );
}
