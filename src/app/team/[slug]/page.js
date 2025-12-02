import { groq } from 'next-sanity';
import { notFound } from 'next/navigation';
import AuthorPageFrame from '@/Frames/AuthorPageFrame';
import { blogClient } from '@/sanity/client';

export const revalidate = 60;

// 1. QUERY: Get Author info + List of their posts
const AUTHOR_QUERY = groq`*[_type == "author" && slug.current == $slug][0] {
  name,
  jobTitle,
  "slug": slug.current,
  "avatarUrl": profilePhoto.asset->url,
  "heroUrl": heroImage.asset->url, 
  bio,
  videoLink,
  isFormerStaff,
  "posts": *[_type == "post" && references(^._id)] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    date,
    "imageUrl": heroImage.asset->url,
    subtitle
  }
}`;

// 2. Metadata for SEO (Updated for Next.js 15)
export async function generateMetadata({ params }) {
  // AWAIT PARAMS HERE
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const author = await blogClient.fetch(AUTHOR_QUERY, { slug });

  if (!author) return { title: 'Team Member Not Found' };

  return {
    title: `${author.name} - ${author.jobTitle} | Power & Control`,
    description: `Meet ${author.name}, our ${author.jobTitle} at Power & Control.`,
    openGraph: {
      images: author.avatarUrl ? [author.avatarUrl] : [],
    },
  };
}

// 3. Page Component (Updated for Next.js 15)
export default async function AuthorPage({ params }) {
  // AWAIT PARAMS HERE
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const author = await blogClient.fetch(AUTHOR_QUERY, { slug });

  // Handle 404 or Former Staff
  if (!author || author.isFormerStaff) {
    return notFound();
  }

  return <AuthorPageFrame data={author} />;
}
