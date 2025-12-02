import { groq } from 'next-sanity';
import NewsPageFrame from '@/Frames/NewsPageFrame'; // NEW COMPONENT
import { blogClient } from '@/sanity/client';

export const revalidate = 60;

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
        url: `${METADATA.Url}/images/sustain1.webp`,
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
};

const ALL_NEWS_QUERY = groq`*[_type == "post"] | order(date desc) {
  _id,
  title,
  subtitle,
  "slug": slug.current,
  date,
  "imageUrl": heroImage.asset->url,
  "imageAlt": heroImage.alt,
  sector,
  author->{
    name,
    jobTitle,
    "avatarUrl": profilePhoto.asset->url,
    "avatarAlt": profilePhoto.alt,
    "slug": slug.current, 
    isFormerStaff         
  }
}`;

export default async function NewsPage() {
  const rawData = await blogClient.fetch(ALL_NEWS_QUERY);

  const articles = rawData.map((post) => ({
    id: post._id,
    title: post.title,
    slug: post.slug,
    date: post.date,
    preview: post.subtitle,
    hero: {
      url: post.imageUrl || '/images/placeholder.jpg',
      alt: post.imageAlt,
    },
    author: {
      name: post.author?.name || 'Power & Control',
      jobTitle: post.author?.jobTitle || 'Team',
      avatar: post.author?.avatarUrl,
      slug: post.author?.slug,
      isFormerStaff: post.author?.isFormerStaff,
    },
    sector: post.sector,
  }));

  return (
    <div style={{ marginTop: '-40px' }}>
      <NewsPageFrame data={articles} title="News" />
    </div>
  );
}
