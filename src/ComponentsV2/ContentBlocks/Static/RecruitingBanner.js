'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from '../Styles/RecruitingBanner.module.css';

const stats = [
  { number: '10+', label: 'Years in Electrical' },
  { number: '2500+', label: 'Projects Completed' },
  { number: '100%', label: 'Accredited' },
  { number: '★★★★★', label: 'Google rating' },
];

function parseStat(str) {
  const match = str.match(/^(\d+)(.*)/);
  if (!match) return { value: null, suffix: str };
  return { value: parseInt(match[1], 10), suffix: match[2] };
}

function StatCell({ number, label, inView }) {
  const { value, suffix } = parseStat(number);
  const [display, setDisplay] = useState(value !== null ? 0 : number);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!inView || value === null) return;

    const duration = 4500;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 5;
      setDisplay(Math.round(eased * value));
      if (progress < 1) frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [inView, value]);

  const formatted =
    value !== null ? Number(display).toLocaleString() + suffix : number;

  return (
    <div className={styles.StatCell}>
      <span className={styles.StatNumber}>{formatted}</span>
      <span className={styles.StatLabel}>{label}</span>
    </div>
  );
}

export default function RecruitingBanner() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.Wrapper} ref={sectionRef}>
      <div className={styles.Container}>
        <div className={styles.Card}>
          <div className={styles.Left}>
            <span className={styles.Eyebrow}>We&apos;re Hiring</span>
            <h2 className={styles.Title}>
              BUILD YOUR CAREER WITH <span>P&C</span>
            </h2>
            <p className={styles.Body}>
              Join a team that invests in your growth. From solar and EV to
              commercial electrical, we&apos;re looking for driven people who
              want to work on real projects, with real impact.
            </p>
            <Link href="/recruiting" className={styles.CTA}>
              See Open Roles <ArrowRight size={18} />
            </Link>
          </div>

          <div className={styles.Right}>
            <div className={styles.StatGrid}>
              {stats.map((s) => (
                <StatCell
                  key={s.label}
                  number={s.number}
                  label={s.label}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
