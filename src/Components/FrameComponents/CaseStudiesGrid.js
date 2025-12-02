import Image from 'next/image';
import Link from 'next/link';
import styles from './FrameComponents.module.css';
import SectorLabel from '@/Utils/SectorLabel';

export default function CaseStudiesGrid({ title, data }) {
  // If we have fewer than 4 items, there is nothing left for the grid
  // (Items 0-3 are in the Hero)
  if (!data || data.length <= 4) return null;

  const studies = data.slice(4);

  return (
    <div className={styles.CaseStudiesGrid}>
      <h2>Previous {title}</h2>
      <div className={styles.CaseStudiesGrid_Container}>
        {studies.map((study) => (
          <Link
            href={`/case-studies/study/${study.slug}`}
            key={study.id || study._id}
          >
            <div className={styles.CaseStudiesGrid_Study}>
              {/* Image Section */}
              <div className={styles.CaseStudiesGrid_Study_Image}>
                <Image
                  src={study.hero.url}
                  alt={study.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 800px) 100vw, 33vw"
                />
              </div>

              {/* Content Section */}
              <div className={styles.CaseStudiesGrid_Study_Content}>
                <h4 className={styles.CaseStudiesGrid_Study_Content_Title}>
                  {study.title}
                </h4>
                <div className="dark-divider" />
                <SectorLabel data={study.studySectors} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
