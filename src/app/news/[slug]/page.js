import { groq } from 'next-sanity';
import { notFound } from 'next/navigation';
import NewsArticleFrame from '@/Frames/NewsArticleFrame'; // <--- UPDATED IMPORT
import { blogClient } from '@/sanity/client';

export const revalidate = 60;

// Query to fetch article based on slug
const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  date,
  "hero": {
    "url": heroImage.asset->url,
    "alt": heroImage.alt
  },
  "imageUrl": heroImage.asset->url, // Keep for Metadata
  "metaDescription": metaDescription,
  "content": content,
  "ytVideo": youtubeVideo,
  author->{
    name,
    jobTitle,
    "avatar": profilePhoto.asset->url, // Mapped for Frame
    "avatarUrl": profilePhoto.asset->url, // Mapped for Metadata
    "slug": slug.current, 
    isFormerStaff         
  }
}`;

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const article = await blogClient.fetch(POST_QUERY, { slug });

  if (!article) {
    return { title: 'Article Not Found - Power & Control' };
  }

  return {
    title: `${article.title} - Power & Control Ltd`,
    description: article.metaDescription,
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url: `https://pac-electrical.co.uk/news/${article.slug}`,
      type: 'article',
      images: [
        {
          url: article.imageUrl,
          width: 1200,
          height: 630,
        },
      ],
      publishedTime: article.date,
    },
  };
}

export default async function NewsPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const article = await blogClient.fetch(POST_QUERY, { slug });

  if (!article) {
    return notFound();
  }

  return (
    <div style={{ marginTop: '-40px' }}>
      {/* Use the Correct Frame for Single Articles */}
      <NewsArticleFrame data={article} />
    </div>
  );
}
