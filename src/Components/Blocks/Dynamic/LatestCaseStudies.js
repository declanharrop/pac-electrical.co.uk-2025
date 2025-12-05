import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/client';
import styles from './LatestCaseStudies.module.css';

const getLatestStudies = async (tags) => {
  const query = `
    *[_type == "caseStudy" && count((sectors[]->title)[@ in $tags]) == count($tags)] | order(releaseDate desc)[0...2] {
      title,
      "slug": slug.current,
      "imageUrl": heroImage.asset->url,
      "alt": coalesce(heroImage.alt, title),
      introduction,
      "sectorNames": coalesce(sectors[]->title, [])
    }
  `;

  const data = await client.fetch(query, { tags });

  // 🟢 SAFETY FIX: Convert to plain JSON to remove 'circular' Sanity references
  // This prevents the "Circular Structure" error without breaking the app
  return JSON.parse(JSON.stringify(data));
};

// 🔴 IMPORTANT: This is an Async Server Component.
// Do NOT add 'use client' to the top of this file.
export default async function LatestCaseStudies({
  title = 'Domestic Solar',
  tags = ['Solar', 'Domestic'],
  link = '/case-studies/solar',
}) {
  const studies = await getLatestStudies(tags);

  if (!studies || studies.length === 0) return null;

  return (
    <section className={styles.Section}>
      <div className={styles.Header}>
        <h2 className={styles.Heading}>Our Latest {title} Work</h2>
      </div>

      <div className={styles.Grid}>
        {studies.map((study, index) => (
          <Link
            href={`/case-studies/study/${study.slug}`}
            key={index}
            className={styles.Card}
          >
            <div className={styles.ImageWrapper}>
              {study.imageUrl && (
                <Image
                  src={study.imageUrl}
                  alt={study.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  className={styles.Image}
                />
              )}
            </div>

            <div className={styles.Content}>
              <h3 className={styles.CardTitle}>{study.title}</h3>
              <div className={styles.Divider} />

              <div className={styles.TagContainer}>
                {study.sectorNames.map((tagName, i) => (
                  <span
                    key={i}
                    className={`${styles.Tag} ${
                      tagName.toLowerCase() === 'commercial'
                        ? styles.TagCommercial
                        : styles.TagDefault
                    }`}
                  >
                    {tagName}
                  </span>
                ))}
              </div>

              <p className={styles.Description}>{study.introduction}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.Footer}>
        <Link href={link}>
          <span className={styles.Button}>See More</span>
        </Link>
      </div>
    </section>
  );
}
