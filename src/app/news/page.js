import CaseStudiesFrame from '@/Frames/CaseStudiesFrame';
import { ALL_NEWS_DATA } from '@/lib/DataQueries';
import { getClient } from '@/Utils/client';

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
