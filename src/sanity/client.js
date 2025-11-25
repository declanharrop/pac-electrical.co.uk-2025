import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your actual ID from Sanity
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: false, // false = fresh data (Server Components), true = cached (Client)
});
