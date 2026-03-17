import { STANDARD_PAGE_QUERY } from '@/lib/DataQueries';
import StandardPageFrame from '@/Frames/StandardPageFrame';
import { getClient } from '@/Utils/client';

export async function generateMetadata() {
  const client = getClient();
  const { data } = await client.query({
    query: STANDARD_PAGE_QUERY,
    variables: { id: 'cm8emddnvkdlx07ml4p0a3iup' },
  });

  const { page } = data;

  // SEO UPGRADE: Ensuring the title and description focus on 'Home' and 'Installation'
  const METADATA = {
    Url: `https://pac-electrical.co.uk/ev/domestic`,
    SiteName: `${page.metaTitle || 'Home EV Charger Installation Derbyshire'} | Power & Control Ltd`,
    Description: `${page.metaDescription || 'Expert home EV charger installation. OZEV-approved installers for Tesla, Zappi, and Ohme across Derby and the East Midlands.'}`,
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
      type: 'website', // Changed from article to website for a service landing page
    },
  };
}

export default async function DomesticEVPage() {
  const client = getClient();
  const { data } = await client.query({
    query: STANDARD_PAGE_QUERY,
    variables: {
      id: 'cm8emddnvkdlx07ml4p0a3iup',
    },
  });

  const { page } = data;

  // SEO UPGRADE: Domestic-Specific Service Schema
  const domesticEVSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Service',
    serviceType: 'Domestic EV Charger Installation',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Power & Control Ltd',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pac-electrical.co.uk/logo/logo-full.png', // Ensure this path is correct
      },
    },
    description:
      'Safe and professional home electric vehicle charging point installations. OZEV-approved specialist installers in Derbyshire.',
    areaServed: [
      { '@type': 'City', name: 'Derby' },
      { '@type': 'State', name: 'Derbyshire' },
      { '@type': 'State', name: 'Nottinghamshire' },
    ],
    audience: {
      '@type': 'Audience',
      audienceType: 'Homeowners',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(domesticEVSchema) }}
      />

      <StandardPageFrame data={page} />

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.phoenix-fc.co.uk/finance_landing?b=C8B8CE9EE290400B&t=2A9C018824984F2CB1EEFAFA"
        style={{ display: 'block', maxWidth: '1200px', margin: '20px auto' }}
      >
        <img
          src="/images/finance-banners/ev_banner.png"
          alt="We offer finance for domestic EV charger installations."
          style={{ width: '100%', height: 'auto' }}
        />
      </a>
    </>
  );
}
