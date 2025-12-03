'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import styles from './SlideshowBlock.module.css';

export default function SlideshowBlock({ data }) {
  // 1. Initialize with Autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [
      Autoplay({
        delay: 6000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    ],
  );

  // 2. Button Handlers (Now with Force Stop)
  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      // Force autoplay to stop immediately
      const autoplay = emblaApi.plugins()?.autoplay;
      if (autoplay) autoplay.stop();

      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      // Force autoplay to stop immediately
      const autoplay = emblaApi.plugins()?.autoplay;
      if (autoplay) autoplay.stop();

      emblaApi.scrollNext();
    }
  }, [emblaApi]);

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

      {/* The viewport stops on mouse enter thanks to stopOnMouseEnter: true */}
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
