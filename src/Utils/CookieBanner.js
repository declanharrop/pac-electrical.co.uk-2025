'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '@/lib/storageHelper';
import Styles from './Styles/CookieBanner.module.css';

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(null);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage('cookie_consent', null);
    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied';
    if (typeof window.gtag !== 'undefined') {
      window.gtag('consent', 'update', {
        ad_user_data: newValue,
        ad_personalization: newValue,
        ad_storage: newValue,
        analytics_storage: newValue,
      });
    }
    setLocalStorage('cookie_consent', cookieConsent);
  }, [cookieConsent]);

  if (cookieConsent != null) {
    return null;
  }
  return (
    <div className={Styles.CookieBanner}>
      <div className="">
        {/* <Link href="/info/cookies"> */}
        <h4>Our website uses cookies.</h4>
        <p>
          By clicking "Yes, I'm happy" you allow cookies that improve your
          experience on our website, help us analyse our performance and enable
          us to show you relevant marketing content.
        </p>
        {/* </Link> */}
      </div>

      <div className={Styles.ButtonPlacer}>
        <button
          type="button"
          className={Styles.MiniButton}
          onClick={() => setCookieConsent(false)}
        >
          Decline
        </button>
        <button
          type="button"
          className={Styles.AcceptButton}
          onClick={() => setCookieConsent(true)}
        >
          Allow Cookies
        </button>
      </div>
    </div>
  );
}
