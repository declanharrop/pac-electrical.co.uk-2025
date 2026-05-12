import { Suspense } from 'react';
import EVBrandsBlock from '@/Components/Blocks/BrandAccredBlocks/EVBrandsBlock';
import SolarBrandsBlock from '@/Components/Blocks/BrandAccredBlocks/SolarBrandsBlock';
import LatestProjects from '@/ComponentsV2/ContentBlocks/Dynamic/LatestProjects';
import NewsSection from '@/Components/Blocks/Static/NewsSection';
import ThreeItemBlock from '@/Components/Blocks/ThreeItemBlock';
import VideoHero from '@/Components/Hero/VideoHero';
import RecruitingBanner from '@/ComponentsV2/ContentBlocks/Static/RecruitingBanner';
import GoogleReviews from '@/ComponentsV2/ContentBlocks/Dynamic/GoogleReviews';
import { getGoogleReviews } from '@/Utils/getGoogleReviews';

export default async function HomePage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://pac-electrical.co.uk/#website',
        url: 'https://pac-electrical.co.uk/',
        name: 'P&C Electrical',
        alternateName: [
          'Power & Control',
          'Power & Control Ltd',
          'PAC Electrical',
        ],
        publisher: { '@id': 'https://pac-electrical.co.uk/#organization' },
      },
      {
        '@type': ['LocalBusiness', 'Electrician'],
        '@id': 'https://pac-electrical.co.uk/#organization',
        additionalType: 'https://en.wikipedia.org/wiki/Solar_panel',
        name: 'P&C Electrical',
        alternateName: 'Power & Control Ltd',
        // SEO UPGRADE: Added description to reinforce the new commercial contracting focus
        description:
          'Premium Solar & Electrical Contracting Specialists serving Derby and the East Midlands.',
        image: 'https://pac-electrical.co.uk/images/solar/comsolar26.jpg',
        url: 'https://pac-electrical.co.uk/',
        telephone: '01332552320',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Unit 2, Colemans Yard, Alfreton Road',
          addressLocality: 'Derby',
          addressRegion: 'Derbyshire',
          postalCode: 'DE21 4AL',
          addressCountry: 'UK',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 52.9225,
          longitude: -1.4746,
        },
        areaServed: [
          'Derbyshire',
          'Derby',
          'Nottingham',
          'Leicester',
          'East Midlands',
        ],
        knowsAbout: [
          'Commercial Solar PV Installation',
          'Domestic Solar Installation',
          'Residential Solar Installation',
          'Solar Battery Storage',
          'Commercial Electrical Contracting',
          'EV Charger Installation',
        ],
      },
    ],
  };

  const reviewsData = await getGoogleReviews();

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaGraph),
        }}
      />

      <VideoHero height="100dvh">
        {/* SEO UPGRADE: Aligned H1 exactly with the new global Title Tag while keeping the local keyword */}
        <h1>Solar & Electrical Contracting Specialists in Derbyshire</h1>
        {/* SEO UPGRADE: Refined H3 to sound more professional/commercial while keeping the brand transition bridge */}
        <h3>
          P&C Electrical - Premium solar PV, EV charging, and commercial
          electrical solutions.
        </h3>
      </VideoHero>

      <ThreeItemBlock />

      <Suspense
        fallback={
          <div style={{ height: 400, background: '#f9f9f9' }}>
            Loading News...
          </div>
        }
      >
        <NewsSection />
      </Suspense>
      <RecruitingBanner />
      <LatestProjects />
      <div style={{ marginBottom: '-80px' }} />
      <GoogleReviews reviewsData={reviewsData} />

      <section
        style={{
          textAlign: 'center',
          padding: '50px 20px 50px',
          maxWidth: '800px',
          margin: '0px auto',
          zIndex: '500',
        }}
      >
        <h2 style={{ marginBottom: '10px' }}>
          Proudly Serving the East Midlands
        </h2>
        <p style={{ lineHeight: '1.6' }}>
          From our headquarters in Derby, P&C Electrical provides premium
          commercial electrical, solar PV, and EV charging installations across{' '}
          <strong>
            Derbyshire, Nottinghamshire, Leicestershire, and the wider East
            Midlands
          </strong>
          .
        </p>
      </section>

      <SolarBrandsBlock />
      <EVBrandsBlock margin="-40px 0 0 0" />
    </div>
  );
}
