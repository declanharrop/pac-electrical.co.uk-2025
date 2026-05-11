import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import SectorLabel from '@/Utils/SectorLabel';
import styles from './Styles/CaseStudyFrame.module.css';
import SliderBlock from '@/Components/Blocks/SliderBlock';

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
  const data = study;

  const formattedDate = data.releaseDate
    ? new Date(data.releaseDate).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : '';

  const richSnippet = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data.metaDescription,
    image: [data.hero.url],
    datePublished: data.releaseDate || new Date().toISOString(),
    author: [
      {
        '@type': 'Organization',
        name: 'Power & Control Ltd',
        url: 'https://pac-electrical.co.uk',
      },
    ],
    publisher: {
      '@type': 'Organization',
      name: 'Power & Control Ltd',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pac-electrical.co.uk/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://pac-electrical.co.uk/case-studies/study/${data.slug}`,
    },
  };

  return (
    <div className={styles.CaseStudyFrame}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(richSnippet) }}
      />

      {/* ── HERO ──────────────────────────────── */}
      <div className={styles.Hero}>
        <Image
          src={data.hero.url}
          alt={`${data.title} - Case Study by Power & Control Ltd`}
          fill
          priority
          quality={90}
          sizes="100vw"
          className={styles.HeroImage}
        />
        <div className={styles.HeroOverlay} />
        <div className={styles.HeroContent}>
          <span className={styles.HeroEyebrow}>Case Study</span>
          <SectorLabel data={data.studySectors} />
          <h1 className={styles.HeroTitle}>{data.title}</h1>
          {data.introduction && (
            <p className={styles.HeroIntro}>{data.introduction}</p>
          )}
        </div>
      </div>

      {/* ── BODY ──────────────────────────────── */}
      <div className={styles.CaseStudyFrame_Container}>
        <div className={styles.CaseStudyFrame_Container_Content}>

          {/* STATS GRID */}
          <div className={styles.CaseStudyFrame_Container_Content_Stats}>
            {/* ... keep your existing Stats ... */}
          </div>

          {/* VIDEO SECTION */}
          {data.youtubeVideo && (
            <div className={styles.CaseStudyFrame_Container_Content_Video}>
              <iframe
                src={data.youtubeVideo}
                title={`${data.title} Video Presentation`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}

          {/* TEXT CONTENT */}
          <div className={styles.CaseStudyFrame_Container_Content_Text}>
            <p className={styles.CaseStudyFrame_Container_Content_Text_Date}>
              Published on: {formattedDate}
            </p>
            <div className={styles.richTextContainer}>
              <PortableText value={data.content} components={ptComponents} />
            </div>
          </div>

          {/* SLIDER / GALLERY */}
          {data.gallery && data.gallery.length >= 1 && (
            <>
              <SliderBlock images={data.gallery} />
              <div className="spacer-md" />
            </>
          )}

          {/* CTA */}
          <div className={styles.CaseStudy_CTA}>
            <h3>Are you planning a similar project?</h3>
            <p>
              Based in Derby, our expert team provides professional{' '}
              {data.technology || 'electrical and solar'} installations across
              the East Midlands. Let&apos;s discuss your requirements.
            </p>
            <Link href="/get-a-quote" className={styles.ctaButton}>
              Request a Site Survey
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
