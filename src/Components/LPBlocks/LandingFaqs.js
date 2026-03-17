'use client';

import React from 'react';
import Link from 'next/link';
import styles from './LandingFaqs.module.css';
import FaqModalGrid from './FaqModalGrid'; // <-- NEW IMPORT

export default function LandingFaqs({
  heading = 'Frequently Asked Questions',
  serviceFilter,
  buttonText = 'View All FAQs',
  buttonLink = '/faqs',
  fetchedFaqs,
}) {
  if (!fetchedFaqs || fetchedFaqs.length === 0) return null;

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{heading}</h2>

      {/* Swap the Accordion loop for the Grid component */}
      <div className={styles.faqContainer}>
        <FaqModalGrid faqs={fetchedFaqs} />
      </div>

      <div className={styles.buttonWrapper}>
        <Link
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.faqButton}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
