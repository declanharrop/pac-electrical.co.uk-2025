'use client';

import React from 'react';
import styles from './LandingVideo.module.css';

export default function LandingVideo({ title, subtitle, videoUrl }) {
  // HELPER: Convert standard YouTube/Vimeo links to Embed URLs
  const getEmbedUrl = (url) => {
    if (!url) return null;

    // Handle standard YouTube links
    if (url.includes('youtube.com/watch')) {
      try {
        const urlParams = new URLSearchParams(new URL(url).search);
        return `https://www.youtube.com/embed/${urlParams.get('v')}`;
      } catch (e) {
        return url; // Fallback if URL parsing fails
      }
    }

    // Handle short YouTube links (youtu.be)
    if (url.includes('youtu.be')) {
      const id = url.split('/').pop();
      return `https://www.youtube.com/embed/${id}`;
    }

    // Return original if no match (assumes user might have pasted an embed link)
    return url;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  if (!embedUrl) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Title Section */}
        <div className={styles.header}>
          {title && <h2 className={styles.title}>{title}</h2>}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>

        {/* Video Wrapper (Maintains Aspect Ratio) */}
        <div className={styles.videoWrapper}>
          <iframe
            src={embedUrl}
            title={title || 'Video'}
            className={styles.iframe}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
