'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import styles from './SlideshowBlock.module.css';

export default function SlideshowBlock({ title, images }) {
  // 1. Config: Autoplay is ON.
  // stopOnInteraction: false keeps it moving even after a swipe,
  // but we manually stop it on button click for better UX.
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 5000, stopOnInteraction: false })],
  );

  // 2. Interaction Handlers
  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      emblaApi.plugins().autoplay.stop(); // Stop autoplay if user manually clicks
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      emblaApi.plugins().autoplay.stop();
    }
  }, [emblaApi]);

  // Safety check: Don't render if no images exist
  if (!images || images.length === 0) return null;

  return (
    <div className={styles.Background}>
      <section className={styles.Wrapper}>
        <div className={styles.Header}>
          {title && <h2 className={styles.Title}>{title}</h2>}

          {/* Navigation Buttons */}
          <div className={styles.NavButtons}>
            <button
              type="button"
              onClick={scrollPrev}
              className={styles.NavBtn}
              aria-label="Previous Slide"
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
              aria-label="Next Slide"
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

        {/* Carousel Viewport */}
        <div className={styles.Viewport} ref={emblaRef}>
          <div className={styles.Container}>
            {images.map((img, index) => (
              <div className={styles.Slide} key={index}>
                <div className={styles.SlideInner}>
                  {img.url && (
                    <Image
                      src={img.url}
                      alt={img.alt || `Gallery Image ${index + 1}`}
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
    </div>
  );
}
