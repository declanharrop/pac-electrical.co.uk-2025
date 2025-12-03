// 1. Import the specific 'blogClient'
import { groq } from 'next-sanity';
import { blogClient } from '@/sanity/client';
import NewsSlider from './NewsSlider';

// Query matches your 'blog' schema
const NEWS_QUERY = groq`*[_type == "post"] | order(date desc) {
  title,
  subtitle,
  "slug": slug.current,
  date,
  "imageUrl": heroImage.asset->url,
  "imageAlt": heroImage.alt,
  author->{
    name,
    jobTitle,
    "avatarUrl": profilePhoto.asset->url
  }
}`;

export default async function NewsSection({ title = 'Latest News' }) {
  // 2. Use 'blogClient' to fetch
  const posts = await blogClient.fetch(
    NEWS_QUERY,
    {},
    {
      next: { revalidate: 60 },
    },
  );

  if (!posts || posts.length === 0) return null;

  return (
    <div>
      <NewsSlider posts={posts} title={title} />
    </div>
  );
}
