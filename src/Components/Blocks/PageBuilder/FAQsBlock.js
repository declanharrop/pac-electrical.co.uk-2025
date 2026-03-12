'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import styles from './FrameBlocks.module.css';

export default function FAQsBlock({ data }) {
  const [isOpen, setIsOpen] = useState(null);

  const handleClick = (key) => {
    setIsOpen(isOpen === key ? null : key);
  };

  const animateFrom = { height: '0px' };
  const animateTo = { height: 'auto' };
  const animateExit = { height: '0px' };
  const transition = { height: { ease: 'easeOut', duration: 0.3 } };

  // SEO UPGRADE: Automatically generate FAQ Schema for whatever FAQs the user builds in Sanity
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (data.faqs || []).map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className={styles.FAQsBlock}>
      {/* SEO UPGRADE: Inject Schema so Google can read the answers even if they are hidden in the UI */}
      {data.faqs && data.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <h2 className={styles.FAQsBlock__title}>{data.title}</h2>

      <div className={styles.FAQsBlock__Container}>
        {(data.faqs || []).map((faq) => (
          <div key={faq._key} className={styles.FAQsBlock__Container__Item}>
            {/* SEO & A11Y UPGRADE: Changed div to button for accessibility */}
            <button
              type="button"
              className={styles.FAQsBlock__Container__Item__Q}
              onClick={() => handleClick(faq._key)}
              aria-expanded={isOpen === faq._key}
              style={{
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {/* SEO UPGRADE: Fixed heading hierarchy from H4 to H3 */}
              <h3>{faq.question}</h3>
            </button>

            <AnimatePresence>
              {isOpen === faq._key && (
                <motion.div
                  className={styles.FAQsBlock__Container__Item__A}
                  initial={animateFrom}
                  animate={animateTo}
                  exit={animateExit}
                  transition={transition}
                >
                  <p className={styles.FAQsBlock__Container__Item__A__Text}>
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
