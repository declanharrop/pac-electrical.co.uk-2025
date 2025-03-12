import Image from 'next/image';
import Link from 'next/link';
import styles from './FrameComponents.module.css';
import SectorLabel from '@/Utils/SectorLabel';

export default function CaseStudiesGrid({ title, data }) {
  const studies = data?.slice(4);

  return (
    <div className={styles.CaseStudiesGrid}>
      <h2>Previous {title}</h2>
      <div className={styles.CaseStudiesGrid_Container}>
        {studies.map((study) => (
          <Link href={`/case-studies/study/${study.slug}`} key={study.id}>
            <div key={study.id} className={styles.CaseStudiesGrid_Study}>
              <div
                className={styles.CaseStudiesGrid_Study_Image}
                style={{
                  backgroundImage: `url(${study.hero.url})`,
                }}
              >
                <Image
                  src={study.hero.url}
                  alt={study.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.CaseStudiesGrid_Study_Overlay}>
                <div className={styles.CaseStudiesGrid_Study_Content}>
                  <h4 className={styles.CaseStudiesGrid_Study_Content_Title}>
                    {study.title}
                  </h4>
                  <SectorLabel data={study.studySectors} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
