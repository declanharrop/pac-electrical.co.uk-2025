import Image from 'next/image';
import styles from '../Styles/StaggeredGalleryText.module.css';

export default function StaggeredGalleryText() {
  return (
    <section className={styles.Wrapper}>
      <div className={styles.Container}>
        
        <div className={styles.TextCol}>
          <h2 className={styles.Title}>STRUCTURED WORK.<br/><span>GENUINE REWARDS.</span></h2>
          <p className={styles.Desc}>
            Roles at P&C are permanent positions with clearly defined hours, Monday to Friday, with the majority of projects kept close to our Derby base. When overtime is required, it is compensated fairly — with rates that reflect the effort you put in.
          </p>
          <p className={styles.Desc}>
            You&apos;ll be equipped with everything you need to do the job properly — a company van, fuel card, branded workwear, and direct access to management when you need it. We keep things straightforward, because the work speaks for itself.
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