import Link from 'next/link';
import Image from 'next/image';
import styles from './Styles/TeamPageFrame.module.css';

export default function TeamPageFrame({ team }) {
  return (
    <div className={styles.TeamPageFrame}>
      {/* 1. Header Section */}
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <h1 className={styles.title}>Meet The Team</h1>
          <div className="dark-divider" />
          <p className={styles.subtitle}>
            Our team of expert engineers and project managers is dedicated to
            delivering excellence in every connection.
          </p>
        </div>
      </div>

      {/* 2. Team Grid */}
      <div className={styles.gridContainer}>
        {team.map((member) => (
          <Link
            key={member._id}
            href={`/team/${member.slug}`}
            className={styles.cardLink}
          >
            <div className={styles.card}>
              {/* Avatar Circle */}
              <div className={styles.imageWrapper}>
                {member.avatarUrl ? (
                  <Image
                    src={member.avatarUrl}
                    alt={member.avatarAlt || member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                ) : (
                  // Fallback if no photo
                  <div className={styles.placeholder} />
                )}
              </div>

              {/* Text Info */}
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.jobTitle}</p>

              <span className={styles.viewProfile}>View Profile &rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
