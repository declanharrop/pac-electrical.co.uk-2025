'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import QRCode from 'react-qr-code';
import Cookies from 'js-cookie';
import imageCompression from 'browser-image-compression'; // NEW IMPORT
import Styles from '@/Styles/Pages/ThankYou.module.css';

export default function EvDomesticThankYou() {
  const searchParams = useSearchParams();
  const [sessionId, setSessionId] = useState('');
  const [currentUrl, setCurrentUrl] = useState('');
  const [uploadStatus, setUploadStatus] = useState('idle');

  const [photos, setPhotos] = useState({
    meter: null,
    consumerUnit: null,
    cable1: null,
    cable2: null,
    cable3: null,
  });

  useEffect(() => {
    const urlSession = searchParams.get('session');
    let activeSession = '';

    if (urlSession) {
      activeSession = urlSession;
      Cookies.set('quoteSessionId', urlSession, { expires: 7 });
    } else {
      activeSession = Cookies.get('quoteSessionId') || '';
    }

    setSessionId(activeSession);

    if (typeof window !== 'undefined' && activeSession) {
      const baseUrl = window.location.origin + window.location.pathname;
      setCurrentUrl(`${baseUrl}?session=${activeSession}`);
    }
  }, [searchParams]);

  // --- NEW: COMPRESSION LOGIC ---
  const handlePhotoChange = async (key, e) => {
    if (e.target.files && e.target.files.length > 0) {
      const originalFile = e.target.files[0];

      const options = {
        maxSizeMB: 1, // Shrinks the image down to a maximum of 1MB
        maxWidthOrHeight: 1920, // Re-scales massive 4K photos to standard HD
        useWebWorker: true,
      };

      try {
        // Compress the image before setting it to state
        const compressedFile = await imageCompression(originalFile, options);

        setPhotos((prev) => ({
          ...prev,
          [key]: compressedFile,
        }));
      } catch (error) {
        console.error('Error compressing image:', error);
        alert(
          'There was an issue processing your image. Please try another one.',
        );
      }
    }
  };

  const handleUploadAll = async () => {
    const allUploaded = Object.values(photos).every((file) => file !== null);
    if (!allUploaded) {
      alert('Please upload all 5 photos before submitting.');
      return;
    }

    if (!sessionId) return;
    setUploadStatus('uploading');

    const formData = new FormData();
    formData.append('sessionId', sessionId);
    formData.append('meter', photos.meter);
    formData.append('consumerUnit', photos.consumerUnit);
    formData.append('cable1', photos.cable1);
    formData.append('cable2', photos.cable2);
    formData.append('cable3', photos.cable3);

    try {
      const response = await fetch('/api/upload-ev-survey', {
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

  const photoConfig = [
    {
      id: 'meter',
      title: '1. Main Meter Box',
      desc: 'Inside your electricity meter box',
    },
    {
      id: 'consumerUnit',
      title: '2. Consumer Unit',
      desc: 'Inside your fuse board',
    },
    {
      id: 'cable1',
      title: '3. Cable Route (Start)',
      desc: 'Area around the meter/fuse board',
    },
    {
      id: 'cable2',
      title: '4. Cable Route (Middle)',
      desc: 'The path the cable will take',
    },
    {
      id: 'cable3',
      title: '5. Charger Location',
      desc: 'Where the charger will be mounted',
    },
  ];

  return (
    <div
      className={Styles.Container}
      style={{
        '--theme-bg': 'var(--navy-25)',
        '--theme-border': 'var(--neon-50)',
        '--theme-accent': 'var(--neon)',
      }}
    >
      <div className={Styles.Header}>
        <h1>Quote Submitted!</h1>
        <p className={Styles.Subtitle}>
          Our engineers need to visualise your electrical setup to finalise your
          quote. Upload the 5 photos below to fast-track your home EV charger
          installation.
        </p>
      </div>

      {currentUrl && (
        <div className={Styles.MobileHandoff}>
          <div className={Styles.QrWrapper}>
            <QRCode value={currentUrl} size={120} />
          </div>
          <div className={Styles.HandoffText}>
            <h3>Viewing on a computer?</h3>
            <p>
              Leave this page open and scan the QR code with your smartphone
              camera. It will instantly open your unique quote session on your
              phone so you can easily walk around the house and snap the
              required photos.
            </p>
          </div>
        </div>
      )}

      <div className={Styles.UploadWidget}>
        <h3 className={Styles.UploadTitle} style={{ color: 'var(--black)' }}>
          Site Survey Photos
        </h3>

        {uploadStatus === 'success' ? (
          <div className={Styles.SuccessMessage} style={{ marginTop: '20px' }}>
            <span>✓</span> All site survey photos securely uploaded! We will be
            in touch shortly.
          </div>
        ) : (
          <>
            <div className={Styles.PhotoGrid}>
              {photoConfig.map((photo) => (
                <div
                  key={photo.id}
                  className={`${Styles.PhotoSlot} ${photos[photo.id] ? Styles.hasFile : ''}`}
                >
                  <input
                    type="file"
                    id={`upload-${photo.id}`}
                    accept=".png,.jpg,.jpeg"
                    onChange={(e) => handlePhotoChange(photo.id, e)}
                    className={Styles.HiddenInput}
                  />
                  <label
                    htmlFor={`upload-${photo.id}`}
                    className={Styles.SlotLabel}
                  >
                    <div className={Styles.SlotTitle}>{photo.title}</div>
                    <div className={Styles.SlotDesc}>{photo.desc}</div>

                    {photos[photo.id] ? (
                      <div className={Styles.FileSelectedText}>✓ Added</div>
                    ) : (
                      <div className={Styles.SlotPlusIcon}>+</div>
                    )}
                  </label>
                </div>
              ))}
            </div>

            {/* Changed from 'button' to 'button-alt' to match your global styles and stand out */}
            <button
              type="button"
              onClick={handleUploadAll}
              disabled={uploadStatus === 'uploading'}
              className="button"
              style={{ width: '100%', maxWidth: '400px', height: '50px' }}
            >
              <p>
                {uploadStatus === 'uploading'
                  ? 'Uploading Photos...'
                  : 'Submit Survey Photos'}
              </p>
            </button>

            {uploadStatus === 'error' && (
              <div
                className={Styles.ErrorMessage}
                style={{ marginTop: '20px', color: 'red' }}
              >
                Upload failed. Please ensure your connection is stable and try
                again.
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
