import localFont from 'next/font/local';
import { Urbanist } from 'next/font/google';
import Script from 'next/script';
import StyledJsxRegistry from '@/Utils/registry';
import './globals.css';
import { ApolloWrapper } from '@/Utils/ApolloWrapper';
import ProgressBarProviders from '@/Utils/ProgressBarProvider';
import HeaderBar from '@/Components/Header/HeaderBar';
import { HeaderProvider } from '@/Context/HeaderContext';
import { CaseStudiesProvider } from '@/Context/CaseStudiesContext';
import Footer from '@/Components/Footer/Footer';
import FinanceSticker from '@/Components/FinanceSticker/FinanceSticker';

// --- NEW TRACKING IMPORTS ---
import GoogleTagManager from '@/Components/Tracking/GoogleTagManager';
import CookieBanner from '@/Components/Tracking/CookieBanner';
import WhatsAppButton from '@/Elements/Buttons/WhatAppButton';

// --- GLOBAL FLOATING ELEMENTS ---

const GoodTimes = localFont({
  src: [
    {
      path: './fonts/GoodTimesRG.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/GoodTimesELG.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
  subsets: ['latin'],
  variable: '--font-good-times',
  display: 'swap',
});

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
  display: 'swap',
});

// SEO UPGRADE: Core Brand Data
const METADATA = {
  Url: 'https://pac-electrical.co.uk',
  SiteName: 'P&C Electrical',
  Tagline: 'Solar & Electrical Contracting Specialists',
  Description:
    'Trusted commercial electrical and renewable energy contractors serving Derby, Derbyshire, and the East Midlands. Specialising in Solar PV, Battery Storage, and EV charging.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL(METADATA.Url),
  // SEO UPGRADE: Custom Homepage Title vs Subpage Template
  title: {
    default: `${METADATA.Tagline} - ${METADATA.SiteName}`,
    template: `%s | ${METADATA.SiteName}`, // Keeps subpage SERP snippets from truncating
  },
  applicationName: METADATA.SiteName,
  description: METADATA.Description,
  referrer: 'origin-when-cross-origin',
  openGraph: {
    title: `${METADATA.Tagline} - ${METADATA.SiteName}`,
    description: METADATA.Description,
    url: METADATA.Url,
    siteName: METADATA.SiteName,
    images: [
      {
        url: '/images/sustain1.webp',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
};

export default async function RootLayout({ children }) {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <>
      <html
        lang="en-GB"
        className={`${urbanist.variable} ${GoodTimes.variable}`}
      >
        <head>
          <meta charSet="UTF-8" />
        </head>
        <body>
          {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}

          <StyledJsxRegistry>
            <HeaderProvider>
              <HeaderBar />
              <ApolloWrapper>
                <ProgressBarProviders>
                  <CaseStudiesProvider>
                    <FinanceSticker />
                    <main>{children}</main>
                    <Footer />
                  </CaseStudiesProvider>
                </ProgressBarProviders>
              </ApolloWrapper>
            </HeaderProvider>
          </StyledJsxRegistry>

          <CookieBanner />
          <WhatsAppButton />

          <Script id="omnisend-script" strategy="beforeInteractive">
            {`window.omnisend = window.omnisend || [];
              omnisend.push(["brandID", "651d189f4a7798b9cbd3e927"]);
              omnisend.push(["track", "$pageViewed"]);
              !function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://omnisnippet1.com/inshop/launcher-v2.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();
            `}
          </Script>
        </body>
      </html>
    </>
  );
}
