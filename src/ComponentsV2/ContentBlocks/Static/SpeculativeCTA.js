import styles from '../Styles/SpeculativeCTA.module.css';

export default function SpeculativeCTA() {
  return (
    <section className={styles.SpeculativeSection}>
      <div className={styles.SpeculativeCard}>
        <h2>DON'T SEE YOUR ROLE?</h2>
        <p>If you're top-tier, we'll make room for you. Drop your details and we'll talk.</p>
        <button className={styles.DropCVBtn}>Drop Your CV</button>
      </div>
    </section>
  );
}