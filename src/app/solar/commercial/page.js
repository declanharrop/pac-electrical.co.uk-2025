import { client } from '@/sanity/client';
import { PAGE_BUILDER_QUERY } from '@/sanity/queries';
import PageBuilderFrame from '@/Frames/PageBuilderFrame';

export const revalidate = 60;

async function getPageData() {
  return client.fetch(PAGE_BUILDER_QUERY, { slug: 'solar/commercial' });
}

export async function generateMetadata() {
  const page = await getPageData();

  if (!page)
    return { title: 'Commercial Solar Panel Installers - Power & Control' };

  return {
    // SEO UPGRADE: Professional B2B keywords
    title: `${page.metaTitle || 'Commercial Solar PV & Battery Storage'} | Power & Control Ltd`,
    description:
      page.metaDescription ||
      'Scale your business with sustainable energy. Professional commercial solar installation, O&M, and battery storage for businesses in Derbyshire and the UK.',
    openGraph: {
      images: [page.hero?.imageUrl],
    },
  };
}

export default async function CommercialSolarPage() {
  const page = await getPageData();

  if (!page) {
    return (
      <div style={{ padding: '100px', textAlign: 'center' }}>
        <h1
          style={{ fontFamily: 'var(--font-good-times)', marginBottom: '20px' }}
        >
          Page Setup Required
        </h1>
        <p style={{ fontFamily: 'var(--font-urbanist)', fontSize: '1.2rem' }}>
          Please go to Sanity Studio and set the slug to:{' '}
          <code>solar/commercial</code>
        </p>
      </div>
    );
  }

  // SEO UPGRADE: High-Value Commercial Service Schema
  const commercialSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Service',
    serviceType: 'Commercial Solar PV Installation',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Power & Control Ltd',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pac-electrical.co.uk/logo/logo-full.png',
      },
      // --- THE FIX: LocalBusiness SEO Boosters added here ---
      image: 'https://pac-electrical.co.uk/images/comsolar26.jpg', // Add a URL of your team/van on a commercial site
      telephone: '+44 1332 552320', // Replace with your actual Derby office number
      priceRange: '££££', // 4 £s signals high-ticket B2B work
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Unit 2, Colemans Yard, Alfreton Road', // e.g., "Unit 4, Industrial Estate"
        addressLocality: 'Derby',
        addressRegion: 'Derbyshire',
        postalCode: 'DE21 4AL', // Replace with your postcode
        addressCountry: 'UK',
      },
      // -----------------------------------------------------
    },
    areaServed: [
      { '@type': 'State', name: 'Derbyshire' },
      { '@type': 'State', name: 'Nottinghamshire' },
      { '@type': 'State', name: 'Leicestershire' },
      { '@type': 'Region', name: 'East Midlands' },
      { '@type': 'Country', name: 'United Kingdom' },
    ],
    serviceOutput: 'Industrial Grade Solar Energy Systems',
    audience: {
      '@type': 'Audience',
      audienceType: 'Business and Industrial',
    },
  };
  return (
    <>
      {/* SEO UPGRADE: Injecting Commercial Specific Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(commercialSchema) }}
      />

      <PageBuilderFrame data={page} isSolar />
    </>
  );
}
