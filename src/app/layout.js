import localFont from 'next/font/local';
import { Urbanist } from 'next/font/google';
import StyledJsxRegistry from '@/Utils/registry';
import './globals.css';
import { ApolloWrapper } from '@/Utils/ApolloWrapper';
import ProgressBarProviders from '@/Utils/ProgressBarProvider';
import HeaderBar from '@/Components/Header/HeaderBar';
import { HeaderProvider } from '@/Context/HeaderContext';
import MobileNavDock from '@/Components/Header/MobileNavDock';
import { CaseStudiesProvider } from '@/Context/CaseStudiesContext';
import Footer from '@/Components/Footer/Footer';

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
  Url: 'https://pac-electrical.co.uk',
  SiteName: 'Power & Control - Solar Installer & Commercial Electrician',
  Description: '',
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
    <html lang="en" className={`${urbanist.variable} ${GoodTimes.variable}`}>
      <body>
        <StyledJsxRegistry>
          <HeaderProvider>
            <HeaderBar />
            <ApolloWrapper>
              <ProgressBarProviders>
                <CaseStudiesProvider>
                  <main>{children}</main>
                  <Footer />
                </CaseStudiesProvider>
              </ProgressBarProviders>
              {/* <MobileNavDock /> */}
            </ApolloWrapper>
          </HeaderProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
