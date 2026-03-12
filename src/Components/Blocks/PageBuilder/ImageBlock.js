import Image from 'next/image';
import styles from './FrameBlocks.module.css';

export default function ImageBlock({ data }) {
  return (
    <section className={styles.ImageBlock}>
      <div className={styles.ImageBlock__Image}>
        {data.imageUrl && (
          <Image
            src={data.imageUrl}
            alt={
              data.imageAlt ||
              'Power & Control - Solar and Electrical Experts Derbyshire'
            }
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            // SEO UPGRADE: If this image is likely at the top, consider adding priority={true}
            // priority={true}
          />
        )}
      </div>

      {data.title && (
        <div className={styles.ImageBlock__Overlay}>
          {/* SEO UPGRADE: Changed H1 to H2 to protect the page's heading hierarchy */}
          <h2>{data.title}</h2>
          {data.subtitle && <p>{data.subtitle}</p>}
        </div>
      )}
    </section>
  );
}
