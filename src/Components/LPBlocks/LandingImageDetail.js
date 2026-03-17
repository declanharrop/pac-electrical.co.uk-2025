'use client';

import Image from 'next/image';
import styles from './LandingImageDetail.module.css';
// import GetAQuoteButton from '@/components/UI/GetAQuoteButton'; // Ensure path matches your structure

export default function LandingImageDetail({
  reverseLayout,
  image,
  heading,
  paragraphs,
}) {
  // We conditionally add the 'reversed' class only if the prop is true
  const containerClasses = reverseLayout
    ? `${styles.container} ${styles.reversed}`
    : styles.container;

  return (
    <section className={styles.section}>
      <div className={containerClasses}>
        {/* Content Column */}
        <div className={styles.contentCol}>
          <h2 className={styles.heading}>{heading}</h2>

          {paragraphs &&
            paragraphs.map((text, i) => (
              <p key={i} className={styles.text}>
                {text}
              </p>
            ))}

          {/* CTA Wrapper (Uncomment when ready) */}
          {/* <div className={styles.ctaWrapper}>
               <GetAQuoteButton />
            </div> */}
        </div>

        {/* Image Column */}
        <div className={styles.imageWrapper}>
          {image?.asset?.url && (
            <Image
              src={image.asset.url}
              alt={heading || 'Product Detail'}
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
        </div>
      </div>
    </section>
  );
}
