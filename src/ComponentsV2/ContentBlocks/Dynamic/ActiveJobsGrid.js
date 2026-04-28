import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from '../Styles/ActiveJobsGrid.module.css';

export default function ActiveJobsGrid({ jobs }) {
  return (
    <section className={styles.JobsSection}>
      <div className={styles.GlowBlob}></div>

      <div className={styles.JobsContainer}>
        <div className={styles.JobsHeader}>
          <h2 className={styles.JobsTitle}>OPEN <span>POSITIONS</span></h2>
          <p>Ready to step up? Find your role below.</p>
        </div>
        
        {jobs && jobs.length > 0 ? (
          <div className={styles.JobGrid}>
            {jobs.map((job) => (
              <div key={job._id} className={styles.JobCard}>
                <div className={styles.JobCardInner}>
                  <span className={styles.LiveBadge}>
                    <span className={styles.Pulse}></span> Actively Hiring
                  </span>
                  <h3 className={styles.JobRole}>{job.title}</h3>
                  <p className={styles.JobSnippet}>{job.shortDescription}</p>
                  
                  <Link href={`/recruiting/${job.slug}`} className={styles.ApplyBtn}>
                    View Role & Apply <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.NoJobs}>
            <h3>No open positions right now.</h3>
            <p>We're always looking for absolute weapons. Drop us your CV anyway.</p>
          </div>
        )}
      </div>
    </section>
  );
}