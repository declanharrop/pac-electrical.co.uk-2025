import ImageHero from '@/Components/Hero/ImageHero';
import styles from './Styles/CaseStudyFrame.module.css';
import SliderBlock from '@/Components/Blocks/SliderBlock';
import formatDate from '@/lib/formatDate';

export default function CaseStudyFrame({ study }) {
  const data = study.caseStudies[0];

  return (
    <div style={{ marginTop: '120px' }} className={styles.CaseStudyFrame}>
      <ImageHero
        src={data.hero.url}
        alt={`${data.title} - Power & Control Ltd`}
        height="75vh"
        title={data.title}
      />
      <div className={styles.CaseStudyFrame_Container}>
        <div className={styles.CaseStudyFrame_Container_Content}>
          <div className={styles.CaseStudyFrame_Container_Content_Stats}>
            {data.client && (
              <div
                className={styles.CaseStudyFrame_Container_Content_Stats_Detail}
              >
                <h5>CLIENT</h5>
                <h6>{data.client}</h6>
              </div>
            )}
            {data.sector && (
              <div
                className={styles.CaseStudyFrame_Container_Content_Stats_Detail}
              >
                <h5>SECTOR</h5>
                <h6>{data.sector}</h6>
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
          {data.installed && (
            <div
              className={styles.CaseStudyFrame_Container_Content_Stats_Products}
            >
              <h5>PRODUCTS INSTALLED</h5>
              <h6>{data.installed}</h6>
            </div>
          )}
          {data.ytVideo && (
            <div className={styles.CaseStudyFrame_Container_Content_Video}>
              <iframe
                src={data.ytVideo}
                title="Power and Control YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}
          <div className={styles.CaseStudyFrame_Container_Content_Text}>
            <p className={styles.CaseStudyFrame_Container_Content_Text_Date}>
              {formatDate(data.date)}
            </p>
            <div
              className={styles.CaseStudyFrame_Container_Content_Text_Html}
              dangerouslySetInnerHTML={{ __html: data.content.html }}
            />
          </div>
          {data.slideshow.length >= 1 && (
            <>
              <SliderBlock images={data.slideshow} />
              <div className="spacer-md" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
