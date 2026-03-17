'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './LandingFeatures.module.css';
import LowerOpaqueWaves from '@/Elements/ShapeDividers/LowerOpaqueWaves';
// Re-import the button component you wanted
import GetAQuoteButton from '@/Components/UI/GetAQuoteButton';

export default function LandingFeatures({
  mainHeading,
  features,
  showLogo,
  showVideo,
  videoId,
  showDivider,
  // New props from Sanity
  buttonText,
  buttonLink,
}) {
  return (
    <section className={styles.section}>
      {/* 1. Logo */}
      {showLogo && (
        <div className={styles.logoWrapper}>
          <img
            src="/logo/pac-logo-white.svg"
            alt="Power & Control Branding"
            className={styles.logo}
          />
        </div>
      )}

      {/* 2. Heading */}
      <h2 className={styles.title}>{mainHeading}</h2>

      {/* 3. Video */}
      {showVideo && videoId && (
        <div className={styles.videoContainer}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
            className={styles.videoFrame}
            title="Power & Control Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      {/* 4. Features Grid */}
      <div className={styles.grid}>
        {features?.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconCircle}>
              {item.icon?.asset?.url && (
                <Image
                  src={item.icon.asset.url}
                  alt={item.title || 'Icon'}
                  width={60}
                  height={60}
                />
              )}
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardText}>{item.description}</p>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: '60px' }} />

      {/* 5. The Button (Now connected to Sanity) */}
      {buttonText && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            zIndex: 10,
            position: 'relative',
          }}
        >
          <Link
            href={buttonLink || '/quote'}
            style={{ textDecoration: 'none' }}
          >
            <GetAQuoteButton Title={buttonText} />
          </Link>
        </div>
      )}

      {/* 6. Divider */}
      {showDivider && (
        <div className={styles.divider}>
          <LowerOpaqueWaves />
        </div>
      )}
    </section>
  );
}
