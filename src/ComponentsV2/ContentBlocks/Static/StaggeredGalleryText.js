import Image from 'next/image';
import styles from '../Styles/StaggeredGalleryText.module.css';

export default function StaggeredGalleryText() {
  return (
    <section className={styles.Wrapper}>
      <div className={styles.Container}>
        
        <div className={styles.TextCol}>
          <h2 className={styles.Title}>NO RED TAPE.<br/><span>JUST RESULTS.</span></h2>
          <p className={styles.Desc}>
            We operate differently. No unnecessary corporate hierarchies. Just a team of highly skilled engineers pushing the boundaries of what's possible in the electrical and renewable sectors. 
          </p>
          <p className={styles.Desc}>
            When you join us, you get the freedom to do your best work, the tools to do it safely, and the backing of a team that has your back.
          </p>
        </div>

        <div className={styles.ImageCol}>
          {/* PHOTO 1: Top Left */}
          <div className={`${styles.PhotoBox} ${styles.PhotoLeft}`}>
            <Image 
              src="/images/recruitment/van.webp" // Replace with your actual file in /public
              alt="PAC Electrical team member on site"
              fill
              className={styles.Image}
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>

          {/* PHOTO 2: Bottom Right (Staggered) */}
          <div className={`${styles.PhotoBox} ${styles.PhotoRight}`}>
            <Image 
              src="/images/recruitment/craig-gateway.webp" // Replace with your actual file in /public
              alt="High-end electrical installation detail"
              fill
              className={styles.Image}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

      </div>
    </section>
  );
}