export default function robots() {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: ['/private/'],
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        allow: ['/'],
      },
    ],
    sitemap: 'https://pac-electrical.co.uk/sitemap.xml',
  };
}
