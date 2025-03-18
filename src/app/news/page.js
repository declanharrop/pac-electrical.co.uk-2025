import CaseStudiesFrame from '@/Frames/CaseStudiesFrame';
import { ALL_NEWS_DATA } from '@/lib/DataQueries';
import { getClient } from '@/Utils/client';

const METADATA = {
  Url: 'https://pac-electrical.co.uk/news',
  SiteName: 'Latest Solar & Commerical Electrical News - Power & Control',
  Description:
    'Power & Control News: Stay informed with the latest electrical and renewable energy updates, project highlights, and industry insights from our Midlands experts.',
};
export const metadata = {
  title: METADATA.SiteName,
  applicationName: METADATA.SiteName,
  description: METADATA.Description,
  referrer: 'origin-when-cross-origin',
  url: METADATA.Url,
  openGraph: {
    title: METADATA.SiteName,
    description: METADATA.Description,
    url: METADATA.Url,
    images: [
      {
        url: `${METADATA.Url}/images/sustain1.webp`, // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
};

export default async function NewsPage() {
  const client = getClient();

  const { data } = await client.query({
    query: ALL_NEWS_DATA,
  });

  const { articles } = data;

  return (
    <div style={{ marginTop: '-40px' }}>
      <CaseStudiesFrame data={articles} title="News" article={false} />
    </div>
  );
}
