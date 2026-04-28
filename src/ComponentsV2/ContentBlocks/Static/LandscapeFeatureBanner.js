import { ArrowRight } from 'lucide-react';
import styles from '../Styles/LandscapeFeatureBanner.module.css';

export default function LandscapeFeatureBanner() {
  return (
    <section className={styles.Wrapper}>
      <div className={styles.Container}>
        <div className={styles.BannerCard}>
          <div className={styles.Overlay}></div>
          <div className={styles.Content}>
            <span className={styles.Eyebrow}>Elite Standards</span>
            <h2 className={styles.Title}>THE PAC <span>WAY</span></h2>
            <p className={styles.Description}>
              We don't just hire the best; we build them. Get paid to train on the latest Solar PV and EV charging technologies.
            </p>
            <button className={styles.ActionBtn}>
              Learn More <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}