import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import ImageHero from '@/Components/Hero/ImageHero'; // Reusing your existing Hero
import styles from './Styles/AuthorPageFrame.module.css';

// Styling for the Bio text
const ptComponents = {
  block: {
    normal: ({ children }) => <p className={styles.paragraph}>{children}</p>,
    h3: ({ children }) => <h3 className={styles.heading3}>{children}</h3>,
  },
  list: {
    bullet: ({ children }) => <ul className={styles.list}>{children}</ul>,
  },
};

export default function AuthorPageFrame({ data }) {
  const { name, jobTitle, avatarUrl, heroUrl, bio, posts, videoLink } = data;

  // Use their specific hero, or fallback to a generic team banner
  const heroImage = heroUrl || '/images/default-team-banner.jpg';

  return (
    <div className={styles.AuthorPageFrame} style={{ marginTop: '64px' }}>
      {/* 1. Hero Section */}

      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* 2. Sidebar: Avatar & Details */}
          <aside className={styles.sidebar}>
            <div className={styles.avatarWrapper}>
              {avatarUrl && (
                <Image
                  src={avatarUrl}
                  alt={name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              )}
            </div>
            <h2 className={styles.sidebarName}>{name}</h2>
            <p className={styles.sidebarRole}>{jobTitle}</p>

            {videoLink && (
              <a
                href={videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.videoButton}
              >
                Watch Intro Video
              </a>
            )}
          </aside>

          {/* 3. Main Content: Bio */}
          <div className={styles.bioSection}>
            <h3 className={styles.sectionTitle}>About {name.split(' ')[0]}</h3>
            <div className={styles.richText}>
              {bio ? (
                <PortableText value={bio} components={ptComponents} />
              ) : (
                <p>No biography available.</p>
              )}
            </div>
          </div>
        </div>

        {/* 4. Articles Section (Only if they have posts) */}
        {posts && posts.length > 0 && (
          <div className={styles.articlesSection}>
            <h3 className={styles.sectionTitle}>Latest Articles</h3>
            <div className={styles.articlesGrid}>
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`https://blog.pac-electrical.co.uk/${post.slug}`}
                >
                  <div className={styles.articleCard}>
                    <div className={styles.articleImage}>
                      {post.imageUrl && (
                        <Image
                          src={post.imageUrl}
                          alt={post.title}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      )}
                    </div>
                    <div className={styles.articleContent}>
                      <h4>{post.title}</h4>
                      <span className={styles.articleDate}>
                        {new Date(post.date).toLocaleDateString('en-GB')}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
