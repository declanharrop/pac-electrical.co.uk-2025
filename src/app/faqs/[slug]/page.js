import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { client } from '@/sanity/client';
import styles from './page.module.css';

// 1. FIXED SEO BUG: Corrected the condition to properly extract text for Schema and Meta
function toPlainText(blocks = []) {
  return blocks
    .map((b) =>
      b._type !== 'block' || !b.children
        ? ''
        : b.children.map((c) => c.text).join(''),
    )
    .join('\n\n');
}

const portableTextComponents = {
  block: {
    h3: ({ children }) => <h3>{children}</h3>,
    normal: ({ children }) => <p>{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
  },
};

async function getFAQ(slug) {
  const query = `
    *[_type == "faq" && slug.current == $slug][0] {
      question,
      answer,
      category,
      service,
      videoUrl,
      keywords
    }
  `;
  return await client.fetch(query, { slug });
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const faq = await getFAQ(slug);
  if (!faq) return {};

  // 2. SEO UPGRADE: Create a 150-character teaser for the Meta Description
  const plainTextAnswer = toPlainText(faq.answer);
  const metaDescription =
    plainTextAnswer.length > 150
      ? `${plainTextAnswer.substring(0, 147)}...`
      : plainTextAnswer;

  return {
    // 3. SEO UPGRADE: Added Service to Title for better local/niche targeting
    title: `${faq.question} | ${faq.service} | Power & Control`,
    description: metaDescription,
    keywords: faq.keywords || [],
  };
}

export default async function SingleFAQPage({ params }) {
  const { slug } = await params;
  const faq = await getFAQ(slug);

  if (!faq) return notFound();

  // 4. VERIFIED SCHEMA: This will now correctly output the text answer for Google
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: toPlainText(faq.answer),
        },
      },
    ],
  };

  return (
    <main className={styles.PageWrapper}>
      {/* 5. BEST PRACTICE: Injecting structured data cleanly */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className={styles.Container}>
        <Link href="/faqs" className={styles.BackLink}>
          ← Back to FAQs
        </Link>

        <div className={styles.Header}>
          <div className={styles.BadgeContainer}>
            <span className={styles.ServiceBadge}>{faq.service}</span>
            <span className={styles.CategoryBadge}>{faq.category}</span>
          </div>

          <h1 className={styles.Question}>{faq.question}</h1>
        </div>

        {faq.videoUrl && (
          <div className={styles.VideoWrapper}>
            <iframe
              src={
                faq.videoUrl
                  .replace('watch?v=', 'embed/')
                  .replace('shorts/', 'embed/')
                  .split('?')[0]
              }
              className={styles.Iframe}
              title={faq.question}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        <div className={styles.Content}>
          <PortableText
            value={faq.answer}
            components={portableTextComponents}
          />
        </div>
      </div>
    </main>
  );
}
