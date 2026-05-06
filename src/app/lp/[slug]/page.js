import { notFound } from 'next/navigation';
import { client } from '@/sanity/client';
import LP_PageBuilder from '@/Components/LPBlocks/PageBuilder';

// SEO FIX: Helper function to flatten Sanity Portable Text into a raw string for Schema.org
function portableTextToString(blocks) {
  if (!blocks) return '';
  if (typeof blocks === 'string') return blocks;
  return blocks
    .map((block) => {
      if (block._type !== 'block' || !block.children) return '';
      return block.children.map((child) => child.text).join('');
    })
    .join('\n\n');
}

// SEO UPGRADE: Added 'alt' attributes to all image queries for organic image search traffic.
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

  // Replace with your actual production URL variable
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || 'https://www.pac-electrical.co.uk';
  const pageUrl = page.seo?.canonicalUrl || `${baseUrl}/lp/${page.slug}`;

  // SEO UPGRADE: Complete metadata object
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
    process.env.NEXT_PUBLIC_BASE_URL || 'https://www.pac-electrical.co.uk';

  // SEO UPGRADE: Multi-entity Schema using '@graph'
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${baseUrl}/lp/${page.slug}/#webpage`,
        url: `${baseUrl}/lp/${page.slug}`,
        name: page.seo?.metaTitle || page.title,
        description: page.seo?.metaDescription,
        isPartOf: { '@id': `${baseUrl}/#website` },
      },
      {
        '@type': 'Electrician',
        '@id': `${baseUrl}/#organization`,
        name: 'Power & Control Ltd',
        description: 'Expert electrical and renewable energy installations.',
        url: baseUrl,
        areaServed: 'East Midlands, UK',
      },
    ],
  };

  // Conditionally inject FAQ Schema, actively parsing the Portable Text array to clear GSC errors
  if (faqs.length > 0) {
    schemaGraph['@graph'].push({
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: portableTextToString(faq.answer),
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
