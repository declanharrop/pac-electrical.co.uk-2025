'use client';

import ImageHero from '@/Components/Hero/ImageHero';
import Styles from './Styles/StandardPageFrame.module.css'; // Reusing your existing layout styles
import SmoothScrollLogosBlock from '@/Components/Blocks/SmoothScrollLogosBlock';

// 1. Import your new Sanity-ready Block Components
import ImageTextBlock from '@/Components/Blocks/PageBuilder/ImageTextBlock';
import FAQsBlock from '@/Components/Blocks/PageBuilder/FAQsBlock';
import BlockBlock from '@/Components/Blocks/PageBuilder/BlockBlock';
import ImageBlock from '@/Components/Blocks/PageBuilder/ImageBlock';
import VideoBlock from '@/Components/Blocks/PageBuilder/VideoBlock';

// 2. Import existing Slider (Connecting it to new data)
import SliderBlock from '@/Components/Blocks/SliderBlock';

export default function PageBuilderFrame({ data, isSolar = false }) {
  if (!data) return null;

  // Handle both naming conventions (just in case)
  const sections = data.pageSections || data.pageBuilder || [];

  return (
    <div className={Styles.StandardPageFrame}>
      {/* HERO SECTION */}
      {data.hero && (
        <ImageHero
          src={data.hero.imageUrl}
          alt={data.hero.imageAlt || data.title}
          title={data.hero.title}
          subtitle={data.hero.subtitle}
          height="60vh"
        />
      )}

      {/* SOLAR LOGOS (Conditional) */}
      {isSolar && <SmoothScrollLogosBlock />}

      {/* PAGE BUILDER LOOP */}
      <div className={Styles.content}>
        {sections.map((block) => {
          // The '_type' here comes directly from your Sanity Schema names
          switch (block._type) {
            case 'imageTextSection':
              return <ImageTextBlock key={block._key} data={block} />;

            case 'blocksSection':
              return <BlockBlock key={block._key} data={block} />;

            case 'faqsSection':
              return <FAQsBlock key={block._key} data={block} />;

            case 'imageSection':
              return <ImageBlock key={block._key} data={block} />;

            case 'videoSection':
              return <VideoBlock key={block._key} data={block} />;

            case 'slideshowSection':
              // Adapt Sanity data to match SliderBlock's expected props
              return (
                <div key={block._key} style={{ margin: '50px 0' }}>
                  {block.title && (
                    <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
                      {block.title}
                    </h2>
                  )}
                  <SliderBlock images={block.images} />
                </div>
              );

            default:
              if (process.env.NODE_ENV === 'development') {
                return (
                  <div
                    key={block._key}
                    style={{ padding: 20, background: '#fee', color: 'red' }}
                  >
                    Unknown Block Type: <strong>{block._type}</strong>
                  </div>
                );
              }
              return null;
          }
        })}
      </div>
    </div>
  );
}
