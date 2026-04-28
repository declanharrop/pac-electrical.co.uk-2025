import styles from '../Styles/HeroImmersive.module.css';

export default function HeroImmersive() {
  return (
    <section className={styles.Hero}>
      {/* BACKGROUND VIDEO */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        poster="/hero-fallback.jpg" 
        className={styles.HeroVideo}
      >
        <source src="/video/rec-hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* THE OVERLAY (Essential for text contrast) */}
      <div className={styles.HeroOverlay}></div>
      
      <div className={styles.HeroContent}>
        <h1 className={styles.HeroTitle}>
          BUILD THE <span>FUTURE.</span>
        </h1>
        <p className={styles.HeroSubtitle}>
          We don't just wire buildings. We engineer the next generation of energy. 
          Step up to premium projects, elite standards, and a team that actually gives a damn.
        </p>
      </div>
    </section>
  );
}