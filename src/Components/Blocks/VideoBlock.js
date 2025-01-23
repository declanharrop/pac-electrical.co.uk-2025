import React from 'react';

import Styles from './Blocks.module.css';

export default function VideoBlock({
  title = 'Explore Solar from Power & Control',
  subtitle,
  video = 'https://www.youtube.com/embed/AVxSuKksEmU?si=k3DpBi92JKUa7pZQ',
}) {
  return (
    <div className={Styles.VideoBlock}>
      <div className={Styles.VideoBlock__Container}>
        <h2>{title}</h2>
        {subtitle && <h4 style={{ margin: '10px 0 20px' }}>{subtitle}</h4>}
        <iframe
          className={Styles.VideoBlock__Container__Video}
          src={video}
          title="Video from Power & Control"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}
