import Image from 'next/image';
import { use100vh } from 'react-div-100vh';
import { useContext, useEffect, useState } from 'react';
import Styles from './FrameComponents.module.css';
import SectorLabel from '@/Utils/SectorLabel';
import { HeaderContext } from '@/Context/HeaderContext';

export default function CaseStudiesHero({ data }) {
  const { windowWidth } = useContext(HeaderContext);
  const [displayHeight, setDisplayHeight] = useState();
  const [otherStudies, setOtherStudies] = useState();
  const height = use100vh();

  const featuredStudy = data[0];

  useEffect(() => {
    if (height) {
      if (windowWidth > 1090) {
        setDisplayHeight(`${height - 120}px`);
      } else {
        setDisplayHeight(`${height - 180}px`);
      }
      if (windowWidth < 800) {
        setDisplayHeight('auto');
      }
    }
    if (data.length > 3) {
      setOtherStudies(data.slice(1, 4));
    }
    if (data.length === 3) {
      setOtherStudies(data.slice(1, 3));
    }
  }, [height, windowWidth, data]);

  if (displayHeight) {
    return (
      <div className={Styles.CaseStudiesHero}>
        <div
          className={Styles.CaseStudiesHero__Container}
          style={{ height: displayHeight }}
        >
          <div className={Styles.CaseStudiesHero__Featured}>
            <div className={Styles.CaseStudiesHero__Featured__Image}>
              <Image
                className={Styles.CaseStudiesHero__Featured__Image__Image}
                src={featuredStudy.hero.url}
                alt={featuredStudy.title}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            <div className={Styles.CaseStudiesHero__Featured__Overlay}>
              <h2 className={Styles.CaseStudiesHero__Featured__Overlay__Title}>
                {featuredStudy.title}
              </h2>
              <div className="light-divider" />
              <p className={Styles.CaseStudiesHero__Featured__Overlay__Intro}>
                {featuredStudy.introduction}
              </p>
              <SectorLabel data={featuredStudy.studySectors} />
            </div>
          </div>
          <div className={Styles.CaseStudiesHero__OtherStudies}>
            {otherStudies.map((study) => (
              <div
                key={study.id}
                className={Styles.CaseStudiesHero__OtherStudy}
              >
                <div className={Styles.CaseStudiesHero__OtherStudy__Image}>
                  <Image
                    className={Styles.CaseStudiesHero__OtherStudy__Image__Image}
                    src={study.hero.url}
                    alt={study.title}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
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
            ))}
          </div>
        </div>
      </div>
    );
  }
}
