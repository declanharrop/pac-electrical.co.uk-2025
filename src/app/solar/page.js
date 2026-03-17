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

// SEO UPGRADE: Tweaked metadata to reinforce Derbyshire & buyer intent
const METADATA = {
  Url: 'https://pac-electrical.co.uk/solar',
  SiteName: 'Solar Panel Installers in Derbyshire | Power & Control',
  Description:
    'Maximise your energy savings with professional solar PV & battery storage installations. Top-tier domestic and commercial systems across Derbyshire and the Midlands. Get a free quote!',
};

export const metadata = {
  title: METADATA.SiteName,
  applicationName: 'Power & Control',
  description: METADATA.Description,
  referrer: 'origin-when-cross-origin',
  url: METADATA.Url,
  openGraph: {
    title: METADATA.SiteName,
    description: METADATA.Description,
    url: METADATA.Url,
    images: [
      {
        url: `${METADATA.Url}/images/sustain1.webp`,
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
};

export default function SolarPage() {
  // SEO UPGRADE: Service Schema defining exactly what you sell
  const serviceSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Service',
    serviceType: 'Solar Panel Installation',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Power & Control Ltd',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pac-electrical.co.uk/logo/logo-full.png', // Ensure this path is correct
      },
    },
    areaServed: [
      { '@type': 'State', name: 'Derbyshire' },
      { '@type': 'State', name: 'Nottinghamshire' },
      { '@type': 'State', name: 'Leicestershire' },
      { '@type': 'State', name: 'Staffordshire' }, // If applicable
      { '@type': 'Region', name: 'East Midlands' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Solar Energy Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Domestic Solar PV & Battery Storage',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Solar Panel Systems',
          },
        },
      ],
    },
  };

  return (
    <div>
      {/* SEO UPGRADE: Injecting Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* SEO EMERGENCY FIXED: Adding the H1 back in for Google */}
      <div
        style={{ marginTop: '170px', textAlign: 'center', padding: '0 20px' }}
      >
        <h1 style={{ marginBottom: '10px' }}>
          Solar Panel Installation in Derbyshire
        </h1>
        <p
          style={{
            maxWidth: '800px',
            margin: '0 auto 40px auto',
          }}
        >
          Professional Solar PV and Battery Storage solutions for homes and
          businesses.
        </p>
      </div>

      <div>
        <DualCategoryHero
          items={[
            {
              link: '/solar/domestic',
              image: '/images/solar/pac-sol-2.webp',
              alt: 'Domestic Solar Panel Installation from Power & Control',
              title: 'Domestic',
            },
            {
              link: '/solar/commercial',
              image: '/images/solar/comsol1.webp',
              alt: 'Commercial Solar Panel Systems from Power & Control',
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

      <Link
        href="/solar/finance"
        style={{ fontSize: '18px', display: 'block', textAlign: 'center' }}
      >
        <img
          src="/images/finance-banners/Generic_Banner.png"
          // SEO UPGRADE: Keyword-rich alt text
          alt="Flexible solar panel financing and payment plans in Derbyshire and the East Midlands"
          style={{ width: '100%', marginTop: '10px', maxWidth: '1200px' }}
        />
      </Link>
    </div>
  );
}
