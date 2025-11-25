import Link from 'next/link';
import BrandsBlock from '@/Components/Blocks/BrandsBlock';
import LargeImageBlock from '@/Components/Blocks/LargeImageBlock';
import LatestStudiesBlock from '@/Components/Blocks/LatestStudiesBlock';
import SmoothScrollLogosBlock from '@/Components/Blocks/SmoothScrollLogosBlock';
import TextWithImageBlock from '@/Components/Blocks/TextWithImageBlock';
import VideoBlock from '@/Components/Blocks/VideoBlock';
import VideoHero from '@/Components/Hero/VideoHero';

const METADATA = {
  Url: 'https://pac-electrical.co.uk/solar',
  SiteName: 'Solar PV & Battery Storage - Power & Control',
  Description:
    'Power & Control: Maximise your energy savings with our professional solar panel installations. Top-tier systems for homes & businesses across the Midlands & UK. Get your free solar quote!',
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
export default function SolarPage() {
  return (
    <div>
      {/* <VideoHero margin height="70vh">
        <h1>Solar</h1>
        <h3>Powering your world, your way.</h3>
      </VideoHero> */}
      <SmoothScrollLogosBlock margin="120px auto 100px" />
      <div style={{ marginTop: '-140px' }}>
        <BrandsBlock
          title=""
          brands={[
            {
              link: '/solar/domestic',
              heroImage: '/images/solar/pac-sol-2.webp',
              alt: 'Domestic Solar from Power & Control',
              name: 'Domestic',
            },
            {
              link: '/solar/commercial',
              heroImage: '/images/solar/comsol1.webp',
              alt: 'Comercial Solar from Power & Control',
              name: 'Commercial',
            },
          ]}
        />
      </div>
      <VideoBlock subtitle="Let us show you what an install from Power & Control will look like in your home" />
      <BrandsBlock />
      <TextWithImageBlock />
      <LatestStudiesBlock title="Solar" query="solar" />
      <LargeImageBlock />
      <Link href="/solar/finance" style={{ fontSize: '18px' }}>
        <img
          src="/images/finance-banners/Generic_Banner.png"
          alt="We offer finance."
          style={{ width: '100%', marginTop: '10px', maxWidth: '1200px' }}
        />
      </Link>
    </div>
  );
}
