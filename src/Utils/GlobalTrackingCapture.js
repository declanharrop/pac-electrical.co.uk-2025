// components/GlobalTrackingCapture.jsx

'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Cookies from 'js-cookie';

function CaptureLogic() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Prevent execution during server-side rendering
    if (!searchParams || typeof window === 'undefined') return;

    // We include your custom params + standard ad network params
    const trackableParams = [
      'provider',
      'adId',
      'gclid',
      'fbclid',
      'utm_source',
      'utm_medium',
      'utm_campaign',
    ];

    trackableParams.forEach((param) => {
      const urlValue = searchParams.get(param);

      if (urlValue) {
        // Strict path configuration (path: '/') ensures this cookie is
        // readable across all route segments, including your /quote flow.
        Cookies.set(param, urlValue, {
          expires: 30, // Standard 30-day attribution window
          path: '/',
          sameSite: 'Lax',
        });
      }
    });
  }, [searchParams]);

  return null; // This component is strictly functional and renders nothing visually
}

export default function GlobalTrackingCapture() {
  return (
    // Wrapping in Suspense is mandatory. Without it, useSearchParams()
    // will force your entire root layout to de-opt into dynamic rendering.
    <Suspense fallback={null}>
      <CaptureLogic />
    </Suspense>
  );
}
