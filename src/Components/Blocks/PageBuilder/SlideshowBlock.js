'use client';

import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import styles from './SlideshowBlock.module.css';

export default function SlideshowBlock({ data }) {
  // 1. Config: Autoplay is ON, but doesn't stop just because you touch it.
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 8000, stopOnInteraction: false })],
  );

  // 2. Interaction Handler: Kills autoplay ONLY when user clicks buttons
  const stopAutoplay = useCallback(() => {
    if (!emblaApi) return;
    const autoplay = emblaApi.plugins()?.autoplay;
    if (autoplay && autoplay.isPlaying()) {
      autoplay.stop();
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      stopAutoplay(); // Stop auto-moving
      emblaApi.scrollPrev();
    }
  }, [emblaApi, stopAutoplay]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      stopAutoplay(); // Stop auto-moving
      emblaApi.scrollNext();
    }
  }, [emblaApi, stopAutoplay]);

  if (!data.images || data.images.length === 0) return null;

  return (
    <section className={styles.Wrapper}>
      <div className={styles.Header}>
        {data.title && <h2 className={styles.Title}>{data.title}</h2>}

        <div className={styles.NavButtons}>
          <button
            type="button"
            onClick={scrollPrev}
            className={styles.NavBtn}
            aria-label="Previous"
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
            aria-label="Next"
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
            <div className={styles.Slide} key={index}>
              <div className={styles.SlideInner}>
                {img.url && (
                  <Image
                    src={img.url}
                    alt={img.alt || `Slide ${index}`}
                    fill
                    className={styles.Image}
                    sizes="(max-width: 768px) 100vw, 33vw"
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
