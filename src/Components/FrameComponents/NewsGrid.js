import Image from 'next/image';
import Link from 'next/link';
import styles from './NewsFrameComponents.module.css';

export default function NewsGrid({ title, data }) {
  // If we have fewer than 4 items, there is nothing left for the grid
  if (!data || data.length <= 4) return null;

  const items = data.slice(4);

  return (
    <div className={styles.NewsGrid}>
      <h2>Previous {title}</h2>
      <div className={styles.NewsGrid_Container}>
        {items.map((item) => (
          <Link href={`/news/${item.slug}`} key={item.id}>
            <div className={styles.NewsGrid_Card}>
              {/* Image Section */}
              <div className={styles.NewsGrid_Card_Image}>
                <Image
                  src={item.hero.url}
                  alt={item.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Content Section */}
              <div className={styles.NewsGrid_Card_Content}>
                <h4 className={styles.NewsGrid_Card_Content_Title}>
                  {item.title}
                </h4>

                {/* --- AUTHOR ROW --- */}
                {item.author && (
                  <div className={styles.authorContainer}>
                    {item.author.avatar && (
                      <div className={styles.avatarWrapper}>
                        <Image
                          src={item.author.avatar}
                          alt={item.author.name}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    )}
                    <div className={styles.authorInfo}>
                      <span className={styles.authorName}>
                        {item.author.name}
                      </span>
                      <span className={styles.authorRole}>
                        {item.author.jobTitle}
                      </span>
                    </div>
                  </div>
                )}
                {/* ----------------- */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
