import { client } from '@/sanity/client';
import { PAGE_BUILDER_QUERY } from '@/sanity/queries';
import PageBuilderFrame from '@/Frames/PageBuilderFrame';

// 1. Revalidation (ISR)
// Retain 60s for fresh content updates without rebuilds
export const revalidate = 60;

// 2. Fetch Data Helper
// Strictly targeting the 'solar/commercial' slug
async function getPageData() {
  return client.fetch(PAGE_BUILDER_QUERY, { slug: 'solar/commercial' });
}

// 3. Metadata
export async function generateMetadata() {
  const page = await getPageData();

  if (!page) return { title: 'Commercial Solar - Power & Control Ltd' };

  return {
    title: page.metaTitle || 'Commercial Solar Solutions - Power & Control',
    description:
      page.metaDescription ||
      'Expert commercial solar panel installation for businesses.',
    openGraph: {
      images: [page.hero?.imageUrl],
    },
  };
}

// 4. Page Component
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
          Please go to Sanity Studio and create a new <strong>Page</strong>{' '}
          document.
          <br />
          Set the slug to: <code>solar/commercial</code>
        </p>
      </div>
    );
  }

  return (
    <>
      {/* isSolar Prop: Ensures the navigation/theme context is set to Solar 
        (Green accents, specific menu items)
      */}
      <PageBuilderFrame data={page} isSolar />

      {/* LEAD DEV NOTE: 
        Finance Banner is typically for Domestic customers. 
        Uncomment below only if this specific link applies to Commercial.
      */}

      {/* <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.phoenix-fc.co.uk/finance_landing?b=4991BD7B1993423F&t=2A9C018824984F2CB1EEFAFA"
        style={{ display: 'block', maxWidth: '1200px', margin: '20px auto' }}
      >
        <img
          src="/images/finance-banners/solar_banner.png"
          alt="We offer finance."
          style={{ width: '100%', height: 'auto' }}
        />
      </a> 
      */}
    </>
  );
}
