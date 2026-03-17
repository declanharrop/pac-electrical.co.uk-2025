import { STANDARD_PAGE_QUERY } from '@/lib/DataQueries';
import StandardPageFrame from '@/Frames/StandardPageFrame';
import { client } from '@/sanity/client';
import { PAGE_BUILDER_QUERY } from '@/sanity/queries';
import PageBuilderFrame from '@/Frames/PageBuilderFrame';

// 1. Revalidation (ISR)
export const revalidate = 60;

// 2. Fetch Data Helper
async function getPageData() {
  // We fetch the page where the slug exactly matches "solar/domestic"
  return client.fetch(PAGE_BUILDER_QUERY, { slug: 'solar/domestic' });
}

// 3. Metadata
export async function generateMetadata() {
  const page = await getPageData();

  if (!page) return { title: 'Page Not Found' };

  return {
    title: `${page.metaTitle || page.title} - Power & Control Ltd`,
    description: page.metaDescription,
    openGraph: {
      images: [page.hero?.imageUrl],
    },
  };
}

const domesticServiceSchema = {
  '@context': 'https://schema.org/',
  '@type': 'Service',
  serviceType: 'Domestic Solar Panel Installation',
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
    { '@type': 'Region', name: 'East Midlands' },
  ],
  // Tying it specifically to residential
  audience: {
    '@type': 'Audience',
    audienceType: 'Residential',
  },
};
// 4. Page Component
export default async function DomesticSolarPage() {
  const page = await getPageData();

  if (!page) {
    return (
      <div style={{ padding: '100px', textAlign: 'center' }}>
        <h1>Page not found</h1>
        <p>Please create a page with slug "solar/domestic" in Sanity.</p>
      </div>
    );
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(domesticServiceSchema),
        }}
      />
      <PageBuilderFrame data={page} isSolar />

      {/* Finance Banner (Kept Hardcoded as requested) */}
      <a
        target="_blank"
        rel="noopener noreferrer nofollow"
        href="https://www.phoenix-fc.co.uk/finance_landing?b=4991BD7B1993423F&t=2A9C018824984F2CB1EEFAFA"
        style={{ display: 'block', maxWidth: '1200px', margin: '20px auto' }}
      >
        <img
          src="/images/finance-banners/solar_banner.png"
          alt="Flexible finance options for domestic solar panel installations in Derbyshire and the East Midlands"
          style={{ width: '100%', height: 'auto' }}
        />
      </a>
    </>
  );
}
