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

  const METADATA = {
    Url: `https://pac-electrical.co.uk/ev/commercial`,
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
export default async function CommericalEVPage() {
  const client = getClient();
  const { data } = await client.query({
    query: STANDARD_PAGE_QUERY,
    variables: {
      id: 'cm8emndzukhm407mlldub82sz',
    },
  });

  const { page } = data;

  return <StandardPageFrame data={page} />;
}
