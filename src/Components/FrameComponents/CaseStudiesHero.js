'use client';

import Image from 'next/image';
import Link from 'next/link';
import Styles from './FrameComponents.module.css';
import SectorLabel from '@/Utils/SectorLabel';

export default function CaseStudiesHero({ data }) {
  // Safety check
  if (!data || data.length === 0) return null;

  const featuredStudy = data[0];
  // If only 1 exists, don't crash on slice.
  const otherStudies = data.length > 1 ? data.slice(1, 4) : [];

  return (
    <div className={Styles.CaseStudiesHero}>
      <div className={Styles.CaseStudiesHero__Container}>
        {/* --- LEFT: Featured Item --- */}
        <Link
          key={featuredStudy.id || featuredStudy._id}
          href={`/case-studies/study/${featuredStudy.slug}`}
          className={Styles.CaseStudiesHero__FeaturedLink}
        >
          <div className={Styles.CaseStudiesHero__Featured}>
            <Image
              src={featuredStudy.hero.url}
              alt={featuredStudy.title}
              fill
              priority
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 1100px) 100vw, 66vw"
            />
            <div className={Styles.CaseStudiesHero__Featured__Overlay}>
              <SectorLabel data={featuredStudy.studySectors} />
              <h2 className={Styles.CaseStudiesHero__Featured__Overlay__Title}>
                {featuredStudy.title}
              </h2>
              <p>{featuredStudy.introduction || featuredStudy.preview}</p>
            </div>
          </div>
        </Link>

        {/* --- RIGHT: Side Items --- */}
        <div className={Styles.CaseStudiesHero__OtherStudies}>
          {otherStudies.map((study) => (
            <Link
              key={study.id || study._id}
              href={`/case-studies/study/${study.slug}`}
            >
              <div className={Styles.CaseStudiesHero__OtherStudy}>
                <div className={Styles.CaseStudiesHero__OtherStudy__Image}>
                  <Image
                    src={study.hero.url}
                    alt={study.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 1100px) 33vw, 33vw"
                  />
                </div>
                <div className={Styles.CaseStudiesHero__OtherStudy__Overlay}>
                  <h3
                    className={
                      Styles.CaseStudiesHero__OtherStudy__Overlay__Title
                    }
                  >
                    {study.title}
                  </h3>
                  <SectorLabel data={study.studySectors} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
