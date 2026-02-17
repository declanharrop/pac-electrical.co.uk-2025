import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { client } from '@/sanity/client';
import styles from './page.module.css';

// ... (Helper functions remain the same) ...
function toPlainText(blocks = []) {
  return blocks
    .map((b) =>
      !b._type === 'block' || !b.children
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

  return {
    title: `${faq.question} | Power & Control`,
    description: `Expert answer for ${faq.service}: ${faq.question}`,
    keywords: faq.keywords || [],
  };
}

export default async function SingleFAQPage({ params }) {
  const { slug } = await params;
  const faq = await getFAQ(slug);

  if (!faq) return notFound();

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
    // 1. Outer Wrapper: Full Width, White Background
    <main className={styles.PageWrapper}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 2. Inner Container: Centered, Max-Width 800px */}
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
              src={faq.videoUrl.replace('watch?v=', 'embed/')}
              className={styles.Iframe}
              title={faq.question}
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
