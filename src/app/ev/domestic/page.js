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

  const METADATA = {
    Url: `https://pac-electrical.co.uk/ev/domestic`,
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
      siteName: METADATA.siteName,
      description: METADATA.Description,
      url: METADATA.Url,
      images: [
        {
          url: `${page.heroImage.image.url}`,
          width: 600, // Must be an absolute URL
        },
      ],
      locale: 'en_GB',
      type: 'article',
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

  return (
    <>
      <StandardPageFrame data={page} />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.phoenix-fc.co.uk/finance_landing?b=C8B8CE9EE290400B&t=2A9C018824984F2CB1EEFAFA"
        style={{ fontSize: '18px' }}
      >
        <img
          src="/images/finance-banners/ev_banner.png"
          alt="We offer finance."
          style={{ width: '100%', marginTop: '10px', maxWidth: '1200px' }}
        />
      </a>
    </>
  );
}
