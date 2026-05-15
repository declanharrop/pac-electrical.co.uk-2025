'use client';

import React from 'react';
import styles from './LandingVideo.module.css';

function getYouTubeEmbedUrl(url) {
  if (!url) return null;

  try {
    const parsed = new URL(url);

    // Already an embed URL — use as-is
    if (
      parsed.hostname.includes('youtube.com') &&
      parsed.pathname.startsWith('/embed/')
    ) {
      return url;
    }

    // youtube.com/watch?v=VIDEO_ID
    if (
      parsed.hostname.includes('youtube.com') &&
      parsed.searchParams.has('v')
    ) {
      return `https://www.youtube.com/embed/${parsed.searchParams.get('v')}`;
    }

    // youtu.be/VIDEO_ID (strip ?si= and other query params)
    if (parsed.hostname === 'youtu.be') {
      const id = parsed.pathname.slice(1);
      return `https://www.youtube.com/embed/${id}`;
    }
  } catch {
    return null;
  }

  return null;
}

export default function LandingVideo({ title, subtitle, videoUrl }) {
  const embedUrl = getYouTubeEmbedUrl(videoUrl);

  if (!embedUrl) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          {title && <h2 className={styles.title}>{title}</h2>}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        <div className={styles.videoWrapper}>
          <iframe
            src={embedUrl}
            title={title || 'YouTube video player'}
            className={styles.iframe}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
