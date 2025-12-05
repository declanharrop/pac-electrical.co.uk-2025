import styles from './FeatureVideoSection.module.css';

export default function FeatureVideoSection({
  title = 'Explore Solar From Power & Control',
  subtitle = 'Let us show you what an install from Power & Control will look like in your home',
  videoUrl = 'https://www.youtube.com/embed/AVxSuKksEmU?si=k3DpBi92JKUa7pZQ',
}) {
  // HELPER: Convert standard YouTube/Vimeo links to Embed URLs
  // This ensures that if a user pastes a normal browser URL, it still works.
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

    // Return original if no match (assumes it is already an embed link)
    return url;
  };

  const finalEmbedUrl = getEmbedUrl(videoUrl);

  if (!finalEmbedUrl) return null;

  return (
    <section className={styles.Section}>
      <div className={styles.Container}>
        {/* Header Content */}
        <div className={styles.Header}>
          <h2 className={styles.Title}>{title}</h2>
          {subtitle && <p className={styles.Subtitle}>{subtitle}</p>}
        </div>

        {/* Video Wrapper (16:9 Aspect Ratio) */}
        <div className={styles.VideoWrapper}>
          <iframe
            src={finalEmbedUrl}
            title={title}
            className={styles.Iframe}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
