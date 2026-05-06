import { notFound } from 'next/navigation';
import { client } from '@/sanity/client';
import LP_PageBuilder from '@/Components/LPBlocks/PageBuilder';

// SEO UPGRADE: Added 'alt' attributes to all image queries to capture organic image search traffic.
const PAGE_QUERY = `*[_type == "landingPage" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  seo {
    metaTitle,
    metaDescription,
    canonicalUrl
  },
  pageBuilder[]{
    ...,
    _type == "landingHero" => {
      ...,
      backgroundImage { asset->{ url, metadata { dimensions } }, "alt": alt }
    },
    _type == "landingFeatures" => {
      ...,
      features[]{ ..., icon { asset->{ url }, "alt": alt } }
    },
    _type == "landingImageDetail" => {
      ...,
      image { asset->{ url, metadata { dimensions } }, "alt": alt }
    },
    _type == 'slideshowSection' => {
      title,
      images[] { "url": asset->url, "alt": alt }
    },
    _type == "landingFaqs" => {
      ...,
      "fetchedFaqs": *[_type == "faq" && service == ^.serviceFilter] | order(importance desc)[0...6] {
        _id, question, answer, videoUrl, slug
      }
    }
  }
}`;

export async function generateMetadata(props) {
  const params = await props.params;
  const page = await client.fetch(PAGE_QUERY, { slug: params.slug });

  if (!page) return {};

  const title = page.seo?.metaTitle || `${page.title} | Power & Control`;
  const description =
    page.seo?.metaDescription ||
    'Expert electrical and renewable energy installations across the East Midlands.';

  // Replace 'yourdomain.co.uk' with your actual production URL
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || 'https://www.yourdomain.co.uk';
  const pageUrl = page.seo?.canonicalUrl || `${baseUrl}/${page.slug}`;

  // SEO UPGRADE: Complete metadata object with Canonical URLs, Open Graph, and strict Robot directives.
  return {
    title,
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: 'Power & Control Ltd',
      locale: 'en_GB',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function DynamicLandingPage(props) {
  const params = await props.params;
  const page = await client.fetch(PAGE_QUERY, { slug: params.slug });

  if (!page) return notFound();

  // Extract FAQs specifically to power the FAQ Schema
  const faqBlock = page.pageBuilder?.find(
    (block) => block._type === 'landingFaqs',
  );
  const faqs = faqBlock?.fetchedFaqs || [];

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || 'https://www.yourdomain.co.uk';

  // SEO UPGRADE: '@graph' array allows us to declare multiple schema types cleanly on one page.
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        // 1. WebPage Schema: Defines the exact page being viewed
        '@type': 'WebPage',
        '@id': `${baseUrl}/${page.slug}/#webpage`,
        url: `${baseUrl}/${page.slug}`,
        name: page.seo?.metaTitle || page.title,
        description: page.seo?.metaDescription,
        isPartOf: { '@id': `${baseUrl}/#website` },
      },
      {
        // 2. LocalBusiness Schema: Tells Google exactly what you do and where
        '@type': 'Electrician', // Using a highly specific category is better than generic "Organization"
        '@id': `${baseUrl}/#organization`,
        name: 'Power & Control Ltd',
        description: 'Expert electrical and renewable energy installations.',
        url: baseUrl,
        areaServed: 'East Midlands, UK',
      },
    ],
  };

  // 3. FAQ Schema: Only injects if FAQs are present on this specific landing page
  if (faqs.length > 0) {
    schemaGraph['@graph'].push({
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer, // Note: Ensure your Sanity FAQ 'answer' resolves to plain text or valid HTML string
        },
      })),
    });
  }

  return (
    <main>
      {/* Injecting the multi-entity Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      {/* Passing the data to the isolated LP Page Builder */}
      <LP_PageBuilder blocks={page.pageBuilder} />
    </main>
  );
}
