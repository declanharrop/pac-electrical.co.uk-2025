import { PortableText } from '@portabletext/react';
import ImageHero from '@/Components/Hero/ImageHero';
import styles from './Styles/CaseStudyFrame.module.css';
import SliderBlock from '@/Components/Blocks/SliderBlock';

// Custom styles for the Rich Text to match your design
const ptComponents = {
  block: {
    normal: ({ children }) => <p className={styles.paragraph}>{children}</p>,
    h2: ({ children }) => <h2 className={styles.heading2}>{children}</h2>,
    h3: ({ children }) => <h3 className={styles.heading3}>{children}</h3>,
    h4: ({ children }) => <h4 className={styles.heading4}>{children}</h4>,
  },
  list: {
    bullet: ({ children }) => <ul className={styles.list}>{children}</ul>,
    number: ({ children }) => <ol className={styles.list}>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className={styles.listItem}>{children}</li>,
  },
};

export default function CaseStudyFrame({ study }) {
  // Data comes directly now (no study.caseStudies[0] needed)
  const data = study;

  // Hydration-safe date formatter
  const formattedDate = data.releaseDate
    ? new Date(data.releaseDate).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : '';

  // Helper to join sectors (e.g., "Commercial, Solar")
  const sectorDisplay = data.studySectors?.join(', ');

  return (
    <div style={{ marginTop: '120px' }} className={styles.CaseStudyFrame}>
      {/* HERO SECTION */}
      <ImageHero
        src={data.hero.url}
        alt={`${data.title} - Power & Control Ltd`}
        height="75vh"
        title={data.title}
      />

      <div className={styles.CaseStudyFrame_Container}>
        <div className={styles.CaseStudyFrame_Container_Content}>
          {/* STATS GRID */}
          <div className={styles.CaseStudyFrame_Container_Content_Stats}>
            {data.client && (
              <div
                className={styles.CaseStudyFrame_Container_Content_Stats_Detail}
              >
                <h5>CLIENT</h5>
                <h6>{data.client}</h6>
              </div>
            )}
            {sectorDisplay && (
              <div
                className={styles.CaseStudyFrame_Container_Content_Stats_Detail}
              >
                <h5>SECTOR</h5>
                <h6>{sectorDisplay}</h6>
              </div>
            )}
            {data.technology && (
              <div
                className={styles.CaseStudyFrame_Container_Content_Stats_Detail}
              >
                <h5>TECHNOLOGY</h5>
                <h6>{data.technology}</h6>
              </div>
            )}
            {data.systemSize && (
              <div
                className={styles.CaseStudyFrame_Container_Content_Stats_Detail}
              >
                <h5>SYSTEM SIZE</h5>
                <h6>{data.systemSize}</h6>
              </div>
            )}
            {data.paybackPeriod && (
              <div
                className={styles.CaseStudyFrame_Container_Content_Stats_Detail}
              >
                <h5>PAYBACK PERIOD</h5>
                <h6>{data.paybackPeriod}</h6>
              </div>
            )}
            {data.savings && (
              <div
                className={styles.CaseStudyFrame_Container_Content_Stats_Detail}
              >
                <h5>25-YEAR SAVINGS</h5>
                <h6>{data.savings}</h6>
              </div>
            )}
            {data.annualOutput && (
              <div
                className={styles.CaseStudyFrame_Container_Content_Stats_Detail}
              >
                <h5>ESTIMATED ANNUAL OUTPUT</h5>
                <h6>{data.annualOutput}</h6>
              </div>
            )}
            {data.co2Savings && (
              <div
                className={styles.CaseStudyFrame_Container_Content_Stats_Detail}
              >
                <h5>ANNUAL CO2 SAVINGS</h5>
                <h6>{data.co2Savings}</h6>
              </div>
            )}
          </div>

          {/* NOTE: 'installed' field removed as it was missing from your Sanity Schema */}

          {/* VIDEO SECTION */}
          {data.youtubeVideo && (
            <div className={styles.CaseStudyFrame_Container_Content_Video}>
              <iframe
                src={data.youtubeVideo}
                title="Power and Control YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}

          {/* TEXT CONTENT */}
          <div className={styles.CaseStudyFrame_Container_Content_Text}>
            <p className={styles.CaseStudyFrame_Container_Content_Text_Date}>
              {formattedDate}
            </p>

            {/* Replaced dangerouslySetInnerHTML with PortableText */}
            <div className={styles.richTextContainer}>
              <PortableText value={data.content} components={ptComponents} />
            </div>
          </div>

          {/* SLIDER / GALLERY */}
          {data.gallery && data.gallery.length >= 1 && (
            <>
              {/* Passed as 'images' to match your SliderBlock prop expectation */}
              <SliderBlock images={data.gallery} />
              <div className="spacer-md" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
