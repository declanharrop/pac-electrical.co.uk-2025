import { STANDARD_PAGE_QUERY } from '@/lib/DataQueries';
import StandardPageFrame from '@/Frames/StandardPageFrame';
import { getClient } from '@/Utils/client';

export async function generateMetadata() {
  const client = getClient();
  const { data } = await client.query({
    query: STANDARD_PAGE_QUERY,
    variables: { id: 'cm8emndzukhm407mlldub82sz' },
  });

  const { page } = data;

  // SEO UPGRADE: Focus on 'Workplace', 'Fleet', and 'Commercial'
  const METADATA = {
    Url: `https://pac-electrical.co.uk/ev/commercial`,
    SiteName: `${page.metaTitle || 'Commercial EV Charging & Fleet Solutions'} | Power & Control Ltd`,
    Description: `${page.metaDescription || 'Specialist workplace EV charging installation for businesses. OZEV-approved fleet charging solutions across Derbyshire and the UK.'}`,
  };

  return {
    title: METADATA.SiteName,
    applicationName: 'Power & Control Ltd',
    description: METADATA.Description,
    referrer: 'origin-when-cross-origin',
    url: METADATA.Url,
    openGraph: {
      title: METADATA.SiteName,
      description: METADATA.Description,
      url: METADATA.Url,
      images: [
        {
          url: `${page.heroImage?.image?.url}`,
          width: 800,
          height: 600,
        },
      ],
      locale: 'en_GB',
      type: 'website',
    },
  };
}

export default async function CommercialEVPage() {
  const client = getClient();
  const { data } = await client.query({
    query: STANDARD_PAGE_QUERY,
    variables: {
      id: 'cm8emndzukhm407mlldub82sz',
    },
  });

  const { page } = data;

  // SEO UPGRADE: B2B/Fleet Specific Service Schema
  const commercialEVSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Service',
    serviceType: 'Commercial EV Charging Installation',
    description:
      'OZEV-approved workplace and fleet EV charging infrastructure. We provide site surveys, load management, and multi-point installation for UK businesses.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Power & Control Ltd',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pac-electrical.co.uk/logo/logo-full.png', // Ensure this path is correct
      },
    },
    areaServed: [
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Region', name: 'East Midlands' },
    ],
    audience: {
      '@type': 'Audience',
      audienceType: 'Business and Industrial',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(commercialEVSchema) }}
      />
      <StandardPageFrame data={page} />
    </>
  );
}
