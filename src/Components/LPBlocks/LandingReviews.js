'use client';

import React, { useCallback, useEffect, useState, useMemo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import styles from './LandingReviews.module.css';
import LowerOpaqueWaves from '@/Elements/ShapeDividers/LowerOpaqueWaves';
import UpperOpaqueWaves from '@/Elements/ShapeDividers/UpperOpaqueWaves';

export default function LandingReviews({ heading, reviews }) {
  // 1. Data Prep: Duplicate slides if fewer than 6 to ensure smooth looping
  const processedReviews = useMemo(() => {
    if (!reviews || reviews.length === 0) return [];
    if (reviews.length < 6) {
      return [...reviews, ...reviews, ...reviews];
    }
    return reviews;
  }, [reviews]);

  const isLooping = processedReviews.length > 1;

  // 2. Config: 'center' alignment for the focus effect
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: isLooping,
      align: 'center',
      skipSnaps: false,
    },
    [Autoplay({ delay: 6000, stopOnInteraction: false })],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  // 3. Navigation Handlers
  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      emblaApi.plugins().autoplay.stop();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      emblaApi.plugins().autoplay.stop();
    }
  }, [emblaApi]);

  // 4. Track Active Slide (for CSS scaling)
  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi); // Initial check
    emblaApi.on('select', onSelect); // Update on change
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  if (!processedReviews || processedReviews.length === 0) return null;

  return (
    <>
      <LowerOpaqueWaves />
      <section className={styles.section}>
        <div className={styles.container}>
          {/* Header Section */}
          <div className={styles.header}>
            <h2 className={styles.title}>{heading || 'Our Reviews'}</h2>
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
          <div className={styles.viewport} ref={emblaRef}>
            <div className={styles.track}>
              {processedReviews.map((review, index) => {
                const isActive = index === selectedIndex;

                return (
                  <div
                    className={`${styles.slide} ${isActive ? styles.activeSlide : ''}`}
                    key={index}
                  >
                    <div className={styles.card}>
                      <div className={styles.cardContent}>
                        <div className={styles.stars}>
                          {'★'.repeat(review.stars || 5)}
                        </div>
                        <p className={styles.reviewText}>
                          "{review.quote || review.reviewText || review.text}"
                        </p>
                      </div>

                      <div className={styles.cardFooter}>
                        <div className={styles.author}>
                          {review.author || review.name}
                        </div>
                        {(review.organisation || review.location) && (
                          <div className={styles.location}>
                            {review.organisation || review.location}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <UpperOpaqueWaves />
    </>
  );
}
