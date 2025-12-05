// ❌ REMOVED 'use client' - This must be a Server Component now
import ImageHero from '@/Components/Hero/ImageHero';
import Styles from './Styles/StandardPageFrame.module.css';
import SmoothScrollLogosBlock from '@/Components/Blocks/SmoothScrollLogosBlock';

// Blocks
import ImageTextBlock from '@/Components/Blocks/PageBuilder/ImageTextBlock';
import FAQsBlock from '@/Components/Blocks/PageBuilder/FAQsBlock';
import BlockBlock from '@/Components/Blocks/PageBuilder/BlockBlock';
import ImageBlock from '@/Components/Blocks/PageBuilder/ImageBlock';
import VideoBlock from '@/Components/Blocks/PageBuilder/VideoBlock';
import SlideshowBlock from '@/Components/Blocks/PageBuilder/SlideshowBlock';

// Dynamic Server Components
import LatestCaseStudies from '@/Components/Blocks/Dynamic/LatestCaseStudies';

// Note: We added 'async' because this is now a Server Component
export default async function PageBuilderFrame({ data, isSolar = false }) {
  if (!data) return null;

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
          height="40vh"
        />
      )}

      {/* SOLAR LOGOS */}
      {isSolar && (
        <div style={{ marginTop: '-80px' }}>
          <SmoothScrollLogosBlock />
        </div>
      )}

      {/* PAGE BUILDER LOOP */}
      <div className={Styles.content}>
        {sections.map((block) => {
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
              return <SlideshowBlock key={block._key} data={block} />;

            /* NEW CASE STUDY BLOCK 
               Make sure your Sanity schema uses this _type name (e.g. 'latestStudiesBlock')
            */
            case 'latestStudiesBlock':
              // Or whatever you named it in Sanity Schema
              return (
                <LatestCaseStudies
                  key={block._key}
                  title={block.title || 'Our Latest Work'}
                  // Handle if CMS passes a string (e.g. "Solar") or an Array
                  tags={
                    Array.isArray(block.query)
                      ? block.query
                      : [block.query || 'Solar']
                  }
                  link={block.link}
                />
              );

            default:
              if (process.env.NODE_ENV === 'development') {
                return (
                  <div
                    key={block._key}
                    style={{
                      padding: 20,
                      background: '#fee',
                      color: 'red',
                      textAlign: 'center',
                    }}
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
