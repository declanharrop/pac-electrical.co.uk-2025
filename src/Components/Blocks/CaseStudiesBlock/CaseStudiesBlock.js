'use client';

import { useQuery } from '@apollo/client';
import Image from 'next/image';
import Link from 'next/link';
import { LATEST_STUDIES_QUERY } from '@/lib/DataQueries';
import Styles from './CaseStudiesBlock.module.css';
import SectorLabel from '@/Utils/SectorLabel';

export default function CaseStudiesBlock() {
  const { data } = useQuery(LATEST_STUDIES_QUERY);

  const commercialStudies = data?.caseStudies.filter((study) =>
    study.studySectors.includes('commercial'),
  );

  const commercial = commercialStudies?.slice(0, 1);
  const commercialLower = commercialStudies?.slice(1, 3);

  const domesticStudies = data?.caseStudies.filter((study) =>
    study.studySectors.includes('domestic'),
  );

  const domestic = domesticStudies?.slice(0, 1);

  const domesticLower = domesticStudies?.slice(1, 3);

  if (data) {
    return (
      <div className={Styles.CaseStudiesBlock}>
        <div className={Styles.CaseStudiesBlock_Container}>
          <div className={Styles.CaseStudiesBlock_Container_Title}>
            <h2>Our Latest Projects</h2>
          </div>
          <div className={Styles.CaseStudiesBlock_Container_Grid}>
            <div className={Styles.CaseStudiesBlock_Container_Grid_Section}>
              <h3
                className={Styles.CaseStudiesBlock_Container_Grid_Section_Title}
              >
                Commercial
              </h3>
              <div
                className={Styles.CaseStudiesBlock_Container_Grid_Section_Inner}
              >
                {commercial.map((study) => (
                  <Link
                    href={`/case-studies/study/${study.slug}`}
                    key={study.id}
                  >
                    <div className={Styles.CaseStudiesBlock_Study}>
                      <div className={Styles.CaseStudiesBlock_Study_Image}>
                        <Image
                          src={study.hero.url}
                          alt={study.title}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className={Styles.CaseStudiesBlock_Study_Content}>
                        <h5
                          className={
                            Styles.CaseStudiesBlock_Study_Content_Title
                          }
                        >
                          {study.title}
                        </h5>
                        <div className="dark-divider" />
                        <SectorLabel data={study.studySectors} />
                        <p
                          className={Styles.CaseStudiesBlock_Study_Content_Text}
                        >
                          {study.introduction}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
                <div
                  className={
                    Styles.CaseStudiesBlock_Container_Grid_Section_Inner_Lower
                  }
                >
                  {commercialLower.map((study) => (
                    <Link
                      href={`/case-studies/study/${study.slug}`}
                      key={study.id}
                    >
                      <div className={Styles.CaseStudiesBlock_Study}>
                        <div className={Styles.CaseStudiesBlock_Study_Image}>
                          <Image
                            src={study.hero.url}
                            alt={study.title}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                        <div className={Styles.CaseStudiesBlock_Study_Content}>
                          <h5
                            className={
                              Styles.CaseStudiesBlock_Study_Content_Title_Lower
                            }
                          >
                            {study.title}
                          </h5>
                          <div className="dark-divider" />
                          <SectorLabel data={study.studySectors} />
                          <p
                            className={
                              Styles.CaseStudiesBlock_Study_Content_Text
                            }
                          >
                            {study.introduction}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className={Styles.CaseStudiesBlock_Container_Grid_Section}>
              <h3
                className={Styles.CaseStudiesBlock_Container_Grid_Section_Title}
              >
                Domestic
              </h3>
              <div
                className={Styles.CaseStudiesBlock_Container_Grid_Section_Inner}
              >
                {domestic.map((study) => (
                  <Link
                    href={`/case-studies/study/${study.slug}`}
                    key={study.id}
                  >
                    <div className={Styles.CaseStudiesBlock_Study}>
                      <div className={Styles.CaseStudiesBlock_Study_Image}>
                        <Image
                          src={study.hero.url}
                          alt={study.title}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className={Styles.CaseStudiesBlock_Study_Content}>
                        <h5
                          className={
                            Styles.CaseStudiesBlock_Study_Content_Title
                          }
                        >
                          {study.title}
                        </h5>
                        <div className="dark-divider" />
                        <SectorLabel data={study.studySectors} />
                        <p
                          className={Styles.CaseStudiesBlock_Study_Content_Text}
                        >
                          {study.introduction}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
                <div
                  className={
                    Styles.CaseStudiesBlock_Container_Grid_Section_Inner_Lower
                  }
                >
                  {domesticLower.map((study) => (
                    <Link
                      href={`/case-studies/study/${study.slug}`}
                      key={study.id}
                    >
                      <div className={Styles.CaseStudiesBlock_Study}>
                        <div className={Styles.CaseStudiesBlock_Study_Image}>
                          <Image
                            src={study.hero.url}
                            alt={study.title}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                        <div className={Styles.CaseStudiesBlock_Study_Content}>
                          <h5
                            className={
                              Styles.CaseStudiesBlock_Study_Content_Title_Lower
                            }
                          >
                            {study.title}
                          </h5>
                          <div className="dark-divider" />
                          <SectorLabel data={study.studySectors} />
                          <p
                            className={
                              Styles.CaseStudiesBlock_Study_Content_Text
                            }
                          >
                            {study.introduction}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
