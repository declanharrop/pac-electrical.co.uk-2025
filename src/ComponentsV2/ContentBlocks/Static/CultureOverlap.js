import { Zap, TrendingUp, ShieldCheck } from 'lucide-react';
import styles from '../Styles/CultureOverlap.module.css';

export default function CultureOverlap() {
  return (
    <section className={styles.CultureOverlap}>
      <div className={styles.CultureContainer}>
        <div className={styles.CultureHeader}>
          <h2 className={styles.SectionTitle}>THE PAC STANDARD</h2>
          <p className={styles.SectionDesc}>
            Forget the standard sparky life. We operate at a different level. 
            Top-tier equipment, continuous training, and zero red tape.
          </p>
        </div>

        <div className={styles.BenefitsGrid}>
          <div className={styles.BenefitCard}>
            <div className={styles.IconWrapper}><Zap size={28} /></div>
            <h3>Elite Tech & Vans</h3>
            <p>Fully stocked, modern vehicles and the best tools on the market. You bring the skills, we supply the firepower.</p>
          </div>
          <div className={styles.BenefitCard}>
            <div className={styles.IconWrapper}><TrendingUp size={28} /></div>
            <h3>Aggressive Growth</h3>
            <p>Solar, EV, Battery Storage. We don't wait for the industry to change; we lead it. Ongoing training is guaranteed.</p>
          </div>
          <div className={styles.BenefitCard}>
            <div className={styles.IconWrapper}><ShieldCheck size={28} /></div>
            <h3>Zero BS Culture</h3>
            <p>No corporate politics. We are a tight-knit squad that works hard, backs each other up, and gets rewarded for it.</p>
          </div>
        </div>
      </div>
    </section>
  );
}