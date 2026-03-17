'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from './LandingHero.module.css';

// 1. UPDATED IMPORTS to keep everything contained and using main site assets
import BrandsScroller from './BrandsScroller';
// Wiring this to your main site's existing button component
import GetAQuoteButton from '@/Components/UI/GetAQuoteButton';

export default function LandingHero({
  heading,
  subHeading,
  backgroundImage,
  showScroller = true,
  showButton = true,
  buttonText = 'Get a Quote',
  ctaLink,
}) {
  const searchParams = useSearchParams();

  const destinationUrl = useMemo(() => {
    // 2. UPDATED ROUTING: Pointing to your main site's /get-a-quote engine
    if (!ctaLink) return '/get-a-quote';

    let baseUrl = '/';

    const linkType = ctaLink.type || ctaLink.destination;

    // A. Quote Flow (Updated to match main site architecture)
    if (linkType === 'quote') {
      const service = ctaLink.service || 'solar';
      const sector =
        !ctaLink.sector || ctaLink.sector === 'none'
          ? ''
          : `/${ctaLink.sector}`;
      baseUrl = `/get-a-quote/${service}${sector}`;
    }
    // B. Internal Page
    else if (linkType === 'internal') {
      baseUrl = ctaLink.internalPath || '/';
    }
    // C. External URL
    else if (linkType === 'external') {
      baseUrl = ctaLink.externalUrl || '/';
    }

    // Attach Params (Great for preserving Google Ads UTM parameters!)
    const currentQuery = searchParams.toString();
    if (currentQuery) {
      const separator = baseUrl.includes('?') ? '&' : '?';
      return `${baseUrl}${separator}${currentQuery}`;
    }

    return baseUrl;
  }, [ctaLink, searchParams]);

  return (
    <>
      <section className={styles.hero}>
        {showScroller && <BrandsScroller />}

        <div className={styles.overlay}>
          <div className={styles.contentContainer}>
            <h1 className={styles.title}>{heading}</h1>
            {subHeading && <p className={styles.subtitle}>{subHeading}</p>}

            {showButton && buttonText && (
              <Link href={destinationUrl} style={{ textDecoration: 'none' }}>
                <GetAQuoteButton Title={buttonText} />
              </Link>
            )}
          </div>
        </div>

        <div className={styles.bgWrapper}>
          {backgroundImage?.asset?.url && (
            <Image
              src={backgroundImage.asset.url}
              alt={heading || 'Hero Background'}
              fill
              priority
              quality={90}
              className={styles.bgImage}
            />
          )}
        </div>

        <div className={styles.wave}>
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className={styles.waveSvg}
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              fill="var(--black)"
            />
          </svg>
        </div>
      </section>

      <motion.div
        className={styles.arrowWrapper}
        animate={{ y: [-20, 10, -20] }}
        transition={{ ease: 'easeInOut', duration: 2.3, repeat: Infinity }}
      >
        <img
          src="/icons/arrow.svg"
          alt="Scroll Down"
          className={styles.arrow}
          width={60}
          height={60}
        />
      </motion.div>
    </>
  );
}
