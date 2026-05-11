import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { client } from '@/sanity/client';
import { LATEST_CASE_STUDIES_QUERY } from '@/sanity/queries';
import SectorLabel from '@/Utils/SectorLabel';
import styles from '../Styles/LatestProjects.module.css';

export default async function LatestProjects() {
  const data = await client.fetch(LATEST_CASE_STUDIES_QUERY);
  if (!data || data.length === 0) return null;

  const [featured, ...rest] = data.slice(0, 3);
  const secondary = rest.slice(0, 2);

  return (
    <section className={styles.Wrapper}>
      <div className={styles.Container}>

        <div className={styles.Header}>
          <div>
            <span className={styles.Eyebrow}>Case Studies</span>
            <h2 className={styles.Title}>
              OUR LATEST <span>PROJECTS</span>
            </h2>
          </div>
          <Link href="/case-studies" className={styles.ViewAll}>
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.Grid}>
          <Link
            href={`/case-studies/study/${featured.slug}`}
            className={`${styles.Card} ${styles.CardFeatured}`}
          >
            <div className={styles.ImageWrap}>
              {featured.hero?.url && (
                <Image
                  src={featured.hero.url}
                  alt={featured.title}
                  fill
                  className={styles.Image}
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority
                />
              )}
            </div>
            <div className={styles.Content}>
              <SectorLabel data={featured.studySectors} />
              <h3 className={styles.CardTitle}>{featured.title}</h3>
              {featured.introduction && (
                <p className={styles.CardText}>{featured.introduction}</p>
              )}
              <span className={styles.CardCTA}>
                View Project <ArrowRight size={14} />
              </span>
            </div>
          </Link>

          <div className={styles.RightCol}>
            {secondary.map((study) => (
              <Link
                key={study._id}
                href={`/case-studies/study/${study.slug}`}
                className={styles.Card}
              >
                <div className={styles.ImageWrapSmall}>
                  {study.hero?.url && (
                    <Image
                      src={study.hero.url}
                      alt={study.title}
                      fill
                      className={styles.Image}
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  )}
                </div>
                <div className={styles.Content}>
                  <SectorLabel data={study.studySectors} />
                  <h3 className={styles.CardTitle}>{study.title}</h3>
                  {study.introduction && (
                    <p className={styles.CardText}>{study.introduction}</p>
                  )}
                  <span className={styles.CardCTA}>
                    View Project <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
