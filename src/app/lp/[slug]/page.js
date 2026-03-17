import { notFound } from 'next/navigation';
import { client } from '@/sanity/client';
// Notice the new import path: We are going to isolate your LP components!
import LP_PageBuilder from '@/Components/LPBlocks/PageBuilder';

const PAGE_QUERY = `*[_type == "landingPage" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  seo {
    metaTitle,
    metaDescription
  },
  pageBuilder[]{
    ...,
    _type == "landingHero" => {
      ...,
      backgroundImage { asset->{ url, metadata { dimensions } } }
    },
    _type == "landingFeatures" => {
      ...,
      features[]{ ..., icon { asset->{ url } } }
    },
    _type == "landingImageDetail" => {
      ...,
      image { asset->{ url, metadata { dimensions } } }
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

  return {
    title: page.seo?.metaTitle || `${page.title} | Power & Control`,
    description:
      page.seo?.metaDescription ||
      'Expert electrical and renewable energy installations across the East Midlands.',
  };
}

export default async function DynamicLandingPage(props) {
  const params = await props.params;
  const page = await client.fetch(PAGE_QUERY, { slug: params.slug });

  if (!page) return notFound();

  // SEO UPGRADE: Basic schema so Google knows this is a targeted campaign page
  const landingPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.seo?.metaDescription,
    publisher: {
      '@type': 'Organization',
      name: 'Power & Control Ltd',
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(landingPageSchema) }}
      />
      {/* Passing the data to the isolated LP Page Builder */}
      <LP_PageBuilder blocks={page.pageBuilder} />
    </main>
  );
}
