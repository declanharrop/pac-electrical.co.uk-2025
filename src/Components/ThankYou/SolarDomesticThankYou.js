'use client';

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Styles from '@/Styles/Pages/ThankYou.module.css';

export default function SolarDomesticThankYou() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('idle'); // idle, uploading, success, error
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    // Grab the session ID from the cookie we set in the Context
    const storedSession = Cookies.get('quoteSessionId');
    if (storedSession) setSessionId(storedSession);
  }, []);

  const handleFileChange = (e) => {
    // Check if files exist and have length
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setUploadStatus('idle'); // Reset status if they change file
    }
  };

  const clearFile = () => {
    setFile(null);
    setUploadStatus('idle');
  };

  const handleUpload = async () => {
    if (!file || !sessionId) return;
    setUploadStatus('uploading');

    const formData = new FormData();
    formData.append('bill', file);
    formData.append('sessionId', sessionId);

    try {
      // Temporary: Log to see data until API is built
      console.log('Pushing file to API...', file.name, 'for ID:', sessionId);

      const response = await fetch('/api/upload-bill', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setUploadStatus('success');
      } else {
        setUploadStatus('error');
      }
    } catch (error) {
      console.error('Upload failed:', error);
      setUploadStatus('error');
    }
  };

  const steps = [
    {
      title: 'The "Lightbulb Moment" Plan',
      text: "We hand over your bespoke Proposal Pack. It's not just a quote; it's your roadmap to crushing energy bills and looking good doing it.",
    },
    {
      title: 'Lock It In',
      text: "Love the plan? Great! Pay the deposit, and high-five! We instantly reserve your top-tier gear and secure your spot in our calendar. It's officially happening.",
    },
    {
      title: 'We Fight the Red Tape',
      text: "Nobody likes paperwork—except us. We dive into the G98/G99 forms and handle all the boring DNO applications so you don't have to.",
    },
    {
      title: 'Save the Date',
      text: "Our team will call you to pick the perfect installation day. We'll make sure it fits your schedule (and your cat's nap time).",
    },
    {
      title: 'Setting the Stage',
      text: 'A few days before the big show, the scaffolding goes up. We ensure everything is safe and accessible so our team can work their magic on your roof.',
    },
    {
      title: 'The Main Event',
      text: 'The PAC dream team arrives! We install your shiny new panels, inverter, and battery storage with the precision of a Swiss watch.',
    },
    {
      title: 'Flip the Switch',
      text: 'The best part? The moment we finish, we turn it on. You start using your own clean, green power immediately. Watch that smart meter slow down!',
    },
    {
      title: 'Paperwork Patrol',
      text: 'While you enjoy your free electricity, we keep chasing the network operator. We monitor the application until they give us the thumbs up.',
    },
    {
      title: 'The Victory Lap',
      text: "Once the grid gives us the green light, we pop back over to fully commission the system and cross the t's and dot the i's.",
    },
    {
      title: 'Welcome to the Future',
      text: "We hand over the keys (well, the App). We'll show you how to track your solar production on your phone, give you your warranty pack, and leave you to enjoy a lifetime of power and control.",
    },
  ];

  return (
    <div className={Styles.Container}>
      <div className={Styles.Header}>
        <h1 className={Styles.Title}>Quote Submitted!</h1>
        <p className={Styles.Subtitle}>
          Choosing to proceed is simple. Once you accept this proposal, our
          project management team takes over immediately. We handle all the
          regulatory paperwork, grid applications, and logistics, ensuring a
          seamless transition to solar power.
        </p>
      </div>

      {/* =========================================
         UPDATED Interactive Uploader Widget
         ========================================= */}
      <div className={Styles.UploadWidget}>
        <h3 className={Styles.UploadTitle}>Fast-Track Your Quote</h3>
        <p className={Styles.UploadDesc}>
          Upload a recent electricity bill so our engineers can calculate your
          exact ROI and battery requirements before we even call you.
        </p>

        <div className={Styles.UploadControls}>
          {/* We create a hidden input and link it to a label */}
          <input
            type="file"
            id="billUpload"
            accept=".pdf,.png,.jpg,.jpeg"
            onChange={handleFileChange}
            className={Styles.HiddenInput}
          />

          {/* Conditional rendering based on upload state */}
          {uploadStatus === 'success' ? (
            <div className={Styles.SuccessMessage}>
              <span>✓</span> Bill uploaded successfully!
            </div>
          ) : (
            <>
              {/* STATE 1: No file selected - Show the interactive "Plus" dropzone */}
              {!file && (
                <label
                  htmlFor="billUpload"
                  className={Styles.CustomDropzoneLabel}
                >
                  <div className={Styles.PlusIcon}>+</div>
                  <div className={Styles.DropzoneText}>Add your bill</div>
                  <div className={Styles.DropzoneSubtext}>
                    PDF, PNG, JPG (Max 10MB)
                  </div>
                </label>
              )}

              {/* STATE 2: File selected - Show filename and Upload button */}
              {file && (
                <div className={Styles.SelectedFileState}>
                  <p className={Styles.FileName}>{file.name}</p>

                  {/* Option to change file if they made a mistake */}
                  {uploadStatus !== 'uploading' && (
                    <button
                      onClick={clearFile}
                      className={Styles.ChangeFileLink}
                    >
                      Change file
                    </button>
                  )}

                  <button
                    onClick={handleUpload}
                    disabled={uploadStatus === 'uploading'}
                    className={Styles.UploadBtn}
                  >
                    {uploadStatus === 'uploading'
                      ? 'Uploading...'
                      : 'Confirm & Upload Bill'}
                  </button>
                </div>
              )}

              {uploadStatus === 'error' && (
                <div className={Styles.ErrorMessage}>
                  Upload failed. Please try again or email it to us directly.
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* THE 10 STEPS TIMELINE */}
      <div>
        <h2 className={Styles.TimelineTitle}>What Happens Next?</h2>
        <div className={Styles.StepsList}>
          {steps.map((step, index) => (
            <div key={index} className={Styles.StepCard}>
              <div className={Styles.StepAccent} />
              <div className={Styles.StepContent}>
                <div className={Styles.StepNumber}>STEP {index + 1}</div>
                <div className={Styles.StepTextWrapper}>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
