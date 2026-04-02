import Link from 'next/link';
import { STANDARD_PAGE_QUERY } from '@/lib/DataQueries';
import StandardPageFrame from '@/Frames/StandardPageFrame';
import { getClient } from '@/Utils/client';

export async function generateMetadata() {
  const client = getClient();
  const { data } = await client.query({
    query: STANDARD_PAGE_QUERY,
    variables: { id: 'cm7u818b5avby06mnwpd7cvxy' },
  });

  const { page } = data;

  const METADATA = {
    Url: `https://pac-electrical.co.uk/solar/explained`,
    SiteName: `${page.metaTitle} - Power & Control Ltd`,
    Description: `${page.metaDescription}`,
  };
  return {
    title: METADATA.SiteName,
    applicationName: METADATA.SiteName,
    description: METADATA.Description,
    referrer: 'origin-when-cross-origin',
    url: METADATA.Url,
    openGraph: {
      title: METADATA.SiteName,
      siteName: METADATA.SiteName, // Fixed typo: capitalized SiteName
      description: METADATA.Description,
      url: METADATA.Url,
      images: [
        {
          url: `${page.heroImage.image.url}`,
          width: 600,
        },
      ],
      locale: 'en_GB',
      type: 'article',
    },
  };
}

export default async function SolarExplainedPage() {
  const client = getClient();
  const { data } = await client.query({
    query: STANDARD_PAGE_QUERY,
    variables: {
      id: 'cm7u818b5avby06mnwpd7cvxy',
    },
  });

  const { page } = data;

  // Article Schema with LocalBusiness as the Publisher for E-E-A-T authority
  const articleSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Article',
    headline: page.metaTitle || 'Solar Energy Explained',
    description: page.metaDescription,
    image:
      page.heroImage?.image?.url ||
      'https://pac-electrical.co.uk/logo/logo-full.png',
    author: {
      '@type': 'Organization',
      name: 'Power & Control Ltd',
      url: 'https://pac-electrical.co.uk',
    },
    publisher: {
      '@type': 'LocalBusiness',
      name: 'Power & Control Ltd',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pac-electrical.co.uk/logo/logo-full.png',
      },
      // Keep NAP exactly the same for local consistency
      image: 'https://pac-electrical.co.uk/images/domsolar26.jpg',
      telephone: '+44 1332 552320',
      priceRange: '£££',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Unit 2, Colemans Yard, Alfreton Road',
        addressLocality: 'Derby',
        addressRegion: 'Derbyshire',
        postalCode: 'DE21 4AL',
        addressCountry: 'UK',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <StandardPageFrame data={page} solar />

      <Link href="/solar/finance" style={{ fontSize: '18px' }}>
        <img
          src="/images/finance-banners/solar_banner.png"
          alt="We offer finance."
          style={{ width: '100%', marginTop: '10px', maxWidth: '1200px' }}
        />
      </Link>
    </>
  );
}
