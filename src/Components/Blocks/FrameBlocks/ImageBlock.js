import Image from 'next/image';
import styles from './FrameBlocks.module.css';

export default function ImageBlock({ data, height = '70vh' }) {
  return (
    <div className={styles.ImageBlock} style={{ height: `${height}` }}>
      <div className={styles.ImageBlock__Image}>
        <Image
          src={data.image.url}
          alt="Power & Control Ltd"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      {data.title && (
        <div className={styles.ImageBlock__Overlay}>
          <h1>{data.title}</h1>
        </div>
      )}
    </div>
  );
}
