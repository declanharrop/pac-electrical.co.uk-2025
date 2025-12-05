import Link from 'next/link';
import BrandsBlock from '@/Components/Blocks/BrandsBlock';
import LargeImageBlock from '@/Components/Blocks/LargeImageBlock';
import LatestStudiesBlock from '@/Components/Blocks/LatestStudiesBlock';
import SmoothScrollLogosBlock from '@/Components/Blocks/SmoothScrollLogosBlock';
import TextWithImageBlock from '@/Components/Blocks/TextWithImageBlock';
import VideoBlock from '@/Components/Blocks/VideoBlock';
import VideoHero from '@/Components/Hero/VideoHero';
import DualCategoryHero from '@/Components/Blocks/Static/DualCategoryHero';
import FeatureVideoSection from '@/Components/Blocks/Static/FeatureVideoSection';
import LatestCaseStudies from '@/Components/Blocks/Dynamic/LatestCaseStudies';

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
      <div style={{ marginTop: '160px' }}>
        <DualCategoryHero
          items={[
            {
              link: '/solar/domestic',
              image: '/images/solar/pac-sol-2.webp',
              alt: 'Domestic Solar from Power & Control',
              title: 'Domestic',
            },
            {
              link: '/solar/commercial',
              image: '/images/solar/comsol1.webp',
              alt: 'Commercial Solar from Power & Control',
              title: 'Commercial',
            },
          ]}
        />
      </div>
      <SmoothScrollLogosBlock margin="0px auto 0px" />
      <FeatureVideoSection
        title="Explore Solar From Power & Control"
        subtitle="Let us show you what an install from Power & Control will look like in your home"
        videoUrl="https://www.youtube.com/watch?v=AVxSuKksEmU"
      />
      <BrandsBlock />
      <TextWithImageBlock />
      <LatestCaseStudies
        title="Solar"
        tags={['Solar']}
        link="/case-studies/solar"
      />
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
