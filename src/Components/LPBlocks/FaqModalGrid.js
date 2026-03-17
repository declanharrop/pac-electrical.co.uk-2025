'use client';

import React, { useState, useEffect, useRef } from 'react';
import { PortableText } from '@portabletext/react';
import { X, PlayCircle, ChevronRight, Share2 } from 'lucide-react';
import Link from 'next/link';
import styles from './LandingFaqs.module.css';

export default function FaqModalGrid({ faqs }) {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const modalContentRef = useRef(null);

  // Lock background scrolling when modal is open
  useEffect(() => {
    if (activeFAQ) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [activeFAQ]);

  const handleShare = (slug) => {
    if (!slug?.current) return;
    const url = `https://pac-electrical.co.uk/faq/${slug.current}`;
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard!');
  };

  return (
    <>
      {/* 1. THE GRID OF 4 CARDS */}
      <div className={styles.grid}>
        {faqs.map((faq) => (
          <div
            key={faq._id}
            className={styles.card}
            onClick={() => setActiveFAQ(faq)}
          >
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon}>
                {faq.videoUrl ? (
                  <PlayCircle size={20} color="#4CAF50" />
                ) : (
                  <span style={{ width: '20px' }} />
                )}
              </span>
            </div>
            <h3 className={styles.cardQuestion}>{faq.question}</h3>
            <div className={styles.readMore}>
              Read Answer <ChevronRight size={16} />
            </div>
          </div>
        ))}
      </div>

      {/* 2. THE MODAL */}
      {activeFAQ && (
        <div className={styles.modalOverlay} onClick={() => setActiveFAQ(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className={styles.modalHeader}>
              <div className={styles.modalActions}>
                <button
                  type="button"
                  onClick={() => handleShare(activeFAQ.slug)}
                  className={styles.iconBtn}
                >
                  <Share2 color="#fff" size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFAQ(null)}
                  className={styles.iconBtn}
                >
                  <X color="#fff" size={24} />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className={styles.modalContent} ref={modalContentRef}>
              <h2 className={styles.modalTitle}>{activeFAQ.question}</h2>

              {/* Video Player */}
              {activeFAQ.videoUrl && (
                <div className={styles.videoWrapper}>
                  <iframe
                    src={
                      activeFAQ.videoUrl
                        .replace('watch?v=', 'embed/')
                        .replace('shorts/', 'embed/')
                        .split('?')[0]
                    }
                    className={styles.iframe}
                    title={activeFAQ.question}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              {/* Text Answer */}
              <div className={styles.portableText}>
                {activeFAQ.answer && Array.isArray(activeFAQ.answer) ? (
                  <PortableText value={activeFAQ.answer} />
                ) : (
                  <p>Answer formatting error.</p>
                )}
              </div>

              {/* Footer Link */}
              {activeFAQ.slug?.current && (
                <div className={styles.modalFooter}>
                  <Link
                    href={`/faqs/${activeFAQ.slug.current}`}
                    className={styles.directLink}
                  >
                    Open Direct Page ↗
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
