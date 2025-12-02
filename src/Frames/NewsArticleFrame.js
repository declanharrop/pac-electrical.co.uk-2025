import Link from 'next/link';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import ImageHero from '@/Components/Hero/ImageHero';
import styles from './Styles/NewsPageFrame.module.css'; // Reusing existing styles is fine

// Custom components for Portable Text
const ptComponents = {
  block: {
    normal: ({ children }) => <p className={styles.paragraph}>{children}</p>,
    h2: ({ children }) => <h2 className={styles.heading2}>{children}</h2>,
    h3: ({ children }) => <h3 className={styles.heading3}>{children}</h3>,
  },
  list: {
    bullet: ({ children }) => <ul className={styles.list}>{children}</ul>,
    number: ({ children }) => <ol className={styles.list}>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className={styles.listItem}>{children}</li>,
  },
};

export default function NewsArticleFrame({ data }) {
  const formattedDate = new Date(data.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // HELPER: The Visual Content (Avatar + Text)
  const AuthorContent = ({ author }) => (
    <>
      {author.avatar && (
        <div className={styles.avatarWrapper}>
          <Image
            src={author.avatar}
            alt={author.name}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}
      <div className={styles.authorText}>
        <p className={styles.writtenBy}>Written by</p>
        <p className={styles.authorName}>
          <strong>{author.name}</strong> | {author.jobTitle}
        </p>
      </div>
    </>
  );

  return (
    <div className={styles.NewsPageFrame} style={{ marginTop: '64px' }}>
      {/* Back Button */}
      <Link href="/news">
        <div className={styles.NewsPageFrame_BackButton}>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Back</title>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <polygon
                fill="#FFFFFF"
                fillRule="nonzero"
                points="12 19.15 0 7.15 2.15 5 12 14.9 21.85 5.05 24 7.2"
              />
            </g>
          </svg>
        </div>
      </Link>

      {/* Hero Image */}
      <ImageHero
        src={data.hero.url}
        alt={data.title}
        height="75vh"
        title={data.title}
      />

      <div className={styles.NewsPageFrame_Container}>
        <div className={styles.NewsPageFrame_Container_Content}>
          {/* YouTube Video (if exists) */}
          {data.ytVideo && (
            <div className={styles.NewsPageFrame_Container_Content_Video}>
              <iframe
                src={data.ytVideo}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          <div className={styles.NewsPageFrame_Container_Content_Text}>
            {/* Date */}
            <p className={styles.NewsPageFrame_Container_Content_Text_Date}>
              {formattedDate}
            </p>

            {/* --- AUTHOR SECTION (Clickable Logic) --- */}
            {data.author && (
              <div className={styles.authorBadge}>
                {/* CHECK: Has Slug AND is NOT former staff? */}
                {data.author.slug && !data.author.isFormerStaff ? (
                  <Link
                    href={`/team/${data.author.slug}`}
                    className={styles.authorLink}
                  >
                    <AuthorContent author={data.author} />
                  </Link>
                ) : (
                  /* Otherwise: Just a Div */
                  <div className={styles.authorNoLink}>
                    <AuthorContent author={data.author} />
                  </div>
                )}
              </div>
            )}

            {/* Rich Text Content */}
            <div className={styles.richTextContainer}>
              <PortableText value={data.content} components={ptComponents} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
