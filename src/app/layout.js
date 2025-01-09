import localFont from 'next/font/local';
import { Urbanist } from 'next/font/google';
import StyledJsxRegistry from '@/Utils/registry';
import './globals.css';
import { ApolloWrapper } from '@/Utils/ApolloWrapper';
import ProgressBarProviders from '@/Utils/ProgressBarProvider';
import HeaderBar from '@/Components/Header/HeaderBar';
import { HeaderProvider } from '@/Context/HeaderContext';
import MobileNavDock from '@/Components/Header/MobileNavDock';

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

const APP_NAME = 'Power & Control - Solar Installer & Commercial Electrician';
const APP_DEFAULT_TITLE =
  'Power & Control - Solar Installer & Commercial Electrician';
const APP_TITLE_TEMPLATE =
  'Power & Control - Solar Installer & Commercial Electrician';
const APP_DESCRIPTION = 'Derby Solar Installer & Commercial Electrician';
export const metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};
export const viewport = {
  themeColor: '#FFFFFF',
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
                <main>{children}</main>
              </ProgressBarProviders>
              {/* <MobileNavDock /> */}
            </ApolloWrapper>
          </HeaderProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
