'use client';

import React from 'react';

// Import all the isolated landing page blocks
import LandingHero from './LandingHero';
import LandingFeatures from './LandingFeatures';
import LandingReviews from './LandingReviews';
import LandingImageDetail from './LandingImageDetail';
import LandingVideo from './LandingVideo';
import SlideshowBlock from './SlideshowBlock';
import LandingFaqs from './LandingFaqs';

const COMPONENTS = {
  landingHero: LandingHero,
  landingFeatures: LandingFeatures,
  landingReviews: LandingReviews,
  landingImageDetail: LandingImageDetail,
  landingVideo: LandingVideo,
  slideshowSection: SlideshowBlock,
  landingFaqs: LandingFaqs,
};

export default function LP_PageBuilder({ blocks }) {
  if (!blocks || !Array.isArray(blocks)) {
    return null;
  }

  return (
    // Swapped Tailwind for inline styles to ensure it works on the main site
    <section
      style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
    >
      {blocks.map((block) => {
        const Component = COMPONENTS[block._type];

        if (!Component) {
          console.warn(
            `⚠️ Warning: No component found for block type: ${block._type}`,
          );
          return null; // Better to return null than an empty hidden div
        }

        return <Component key={block._key} {...block} />;
      })}
    </section>
  );
}
