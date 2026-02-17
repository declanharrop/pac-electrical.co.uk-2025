import { client } from '@/sanity/client';
import FAQClientInterface from '@/Components/FAQ/FAQClientInterface';
import styles from './page.module.css';

export const revalidate = 60;
// Fetch ALL FAQs
async function getFAQs() {
  const query = `
    *[_type == "faq"] | order(importance desc) {
      _id,
      question,
      "slug": slug.current,
      service,
      category,
      answer,
      videoUrl,
      keywords,
      "related": related[]->{ question, "slug": slug.current }
    }
  `;
  return await client.fetch(query, {}, { next: { tags: ['faq'] } });
}

export const metadata = {
  title: 'Frequently Asked Questions | Power & Control',
  description:
    'Answers to your questions about Solar, EV Charging, and Electrical Services.',
};

export default async function FAQPage() {
  const faqs = await getFAQs();

  return (
    <main className={styles.Main}>
      <div className={styles.Header}>
        <h1 className={styles.Title}>FREQUENTLY ASKED QUESTIONS</h1>
        <p className={styles.Subtitle}>
          Everything you need to know about our services.
        </p>
      </div>

      {/* Pass data to Client Component */}
      <FAQClientInterface faqs={faqs} />
    </main>
  );
}
