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
    '@type': ['LocalBusiness', 'Electrician'],
    name: 'Power & Control Ltd',
    image: 'https://pac-electrical.co.uk/images/sustain1.webp',
    '@id': 'https://pac-electrical.co.uk/',
    url: 'https://pac-electrical.co.uk/',
    telephone: 'YOUR_PHONE_NUMBER_HERE',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'YOUR_STREET_ADDRESS',
      addressLocality: 'Derby',
      addressRegion: 'Derbyshire', // Explicitly calling out the county
      postalCode: 'YOUR_POSTCODE',
      addressCountry: 'UK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.9225,
      longitude: -1.4746,
    },
    // Derbyshire pushed to the front of the line for local maps
    areaServed: [
      'Derbyshire',
      'Derby',
      'Nottingham',
      'Leicester',
      'East Midlands',
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
      <SolarBrandsBlock />
      <EVBrandsBlock margin="-40px 0 0 0" />
    </div>
  );
}
