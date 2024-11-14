import {
  AUTHORS_QUERY,
  EVENTS_QUERY,
  NEWS_QUERY,
  SALONS_QUERY,
} from '@/Data/queries';
import { getClient } from '@/Utils/client';

const URL = 'https://pac-electrical.co.uk';

export default async function sitemap() {
  const client = getClient();
  const { data: articlePages } = await client.query({
    query: NEWS_QUERY,
  });

  const articles = articlePages.articles.map((article) => ({
    url: `${URL}/articles/${article.slug}`,
    lastModified: article.date,
    priority: 0.6,
  }));

  const { data: eventPages } = await client.query({
    query: EVENTS_QUERY,
  });

  const events = eventPages.articles.map((article) => ({
    url: `${URL}/articles/${article.slug}`,
    lastModified: article.date,
    priority: 0.6,
  }));

  const routes = [
    {
      url: '/',
      lastModified: '2024-07-10',
      priority: 0.9,
    },
    {
      url: '/us',
      lastModified: '2024-07-10',
      priority: 0.8,
    },
    {
      url: '/authors',
      lastModified: '2024-07-10',
      priority: 0.8,
    },
    {
      url: '/articles',
      lastModified: '2024-07-10',
      priority: 0.8,
    },
    {
      url: '/events',
      lastModified: '2024-07-10',
      priority: 0.8,
    },
    {
      url: '/salons',
      lastModified: '2024-07-10',
      priority: 0.8,
    },
    {
      url: '/brand',
      lastModified: '2024-07-10',
      priority: 0.8,
    },
    {
      url: '/podcasts',
      lastModified: '2024-07-10',
      priority: 0.8,
    },
    {
      url: '/us/thank-you',
      lastModified: '2024-07-10',
      priority: 0.4,
    },
    {
      url: '/us/register-interest',
      lastModified: '2024-07-10',
      priority: 0.4,
    },
  ].map((route) => ({
    url: `${URL}${route.url}`,
    lastModified: route.lastModified,
    priority: route.priority,
  }));

  return [...routes, ...authors, ...articles, ...events, ...salons];
}
