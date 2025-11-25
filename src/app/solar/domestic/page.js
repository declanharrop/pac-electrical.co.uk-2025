import { STANDARD_PAGE_QUERY } from '@/lib/DataQueries';
import StandardPageFrame from '@/Frames/StandardPageFrame';
import { getClient } from '@/Utils/client';

export async function generateMetadata() {
  const client = getClient();
  const { data } = await client.query({
    query: STANDARD_PAGE_QUERY,
    variables: { id: 'cm7ufy30p17s708l383npaukk' },
  });

  const { page } = data;

  const METADATA = {
    Url: `https://pac-electrical.co.uk/solar/domestic`,
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
export default async function DomesticSolarPage() {
  const client = getClient();
  const { data } = await client.query({
    query: STANDARD_PAGE_QUERY,
    variables: {
      id: 'cm7ufy30p17s708l383npaukk',
    },
  });

  const { page } = data;
  return (
    <>
      <StandardPageFrame data={page} solar />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.phoenix-fc.co.uk/finance_landing?b=4991BD7B1993423F&t=2A9C018824984F2CB1EEFAFA"
        style={{ fontSize: '18px' }}
      >
        <img
          src="/images/finance-banners/solar_banner.png"
          alt="We offer finance."
          style={{ width: '100%', marginTop: '10px', maxWidth: '1200px' }}
        />
      </a>
    </>
  );
}
