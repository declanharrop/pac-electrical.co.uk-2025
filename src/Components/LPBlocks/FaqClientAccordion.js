'use client';

import React, { useState } from 'react';
import { PortableText } from '@portabletext/react';
import styles from './LandingFaqs.module.css';

export default function FaqClientAccordion({ question, answer, videoUrl }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordionItem}>
      <button
        type="button"
        className={styles.accordionButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}>
          +
        </span>
      </button>

      <div
        className={`${styles.accordionContent} ${isOpen ? styles.open : ''}`}
      >
        <div style={{ paddingBottom: '2rem' }}>
          {/* --- NEW VIDEO SECTION --- */}
          {videoUrl && (
            <div className={styles.videoWrapper}>
              <iframe
                src={
                  videoUrl
                    .replace('watch?v=', 'embed/')
                    .replace('shorts/', 'embed/')
                    .split('?')[0]
                }
                className={styles.iframe}
                title={question}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {/* Text Answer */}
          {answer && Array.isArray(answer) ? (
            <div className={styles.portableTextWrapper}>
              <PortableText value={answer} />
            </div>
          ) : (
            <p>Answer formatting error.</p>
          )}
        </div>
      </div>
    </div>
  );
}
