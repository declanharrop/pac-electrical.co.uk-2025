import VideoHero from '@/Components/Hero/VideoHero';

const METADATA = {
  Url: 'https://pac-electrical.co.uk/thank-you',
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
export default function ThankYou() {
  return (
    <div>
      <VideoHero height="80vh">
        <h1>Thank You</h1>
        <h3>You will recieve an email shortly</h3>
      </VideoHero>
    </div>
  );
}
