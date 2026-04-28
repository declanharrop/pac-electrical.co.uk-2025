import styles from '../Styles/JobTicker.module.css';

export default function JobTicker({ jobs }) {
  if (!jobs || jobs.length === 0) return null;

  return (
    <div className={styles.TickerWrapper}>
      <div className={styles.TickerTrack}>
        {/* Triplicating the array ensures infinite scroll doesn't snap abruptly */}
        {[...jobs, ...jobs, ...jobs].map((job, index) => (
          <div key={`${job._id}-${index}`} className={styles.TickerItem}>
            <span className={styles.GreenDot}>•</span>
            NOW HIRING: <strong>{job.title}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}