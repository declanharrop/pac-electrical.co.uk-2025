import { groq } from 'next-sanity';
import { notFound } from 'next/navigation';
import NewsArticleFrame from '@/Frames/NewsArticleFrame';
import { blogClient } from '@/sanity/client';

export const revalidate = 60;

// 1. SEO UPGRADE: Added _updatedAt, canonicalUrl, and tags to the GROQ query
const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  date,
  _updatedAt, 
  canonicalUrl,
  tags,
  "hero": {
    "url": heroImage.asset->url,
    "alt": heroImage.alt
  },
  "imageUrl": heroImage.asset->url,
  "metaDescription": metaDescription,
  "content": content,
  "ytVideo": youtubeVideo,
  author->{
    name,
    jobTitle,
    "avatar": profilePhoto.asset->url,
    "avatarUrl": profilePhoto.asset->url,
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

  const defaultUrl = `https://pac-electrical.co.uk/news/${article.slug}`;

  return {
    title: `${article.title} - Power & Control Ltd`,
    description: article.metaDescription,
    // 2. SEO UPGRADE: Injecting Keywords and the Canonical URL shield
    keywords: article.tags || [],
    alternates: {
      canonical: article.canonicalUrl || defaultUrl,
    },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url: defaultUrl,
      type: 'article',
      images: [
        {
          url: article.imageUrl,
          width: 1200,
          height: 630,
        },
      ],
      publishedTime: article.date,
      modifiedTime: article._updatedAt, // OG freshness signal
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

  // 3. SEO UPGRADE: The exact BlogPosting Schema Google requires
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://pac-electrical.co.uk/news/${article.slug}`,
    },
    headline: article.title,
    description: article.metaDescription,
    image: article.imageUrl,
    author: {
      '@type': 'Person',
      name: article.author?.name || 'Power & Control Expert',
      jobTitle: article.author?.jobTitle || 'Electrical Contractor',
      // ADD THIS LINE: Points to their author page, or defaults to the About page
      url: article.author?.slug
        ? `https://pac-electrical.co.uk/team/${article.author.slug}`
        : 'https://pac-electrical.co.uk/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Power & Control Ltd',
      logo: {
        '@type': 'ImageObject',
        // Make sure this points to your actual logo URL
        url: 'https://pac-electrical.co.uk/pac-logo-black.svg',
      },
    },
    datePublished: article.date,
    dateModified: article._updatedAt || article.date,
  };

  return (
    <div style={{ marginTop: '-40px' }}>
      {/* 4. SEO UPGRADE: Injecting the JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <NewsArticleFrame data={article} />
    </div>
  );
}
