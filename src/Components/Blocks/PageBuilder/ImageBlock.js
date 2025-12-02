import Image from 'next/image';
import styles from './FrameBlocks.module.css';

export default function ImageBlock({ data }) {
  return (
    <div className={styles.ImageBlock}>
      <div className={styles.ImageBlock__Image}>
        {data.imageUrl && (
          <Image
            src={data.imageUrl}
            alt={data.imageAlt || 'Power & Control Ltd'}
            fill
            style={{ objectFit: 'cover' }}
          />
        )}
      </div>
      {data.title && (
        <div className={styles.ImageBlock__Overlay}>
          <h1>{data.title}</h1>
          {data.subtitle && <p>{data.subtitle}</p>}
        </div>
      )}
    </div>
  );
}
