import { ArrowRight } from 'lucide-react';
import styles from '../Styles/CareerTracksPills.module.css';

export default function CareerTracksPills() {
  return (
    <section className={styles.Wrapper}>
      <div className={styles.Container}>
        
        <div className={styles.Header}>
          <h2>CHOOSE YOUR <span>PATH</span></h2>
          <p>Specialize in the tech of tomorrow. Which division fits your skills?</p>
        </div>

        <div className={styles.Grid}>
          {/* Card 1 */}
          <div className={styles.PillCard}>
            <div className={styles.ImagePlaceholder}>[Solar Image]</div>
            <div className={styles.CardContent}>
              <h3>Solar PV</h3>
              <p>Lead the charge in domestic and commercial solar arrays and battery storage systems.</p>
              <button className={styles.ArrowBtn}><ArrowRight size={20} /></button>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className={styles.PillCard}>
            <div className={styles.ImagePlaceholder}>[EV Image]</div>
            <div className={styles.CardContent}>
              <h3>EV Charging</h3>
              <p>Install next-gen commercial fleet infrastructure and high-speed public chargers.</p>
              <button className={styles.ArrowBtn}><ArrowRight size={20} /></button>
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.PillCard}>
            <div className={styles.ImagePlaceholder}>[Electrical Image]</div>
            <div className={styles.CardContent}>
              <h3>Commercial</h3>
              <p>Tackle heavy-duty commercial fit-outs, LED upgrades, and complex testing.</p>
              <button className={styles.ArrowBtn}><ArrowRight size={20} /></button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}