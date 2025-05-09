import { GetAQuoteProvider } from '@/Context/GetAQuoteContext';

const METADATA = {
  Url: 'https://pac-electrical.co.uk/get-a-quote',
  SiteName: 'Get a quote from Power & Control ',
  Description:
    'Request a Quote: Power & Control provides professional electrical and renewable energy solutions. Get your personalised quote for solar, EV chargers, or commercial projects.',
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
export default function GetAQuoteLayout({ children }) {
  return (
    <div style={{ marginTop: '80px' }}>
      <GetAQuoteProvider>{children}</GetAQuoteProvider>
    </div>
  );
}
