'use client';

import styles from '../Styles/JobTicker.module.css';

const FALLBACK_ROLES = [
  'Electrical Improver',
  'Solar PV Installer',
  'EV Charge Point Engineer',
  'Commercial Electrician',
  'Apprentice Electrician',
  'Site Supervisor',
];

export default function JobTicker({ jobs }) {
  const titles =
    jobs && jobs.length > 0 ? jobs.map((j) => j.title) : FALLBACK_ROLES;

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Track}>
        {/* Two identical sets — animate shifts by -50% for a seamless loop */}
        {[0, 1].map((copy) => (
          <div key={copy} className={styles.Set} aria-hidden={copy === 1}>
            {titles.map((title, i) => (
              <span key={i} className={styles.Item}>
                <span className={styles.Dot} />
                NOW HIRING: <strong>{title}</strong>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
