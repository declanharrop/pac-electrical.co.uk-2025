import React from 'react';
import styles from './VideoBlock.module.css';

export default function VideoBlock({ data }) {
  const title = data.videoTitle || data.title;
  const { subtitle } = data;
  const rawVideoUrl = data.video;

  // SEO & UX UPGRADE: Enhanced helper to handle Shorts and trackers
  const getEmbedUrl = (url) => {
    if (!url) return null;
    try {
      const urlObj = new URL(url);

      // Handle standard YouTube & Shorts
      if (url.includes('youtube.com') || url.includes('youtu.be')) {
        let id = '';
        if (url.includes('watch?v=')) id = urlObj.searchParams.get('v');
        else if (url.includes('shorts/'))
          id = url.split('shorts/')[1].split('?')[0];
        else id = url.split('/').pop().split('?')[0];

        return `https://www.youtube.com/embed/${id}`;
      }
      return url;
    } catch (e) {
      return url;
    }
  };

  const embedUrl = getEmbedUrl(rawVideoUrl);
  if (!embedUrl) return null;

  // SEO UPGRADE: Basic VideoObject Schema
  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: title || 'Solar and Electrical Project Video',
    description: subtitle || 'Project walkthrough by Power & Control Ltd',
    thumbnailUrl: 'https://pac-electrical.co.uk/images/sustain1.webp', // Fallback thumbnail
    embedUrl,
  };

  return (
    <section className={styles.VideoBlock}>
      {/* SEO UPGRADE: Injecting Video Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      <div className={styles.Container}>
        <div className={styles.Header}>
          {/* SEO UPGRADE: H2 is correct here as it's a sub-section */}
          {title && <h2 className={styles.Title}>{title}</h2>}
          {subtitle && <p className={styles.Subtitle}>{subtitle}</p>}
        </div>

        <div className={styles.VideoWrapper}>
          <iframe
            src={embedUrl}
            title={title || 'Power & Control Project Video'}
            // PERFORMANCE UPGRADE: Prevents iframe from slowing down initial page load
            loading="lazy"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.Iframe}
          />
        </div>
      </div>
    </section>
  );
}
