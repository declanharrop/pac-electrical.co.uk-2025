'use client';

import { useQuery } from '@apollo/client';
import Image from 'next/image';
import Link from 'next/link';
import { LATEST_SECTOR_STUDIES_QUERY } from '@/lib/DataQueries';
import Styles from './Blocks.module.css';
import SectorLabel from '@/Utils/SectorLabel';

export default function LatestStudiesBlock({
  title = 'solar',
  query = 'solar',
  link = '/case-studies/solar',
}) {
  const { data } = useQuery(LATEST_SECTOR_STUDIES_QUERY, {
    variables: { sector: query },
  });
  if (data) {
    return (
      <div className={Styles.LatestStudiesBlock}>
        <h2>Our Latest {title} Work</h2>
        <div className={Styles.LatestStudiesBlock__grid}>
          {data.caseStudies.map((study) => (
            <div
              key={study.id}
              className={Styles.LatestStudiesBlock__grid__item}
            >
              <div className={Styles.LatestStudiesBlock__grid__item__image}>
                <Image
                  src={study.hero.url}
                  alt={study.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={Styles.LatestStudiesBlock__grid__item__content}>
                <div
                  className={
                    Styles.LatestStudiesBlock__grid__item__content__title
                  }
                >
                  <h4>{study.title}</h4>
                </div>
                <div className="dark-divider" />
                <SectorLabel data={study.studySectors} />
                <p>{study.introduction}</p>
              </div>
            </div>
          ))}
        </div>
        <Link href={link}>
          <button type="button">See More</button>
        </Link>
      </div>
    );
  }
}
