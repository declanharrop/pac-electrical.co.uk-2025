import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/client'; // Main Client
import { LATEST_CASE_STUDIES_QUERY } from '@/sanity/queries';
import Styles from './CaseStudiesBlock.module.css';
import SectorLabel from '@/Utils/SectorLabel';

export default async function CaseStudiesBlock() {
  const data = await client.fetch(LATEST_CASE_STUDIES_QUERY);

  if (!data || data.length === 0) return null;

  // Filter Logic with Safety Checks (Prevents crash on undefined sectors)
  const commercialStudies = data.filter((study) =>
    study.studySectors?.some((s) => s && s.toLowerCase() === 'commercial'),
  );

  const domesticStudies = data.filter((study) =>
    study.studySectors?.some((s) => s && s.toLowerCase() === 'domestic'),
  );

  const commercial = commercialStudies.slice(0, 1);
  const commercialLower = commercialStudies.slice(1, 3);

  const domestic = domesticStudies.slice(0, 1);
  const domesticLower = domesticStudies.slice(1, 3);

  return (
    <div className={Styles.CaseStudiesBlock}>
      <div className={Styles.CaseStudiesBlock_Container}>
        <div className={Styles.CaseStudiesBlock_Container_Title}>
          <h2>Our Latest Projects</h2>
        </div>
        <div className={Styles.CaseStudiesBlock_Container_Grid}>
          {/* COMMERCIAL SECTION - Only render if we have items */}
          {commercial.length > 0 && (
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
                    key={study._id}
                  >
                    <div className={Styles.CaseStudiesBlock_Study}>
                      <div className={Styles.CaseStudiesBlock_Study_Image}>
                        {study.hero?.url && (
                          <Image
                            src={study.hero.url}
                            alt={study.title}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        )}
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
                      key={study._id}
                    >
                      <div className={Styles.CaseStudiesBlock_Study}>
                        <div className={Styles.CaseStudiesBlock_Study_Image}>
                          {study.hero?.url && (
                            <Image
                              src={study.hero.url}
                              alt={study.title}
                              fill
                              style={{ objectFit: 'cover' }}
                            />
                          )}
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
          )}

          {/* DOMESTIC SECTION - Only render if we have items */}
          {domestic.length > 0 && (
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
                    key={study._id}
                  >
                    <div className={Styles.CaseStudiesBlock_Study}>
                      <div className={Styles.CaseStudiesBlock_Study_Image}>
                        {study.hero?.url && (
                          <Image
                            src={study.hero.url}
                            alt={study.title}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        )}
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
                      key={study._id}
                    >
                      <div className={Styles.CaseStudiesBlock_Study}>
                        <div className={Styles.CaseStudiesBlock_Study_Image}>
                          {study.hero?.url && (
                            <Image
                              src={study.hero.url}
                              alt={study.title}
                              fill
                              style={{ objectFit: 'cover' }}
                            />
                          )}
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
          )}
        </div>
      </div>
    </div>
  );
}
