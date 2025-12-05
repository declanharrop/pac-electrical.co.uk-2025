import { groq } from 'next-sanity';
import { blogClient } from '@/sanity/client';
import NewsSlider from './NewsSlider';

// UPDATED QUERY:
// 1. Fetches 'sector' and 'service' as raw strings (matching your Schema).
// 2. Removes the incorrect '->' reference expansions.
const NEWS_QUERY = groq`*[_type == "post"] | order(date desc) {
  title,
  subtitle,
  "slug": slug.current,
  date,
  
  "imageUrl": heroImage.asset->url,
  "imageAlt": heroImage.alt, // Now strictly fetching the alt from schema
  
  // Fetch the simple dropdown string values
  sector, 
  service,
  
  author->{
    name,
    jobTitle,
    "avatarUrl": profilePhoto.asset->url
  }
}`;

export default async function NewsSection({ title = 'Latest News' }) {
  // 1. Fetch Data
  const rawPosts = await blogClient.fetch(
    NEWS_QUERY,
    {},
    {
      next: { revalidate: 60 },
    },
  );

  if (!rawPosts || rawPosts.length === 0) return null;

  // 2. Transform Data
  // We combine the single 'sector' and 'service' strings into an array
  // so the NewsSlider can map over them easily with <SectorLabel />.
  const posts = rawPosts.map((post) => ({
    ...post,
    // Creates: ['commercial', 'solar'] or just ['domestic'] if service is missing
    sectors: [post.sector, post.service].filter(Boolean),
  }));

  return (
    <div>
      <NewsSlider posts={posts} title={title} />
    </div>
  );
}
