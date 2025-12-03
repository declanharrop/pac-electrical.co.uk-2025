import React from 'react';
import styles from './VideoBlock.module.css';

export default function VideoBlock({ data }) {
  const title = data.videoTitle || data.title;
  const { subtitle } = data;
  const rawVideoUrl = data.video;

  // HELPER: Convert standard YouTube/Vimeo links to Embed URLs
  const getEmbedUrl = (url) => {
    if (!url) return null;

    // Handle standard YouTube links
    if (url.includes('youtube.com/watch')) {
      const urlParams = new URLSearchParams(new URL(url).search);
      return `https://www.youtube.com/embed/${urlParams.get('v')}`;
    }

    // Handle short YouTube links (youtu.be)
    if (url.includes('youtu.be')) {
      const id = url.split('/').pop();
      return `https://www.youtube.com/embed/${id}`;
    }

    // Return original if no match (assumes user might have pasted an embed link)
    return url;
  };

  const embedUrl = getEmbedUrl(rawVideoUrl);

  if (!embedUrl) return null;

  return (
    <section className={styles.VideoBlock}>
      <div className={styles.Container}>
        {/* Title Section */}
        <div className={styles.Header}>
          {title && <h2 className={styles.Title}>{title}</h2>}
          {subtitle && <p className={styles.Subtitle}>{subtitle}</p>}
        </div>

        {/* Video Wrapper (Maintains Aspect Ratio) */}
        <div className={styles.VideoWrapper}>
          <iframe
            src={embedUrl}
            title={title || 'Video'}
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
