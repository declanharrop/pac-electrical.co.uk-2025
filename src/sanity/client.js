import { createClient } from 'next-sanity';

// 1. The Main Site Client (for Homepage, Services, etc)
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false,
});

// 2. The Blog Client (Strictly for fetching news)
export const blogClient = createClient({
  projectId: process.env.NEXT_PUBLIC_BLOG_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_BLOG_DATASET,
  apiVersion: '2024-01-01', // Ensure this matches your blog's API version
  useCdn: false,
});
