import { STANDARD_PAGE_QUERY } from '@/lib/DataQueries';
import StandardPageFrame from '@/Frames/StandardPageFrame';
import { getClient } from '@/Utils/client';

export async function generateMetadata() {
  const client = getClient();
  const { data } = await client.query({
    query: STANDARD_PAGE_QUERY,
    variables: { id: 'cm7ucystl05xx08lcdr264jpd' },
  });

  const { page } = data;

  const METADATA = {
    Url: `https://pac-electrical.co.uk/solar/battery`,
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
      siteName: METADATA.SiteName, // Fixed typo: capitalised SiteName to match object
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

export default async function BatteryStoragePage() {
  const client = getClient();
  const { data } = await client.query({
    query: STANDARD_PAGE_QUERY,
    variables: {
      id: 'cm7ucystl05xx08lcdr264jpd',
    },
  });

  const { page } = data;

  // The perfectly formatted Battery Schema with your exact NAP data
  const batterySchema = {
    '@context': 'https://schema.org/',
    '@type': 'Service',
    serviceType: 'Solar Battery Storage Installation',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Power & Control Ltd',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pac-electrical.co.uk/logo/logo-full.png',
      },
      image: 'https://pac-electrical.co.uk/images/battery-install.jpg', // Update this if you have a specific battery install image
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
    areaServed: [
      { '@type': 'State', name: 'Derbyshire' },
      { '@type': 'State', name: 'Nottinghamshire' },
      { '@type': 'State', name: 'Leicestershire' },
      { '@type': 'Region', name: 'East Midlands' },
    ],
    serviceOutput: 'AC and DC Coupled Solar Battery Storage Systems',
    audience: {
      '@type': 'Audience',
      audienceType: 'Homeowners and Businesses',
    },
  };

  return (
    <>
      {/* Injecting the Schema for Google to parse */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(batterySchema) }}
      />

      <StandardPageFrame data={page} solar />

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.phoenix-fc.co.uk/finance_landing?b=CFFCCA89861C482C&t=2A9C018824984F2CB1EEFAFA"
        style={{ fontSize: '18px' }}
      >
        <img
          src="/images/finance-banners/battery_banner.png"
          alt="We offer finance."
          style={{ width: '100%', marginTop: '10px', maxWidth: '1200px' }}
        />
      </a>
    </>
  );
}
