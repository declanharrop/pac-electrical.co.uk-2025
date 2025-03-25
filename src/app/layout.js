import localFont from 'next/font/local';
import { Urbanist } from 'next/font/google';
import Script from 'next/script';
import { Suspense } from 'react';
import { GoogleTagManager } from '@next/third-parties/google';
import StyledJsxRegistry from '@/Utils/registry';
import './globals.css';
import { ApolloWrapper } from '@/Utils/ApolloWrapper';
import ProgressBarProviders from '@/Utils/ProgressBarProvider';
import HeaderBar from '@/Components/Header/HeaderBar';
import { HeaderProvider } from '@/Context/HeaderContext';
import MobileNavDock from '@/Components/Header/MobileNavDock';
import { CaseStudiesProvider } from '@/Context/CaseStudiesContext';
import Footer from '@/Components/Footer/Footer';
import GoogleAnalytics from '@/Utils/GoogleAnalytics';
import CookieBanner from '@/Utils/CookieBanner';

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

const METADATA = {
  Url: 'https://pac-electrical.co.uk/',
  SiteName: 'Power & Control - Commercial Electrical & Solar Experts',
  Description:
    'Trusted electrical and renewable energy contractors, Power & Control, serving the Midlands and beyond. Specialising in solar, EV charging, and Commercial Electrical.',
};
export const metadata = {
  title: METADATA.SiteName,
  applicationName: METADATA.SiteName,
  description: METADATA.Description,
  referrer: 'origin-when-cross-origin',
  url: METADATA.Url,
  openGraph: {
    title: METADATA.SiteName,
    description: METADATA.Description,
    url: METADATA.Url,
    images: [
      {
        url: `${METADATA.Url}/images/sustain1.webp`, // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
};

export default async function RootLayout({ children }) {
  return (
    <>
      <html lang="en" className={`${urbanist.variable} ${GoodTimes.variable}`}>
        <head>
          <meta charSet="UTF-8" />
          {/* <Script id="gtm" strategy="beforeInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KG2WZ9N');`}
          </Script> */}
        </head>
        <body>
          <Suspense>
            <GoogleAnalytics GA_MEASUREMENT_ID="GTM-KG2WZ9N" />
          </Suspense>
          <StyledJsxRegistry>
            <HeaderProvider>
              <HeaderBar />
              <ApolloWrapper>
                <ProgressBarProviders>
                  <CaseStudiesProvider>
                    <main>{children}</main>
                    <Footer />
                    <CookieBanner />
                  </CaseStudiesProvider>
                </ProgressBarProviders>
              </ApolloWrapper>
            </HeaderProvider>
          </StyledJsxRegistry>
          <Script
            afterInteractive
            dangerouslySetInnerHTML={{
              __html: `document.getElementById("button").addEventListener("click", function() {  gtag("event", "button_click", {    "button_id": "button"  });});`,
            }}
          />
        </body>
      </html>
    </>
  );
}
