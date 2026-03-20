'use client';

import Script from 'next/script';

export default function GoogleTagManager({ gtmId }) {
  if (!gtmId) return null;

  return (
    <>
      {/* 1. Initialise dataLayer and set DEFAULT consent state */}
      <Script
        id="gtm-consent-default"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;

            // Instantly deny everything by default to ensure compliance
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'wait_for_update': 500
            });

            // Start GTM
            dataLayer.push({
              'gtm.start': new Date().getTime(),
              event: 'gtm.js'
            });
          `,
        }}
      />

      {/* 2. Load the actual GTM script */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`}
      />
    </>
  );
}
