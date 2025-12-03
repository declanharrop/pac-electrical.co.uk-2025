'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';
import styles from './NewsSlider.module.css';

export default function NewsSlider({ posts, title = 'Latest News' }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 4000, stopOnInteraction: false })],
  );

  const stopAutoplay = useCallback(() => {
    if (!emblaApi) return;
    const autoplay = emblaApi.plugins()?.autoplay;
    if (autoplay && autoplay.isPlaying()) autoplay.stop();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      stopAutoplay();
      emblaApi.scrollPrev();
    }
  }, [emblaApi, stopAutoplay]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      stopAutoplay();
      emblaApi.scrollNext();
    }
  }, [emblaApi, stopAutoplay]);

  if (!posts || posts.length === 0) return null;

  return (
    <section className={styles.Wrapper}>
      <div className={styles.Header}>
        <h2 className={styles.Title}>{title}</h2>

        <div className={styles.NavButtons}>
          <button
            type="button"
            onClick={scrollPrev}
            className={styles.NavBtn}
            aria-label="Previous"
          >
            ←
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className={styles.NavBtn}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>

      <div className={styles.Viewport} ref={emblaRef}>
        <div className={styles.Container}>
          {posts.map((post, index) => (
            <div className={styles.Slide} key={index}>
              <Link href={`/news/${post.slug}`} className={styles.Card}>
                {/* 1. HERO IMAGE (imageUrl) */}
                <div className={styles.ImageContainer}>
                  {post.imageUrl ? (
                    <Image
                      src={post.imageUrl}
                      alt={post.imageAlt || post.title}
                      fill
                      className={styles.Image}
                      sizes="(max-width: 768px) 80vw, 33vw"
                    />
                  ) : (
                    <div className={styles.Placeholder} />
                  )}
                </div>

                <div className={styles.Content}>
                  {/* 2. DATE (date) */}
                  {post.date && (
                    <span className={styles.Date}>
                      {new Date(post.date).toLocaleDateString(undefined, {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  )}

                  {/* 3. TITLE & SUBTITLE */}
                  <h3 className={styles.CardTitle}>{post.title}</h3>
                  {post.subtitle && (
                    <p className={styles.CardSubtitle}>{post.subtitle}</p>
                  )}

                  {/* 4. BOTTOM ROW: AUTHOR + READ MORE */}
                  <div className={styles.BottomRow}>
                    {/* Author Profile */}
                    {post.author && (
                      <div className={styles.Author}>
                        {post.author.avatarUrl && (
                          <div className={styles.AuthorImageWrapper}>
                            <Image
                              src={post.author.avatarUrl}
                              alt={post.author.name}
                              width={40}
                              height={40}
                              className={styles.AuthorImage}
                            />
                          </div>
                        )}
                        <div className={styles.AuthorText}>
                          <span className={styles.AuthorName}>
                            {post.author.name}
                          </span>
                          {/* Optional: Show Job Title if you want */}
                          {/* <span className={styles.JobTitle}>{post.author.jobTitle}</span> */}
                        </div>
                      </div>
                    )}

                    <span className={styles.ReadMore}>Read &rarr;</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
