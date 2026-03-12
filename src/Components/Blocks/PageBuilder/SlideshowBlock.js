'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import styles from './SlideshowBlock.module.css';

export default function SlideshowBlock({ data }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 8000, stopOnInteraction: false })],
  );

  const stopAutoplay = useCallback(() => {
    if (!emblaApi) return;
    const autoplay = emblaApi.plugins()?.autoplay;
    if (autoplay && autoplay.isPlaying()) {
      autoplay.stop();
    }
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

  if (!data.images || data.images.length === 0) return null;

  return (
    // SEO UPGRADE: Semantic roles help Google understand the content structure
    <section
      className={styles.Wrapper}
      aria-roledescription="carousel"
      aria-label={data.title || 'Project Gallery'}
    >
      <div className={styles.Header}>
        {data.title && <h2 className={styles.Title}>{data.title}</h2>}

        <div className={styles.NavButtons}>
          <button
            type="button"
            onClick={scrollPrev}
            className={styles.NavBtn}
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className={styles.NavBtn}
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.Viewport} ref={emblaRef}>
        <div className={styles.Container}>
          {data.images.map((img, index) => (
            <div
              className={styles.Slide}
              key={index}
              role="group"
              aria-roledescription="slide"
            >
              <div className={styles.SlideInner}>
                {img.url && (
                  <Image
                    src={img.url}
                    // SEO UPGRADE: Better fallback alt text
                    alt={
                      img.alt ||
                      `Solar installation gallery image ${index + 1} - Power & Control`
                    }
                    fill
                    className={styles.Image}
                    // PERFORMANCE UPGRADE: Only prioritize the first image to keep LCP fast
                    priority={index === 0}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
