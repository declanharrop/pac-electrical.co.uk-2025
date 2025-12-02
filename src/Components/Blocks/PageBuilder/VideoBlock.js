import React from 'react';
import Styles from './FrameBlocks.module.css'; // Uses Blocks.module.css, not FrameBlocks

export default function VideoBlock({ data }) {
  // Support both direct props (legacy) or Sanity data object
  const title = data.videoTitle || data.title;
  const { subtitle } = data;
  const videoUrl = data.video;

  return (
    <div className={Styles.VideoBlock}>
      <div className={Styles.VideoBlock__Container}>
        <h2>{title}</h2>
        {subtitle && <h4 style={{ margin: '10px 0 20px' }}>{subtitle}</h4>}

        {/* Ensure we have a valid URL before rendering iframe */}
        {videoUrl && (
          <iframe
            className={Styles.VideoBlock__Container__Video}
            src={videoUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}
