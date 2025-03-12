import NewsPageFrame from '@/Frames/NewsPageFrame';
import { NEWS_STORY } from '@/lib/DataQueries';
import { getClient } from '@/Utils/client';

export async function generateMetadata({ params }) {
  const client = getClient();
  const path = params.slug;
  console.log(path);

  const { data: newsArticle } = await client.query({
    query: NEWS_STORY,
    variables: {
      slug: path,
    },
  });

  const article = newsArticle.articles[0];

  return {
    title: `${article.title} - Power & Control Ltd`,
    description: article.metaDescription,
    url: `https://pac-electrical.co.uk/case-studies/${article.slug}`,
    type: 'article',
    image: article.hero.url,
    openGraph: {
      title: `${article.title} - Power & Control Ltd`,
      description: article.metaDescription,
      url: `https://pac-electrical.co.uk/case-studies/${article.slug}`,
      type: 'article',
      article: {
        publishedTime: article.date,
      },
      images: [
        {
          url: article.hero.url,
        },
      ],
    },
  };
}

export default async function NewsPage({ params }) {
  const path = params.slug;
  const client = getClient();
  const { data: newsArticle } = await client.query({
    query: NEWS_STORY,
    variables: {
      slug: path,
    },
  });
  return (
    <div>
      <NewsPageFrame data={newsArticle.articles[0]} />
    </div>
  );
}
