import ImageHero from '@/Components/Hero/ImageHero';
import styles from './Styles/StandardPageFrame.module.css';
import FAQsBlock from '@/Components/Blocks/FrameBlocks/FAQsBlock';
import ImageBlock from '@/Components/Blocks/FrameBlocks/ImageBlock';
import BlockBlock from '@/Components/Blocks/FrameBlocks/BlockBlock';
import ImageTextBlock from '@/Components/Blocks/FrameBlocks/ImageTextBlock';
import VideoBlock from '@/Components/Blocks/VideoBlock';
import SmoothScrollLogosBlock from '@/Components/Blocks/SmoothScrollLogosBlock';

export default function StandardPageFrame({ data, solar = false }) {
  return (
    <div className={styles.StandardPageFrame}>
      <ImageHero
        src={data.heroImage.image.url}
        alt={data.pageTitle}
        title={data.heroImage.title}
        subtitle={data.heroImage.subtitle}
        height="60vh"
      />
      {solar && <SmoothScrollLogosBlock />}
      <div className={styles.content}>
        {data.pageSections.map((section, i) => (
          <div key={i}>
            {section.__typename === 'ImageTextSection' && (
              <ImageTextBlock data={section} />
            )}
            {section.__typename === 'BlocksSection' && (
              <BlockBlock data={section} />
            )}
            {section.__typename === 'ImageSection' && (
              <ImageBlock data={section} />
            )}
            {section.__typename === 'FaQsSection' && (
              <FAQsBlock data={section} />
            )}
            {section.__typename === 'VideoSection' && (
              <VideoBlock data={section} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
