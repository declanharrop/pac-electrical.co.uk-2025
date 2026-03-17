import { Suspense } from 'react';
import EVBrandsBlock from '@/Components/Blocks/BrandAccredBlocks/EVBrandsBlock';
import SolarBrandsBlock from '@/Components/Blocks/BrandAccredBlocks/SolarBrandsBlock';
import CaseStudiesBlock from '@/Components/Blocks/CaseStudiesBlock/CaseStudiesBlock';
import SimpleHeaderTextBlock from '@/Components/Blocks/SimpleHeaderTextBlock';
import NewsSection from '@/Components/Blocks/Static/NewsSection';
import ThreeItemBlock from '@/Components/Blocks/ThreeItemBlock';
import VideoHero from '@/Components/Hero/VideoHero';

export default function HomePage() {
  // SEO UPGRADE: Schema now prioritizes Derbyshire as the primary region
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    // 1. Stick to the official, recognized Schema types
    '@type': ['LocalBusiness', 'Electrician'],
    // 2. SEO UPGRADE: Tie your entity directly to the concept of Solar
    additionalType: 'https://en.wikipedia.org/wiki/Solar_panel',
    name: 'Power & Control Ltd',
    image: 'https://pac-electrical.co.uk/images/solar/comsolar26.jpg',
    '@id': 'https://pac-electrical.co.uk/',
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
    // 3. SEO UPGRADE: Explicitly tell Google exactly what you are experts in
    knowsAbout: [
      'Commercial Solar PV Installation',
      'Domestic Solar Installation',
      'Solar Battery Storage',
      'Commercial Electrical Contracting',
      'EV Charger Installation',
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <VideoHero height="75vh">
        {/* SEO UPGRADE: Solar-first, Derbyshire-focused H1 */}
        <h1 style={{ marginBottom: '20px' }}>
          Solar Panel Installers in Derbyshire | EV & Commercial Electrical
        </h1>
        <h3>
          Power & Control: Sustainable energy solutions for homes and
          businesses.
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

      <CaseStudiesBlock />
      <SimpleHeaderTextBlock margin="100px 0 100px 0" />

      <section
        style={{
          textAlign: 'center',
          padding: '0 20px 40px',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <h2 style={{ marginBottom: '10px' }}>
          Proudly Serving the East Midlands
        </h2>
        <p style={{ lineHeight: '1.6' }}>
          From our headquarters in Derby, Power & Control provides premium
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
