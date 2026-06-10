'use client';

import { useState, useRef } from 'react';
import QRCode from 'react-qr-code';
import styles from './Staff.module.css';

export default function StaffReferralGenerator() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [referralCode, setReferralCode] = useState('');

  const qrRef = useRef(null);

  // The base URL for the quote tool
  const baseUrl = 'https://pac-electrical.co.uk/quote';

  // Construct the final URL dynamically
  const generatedUrl = referralCode
    ? `${baseUrl}?referral=${encodeURIComponent(referralCode.trim())}`
    : baseUrl;

  // --- LOGIN LOGIC ---
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'PAC2026**') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
      setPassword('');
    }
  };

  // --- DOWNLOAD LOGIC (SVG to PNG) ---
  const downloadQRCode = () => {
    if (!qrRef.current) return;

    // Get the SVG element
    const svgElement = qrRef.current;
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    // Convert SVG to data URL
    const svgBlob = new Blob([svgData], {
      type: 'image/svg+xml;charset=utf-8',
    });
    const DOMURL = window.URL || window.webkitURL || window;
    const url = DOMURL.createObjectURL(svgBlob);

    img.onload = () => {
      // Set canvas dimensions to match the QR code
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw a white background (otherwise PNG is transparent and hard to print)
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw the QR code on top
      ctx.drawImage(img, 0, 0);
      DOMURL.revokeObjectURL(url);

      // Trigger the download
      const pngUrl = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = `PAC-QR-${referralCode || 'Standard'}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };
    img.src = url;
  };

  // --- VIEW 1: PASSWORD SCREEN ---
  if (!isAuthenticated) {
    return (
      <main className={styles.Wrapper}>
        <div className={styles.Card}>
          <h1 className={styles.Title}>
            STAFF <span>PORTAL</span>
          </h1>
          <p className={styles.Subtitle}>
            Enter the staff password to access marketing tools.
          </p>

          <form onSubmit={handleLogin}>
            <div className={styles.InputGroup}>
              <label className={styles.Label}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.Input}
                placeholder="•••••••"
                autoFocus
              />
            </div>
            <button type="submit" className={styles.Button}>
              Access Tools
            </button>
          </form>
        </div>
      </main>
    );
  }

  // --- VIEW 2: GENERATOR SCREEN ---
  return (
    <main className={styles.Wrapper}>
      <div className={styles.Card}>
        <h1 className={styles.Title}>
          QR <span>GENERATOR</span>
        </h1>
        <p className={styles.Subtitle}>
          Type your custom referral code to instantly generate a tracking link
          and QR code.
        </p>

        <div className={styles.InputGroup}>
          <label className={styles.Label}>Referral Code / Campaign Name</label>
          <input
            type="text"
            value={referralCode}
            onChange={(e) => setReferralCode(e.target.value)}
            className={styles.Input}
            placeholder="e.g. Ben-01 or SummerExpo"
          />
        </div>

        <div className={styles.UrlPreview}>{generatedUrl}</div>

        <div className={styles.QrContainer}>
          <QRCode
            value={generatedUrl}
            size={200}
            level="H" /* High error correction so it scans easily even if slightly damaged */
            ref={qrRef}
          />
        </div>

        <button onClick={downloadQRCode} className={styles.Button}>
          Download QR (.PNG)
        </button>
      </div>
    </main>
  );
}
