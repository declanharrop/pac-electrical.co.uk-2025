'use client';

import { useState, useEffect } from 'react';
import Styles from './Styles/CookieBanner.module.css';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already consented or declined
    const consent = localStorage.getItem('pac_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('pac_cookie_consent', 'granted');
    setIsVisible(false);

    // Push the 'granted' signal to Google Tag Manager's Consent API
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        analytics_storage: 'granted',
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem('pac_cookie_consent', 'denied');
    setIsVisible(false);
    // GTM is already 'denied' by default via the GoogleTagManager component, so we just hide the banner.
  };

  if (!isVisible) return null;

  return (
    <div className={Styles.BannerContainer}>
      <div className={Styles.TextContainer}>
        <h3>We Value Your Privacy</h3>
        <p>
          We use cookies to enhance your browsing experience, serve personalised
          ads, and analyse our traffic. By clicking "Accept All", you consent to
          our use of cookies and help us improve our services.
        </p>
      </div>
      <div className={Styles.ButtonGroup}>
        <button
          onClick={handleDecline}
          className="button-alt"
          style={{ margin: 0 }}
        >
          <p>Decline</p>
        </button>
        <button
          onClick={handleAccept}
          className="button"
          style={{ margin: 0, borderColor: 'var(--neon)' }}
        >
          <p>Accept All</p>
        </button>
      </div>
    </div>
  );
}
