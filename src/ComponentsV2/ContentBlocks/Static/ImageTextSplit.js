import { ArrowRight } from 'lucide-react';
import styles from '../Styles/ImageTextSplit.module.css';

export default function ImageTextSplit() {
  return (
    <section className={styles.Wrapper}>
      <div className={styles.Container}>
        
        <div className={styles.ImageSide}>
          {/* Placeholder for a high-quality install or team image */}
          <div className={styles.ImagePlaceholder}>
             [Add High-Res Image Here]
          </div>
        </div>

        <div className={styles.TextSide}>
          <h2 className={styles.Title}>NOT JUST A JOB. <br/><span>A CAREER PATH.</span></h2>
          <p className={styles.Description}>
            The energy sector is evolving rapidly. We don't want people who just want to pull cables and go home. We are looking for forward-thinkers who want to master Solar PV, Battery Storage, and complex Commercial EV networks.
          </p>
          <p className={styles.Description}>
            If you have the drive, we have the resources to upskill you to the highest levels in the industry.
          </p>
          <ul className={styles.List}>
            <li><ArrowRight size={16} color="var(--green)"/> In-house manufacturer training</li>
            <li><ArrowRight size={16} color="var(--green)"/> Clear progression frameworks</li>
            <li><ArrowRight size={16} color="var(--green)"/> Leadership opportunities</li>
          </ul>
        </div>

      </div>
    </section>
  );
}