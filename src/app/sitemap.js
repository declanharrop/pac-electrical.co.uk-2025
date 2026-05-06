import { client, blogClient } from '@/sanity/client';

export const revalidate = 3600; // Revalidate every hour

const URL = 'https://pac-electrical.co.uk';

export default async function sitemap() {
  // 1. FETCH DATA FROM MAIN CLIENT (FAQs & Case Studies)
  const faqQuery = `*[_type == "faq"]{ "slug": slug.current, _updatedAt }`;
  const caseStudyQuery = `*[_type == "caseStudy"]{ "slug": slug.current, releaseDate, _updatedAt }`;
  const landingQuery = `*[_type == "landingPage"]{ "slug": slug.current, releaseDate, _updatedAt }`;

  const [faqsData, caseStudiesData, landingData] = await Promise.all([
    client.fetch(faqQuery),
    client.fetch(caseStudyQuery),
    client.fetch(landingQuery),
  ]);

  // 2. FETCH DATA FROM BLOG CLIENT (News Posts)
  const newsQuery = `*[_type == "post"]{ "slug": slug.current, date, _updatedAt }`;
  const newsData = await blogClient.fetch(newsQuery);

  // --- MAP DATA TO SITEMAP FORMAT ---

  const landing = landingData.map((lp) => ({
    url: `${URL}/lp/${lp.slug}`,
    lastModified: lp.releaseDate || lp._updatedAt,
    priority: 0.9,
    changeFrequency: 'yearly',
  }));

  const news = newsData.map((post) => ({
    url: `${URL}/news/${post.slug}`,
    lastModified: post.date || post._updatedAt,
    priority: 0.6,
    changeFrequency: 'weekly',
  }));

  // Case Studies (from Main Dataset)
  const studies = caseStudiesData.map((study) => ({
    url: `${URL}/case-studies/study/${study.slug}`,
    lastModified: study.releaseDate || study._updatedAt,
    priority: 0.7,
    changeFrequency: 'monthly',
  }));

  // FAQs (from Main Dataset)
  const faqs = faqsData.map((faq) => ({
    url: `${URL}/faqs/${faq.slug}`,
    lastModified: faq._updatedAt,
    priority: 0.6,
    changeFrequency: 'monthly',
  }));

  // --- STATIC ROUTES ---
  const topLevelRoutes = [
    '',
    '/electrical',
    '/solar',
    '/ev',
    '/faqs',
    '/case-studies',
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'yearly',
    priority: 1,
  }));

  const subServiceRoutes = [
    '/news',
    '/us',
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

  return [
    ...topLevelRoutes,
    ...landing,
    ...subServiceRoutes,
    ...news,
    ...studies,
    ...faqs,
  ];
}
