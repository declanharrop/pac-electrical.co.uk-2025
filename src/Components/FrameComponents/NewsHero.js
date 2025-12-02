'use client';

import Image from 'next/image';
import Link from 'next/link';
import Styles from './NewsFrameComponents.module.css';

export default function NewsHero({ data }) {
  // 1. Safety Check: Ensure data exists and has at least one item
  if (!data || data.length === 0) return null;

  const featured = data[0];

  // 2. Extra Safety: If the first item is somehow undefined, return null
  if (!featured) return null;

  // If only 1 exists, don't crash on slice.
  const others = data.length > 1 ? data.slice(1, 4) : [];

  // Helper: Author Badge (Visual Only for Cards)
  const AuthorBadge = ({ author }) => {
    if (!author) return null;
    return (
      <div className={Styles.authorContainer}>
        {author.avatar && (
          <div className={Styles.avatarWrapper}>
            <Image
              src={author.avatar}
              alt={author.name}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        )}
        <div className={Styles.authorInfo}>
          <span className={Styles.authorName}>{author.name}</span>
          <span className={Styles.authorRole}>{author.jobTitle}</span>
        </div>
      </div>
    );
  };

  return (
    <div className={Styles.NewsHero}>
      <div className={Styles.NewsHero__Container}>
        {/* --- LEFT: Featured Item --- */}
        {/* Added optional chaining ?.slug just in case */}
        <Link
          key={featured.id}
          href={`/news/${featured.slug}`}
          className={Styles.NewsHero__FeaturedLink}
        >
          <div className={Styles.NewsHero__Featured}>
            {featured.hero && (
              <Image
                src={featured.hero.url}
                alt={featured.title}
                fill
                priority
                style={{ objectFit: 'cover' }}
              />
            )}
            <div className={Styles.NewsHero__Featured__Overlay}>
              <h2 className={Styles.NewsHero__Featured__Overlay__Title}>
                {featured.title}
              </h2>
              <p className={Styles.NewsHero__Featured__Overlay__Intro}>
                {featured.preview}
              </p>

              {/* Featured Author Badge */}
              <AuthorBadge author={featured.author} />
            </div>
          </div>
        </Link>

        {/* --- RIGHT: Side Items --- */}
        <div className={Styles.NewsHero__OtherStudies}>
          {others.map((item) => (
            <Link key={item.id} href={`/news/${item.slug}`}>
              <div className={Styles.NewsHero__OtherStudy}>
                <div className={Styles.NewsHero__OtherStudy__Image}>
                  {item.hero && (
                    <Image
                      src={item.hero.url}
                      alt={item.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  )}
                </div>
                <div className={Styles.NewsHero__OtherStudy__Overlay}>
                  <h3 className={Styles.NewsHero__OtherStudy__Overlay__Title}>
                    {item.title}
                  </h3>

                  {/* Side Item Author Badge */}
                  <div
                    style={{ transform: 'scale(0.9)', transformOrigin: 'left' }}
                  >
                    <AuthorBadge author={item.author} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
