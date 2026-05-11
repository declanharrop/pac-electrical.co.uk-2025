import { Zap, TrendingUp, ShieldCheck } from 'lucide-react';
import styles from '../Styles/CultureOverlap.module.css';

export default function CultureOverlap() {
  return (
    <section className={styles.CultureOverlap}>
      <div className={styles.CultureContainer}>
        <div className={styles.CultureHeader}>
          <h2 className={styles.SectionTitle}>WHAT WE OFFER</h2>
          <p className={styles.SectionDesc}>
            A permanent role with a structured package, real projects, and a
            company that invests in the people doing the work.
          </p>
        </div>

        <div className={styles.BenefitsGrid}>
          <div className={styles.BenefitCard}>
            <div className={styles.IconWrapper}>
              <Zap size={28} />
            </div>
            <h3>Company Vehicle & Fuel Card</h3>
            <p>
              Every engineer is provided with a fully equipped company van and
              fuel card from day one. If you&apos;re issued an electric vehicle,
              we&apos;ll install a home EV charger and cover your charging costs.
            </p>
          </div>
          <div className={styles.BenefitCard}>
            <div className={styles.IconWrapper}>
              <TrendingUp size={28} />
            </div>
            <h3>Training Across All Divisions</h3>
            <p>
              We work across commercial electrical, Solar PV, EV charging, and
              battery storage. Full training is provided as you move into new
              areas — your development doesn&apos;t stop once you&apos;re through the door.
            </p>
          </div>
          <div className={styles.BenefitCard}>
            <div className={styles.IconWrapper}>
              <ShieldCheck size={28} />
            </div>
            <h3>A Competitive Package</h3>
            <p>
              Generous holiday allowance, a company pension scheme, competitive
              overtime rates, and branded workwear — all included from your
              first day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
