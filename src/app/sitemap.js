import { ALL_NEWS_DATA, STUDIES_QUERY } from '@/lib/DataQueries';
import { getClient } from '@/Utils/client';

const URL = 'https://pac-electrical.co.uk';

export default async function sitemap() {
  const client = getClient();

  const { data: newsPages } = await client.query({
    query: ALL_NEWS_DATA,
  });
  const { data: caseStudyPages } = await client.query({
    query: STUDIES_QUERY,
  });

  const news = newsPages.articles.map((article) => ({
    url: `${URL}/news/${article.slug}`,
    lastModified: article.date,
    priority: 0.5,
    changeFrequency: 'weekly',
  }));

  const studies = caseStudyPages.caseStudies.map((studies) => ({
    url: `${URL}/case-studies/study/${studies.slug}`,
    lastModified: studies.date,
    priority: 0.5,
    changeFrequency: 'weekly',
  }));
  const topLevelRoutes = [
    '',
    '/electrical',
    '/solar',
    '/ev',
    '/us',
    '/case-studies',
    '/news',
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'yearly',
    priority: 1,
  }));

  const routes = [
    '/electrical/commercial',
    '/electrical/domestic',
    '/electrical/led',
    '/electrical/infrared',
    '/electrical/testing',
    '/electrical/fault',
    '/electrical/data',
    '/solar/battery',
    '/solar/explained',
    '/solar/commercial',
    '/solar/domestic',
    '/case-studies/solar',
    '/case-studies/all',
    '/case-studies/ev',
    '/case-studies/electrical',
    '/ev/domestic',
    '/ev/commercial',
    '/get-a-quote',
    '/information/privacy-policy',
    '/information/terms-and-conditions',
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...topLevelRoutes, ...routes, ...news, ...studies];
}
