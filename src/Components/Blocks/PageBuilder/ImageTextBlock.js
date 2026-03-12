import Image from 'next/image';
import Link from 'next/link'; // SEO UPGRADE: Imported Link
import { PortableText } from '@portabletext/react';
import Styles from './FrameBlocks.module.css';

export default function ImageTextBlock({ data }) {
  // Layout logic
  const isTextLeft = data.textLeft !== false;

  return (
    // SEO UPGRADE: Changed div to section
    <section className={Styles.ImageTextBlock}>
      <div className={Styles.ImageTextBlock__Container}>
        {/* IMAGE */}
        <div
          className={Styles.ImageTextBlock__Image}
          style={{ order: isTextLeft ? 2 : 1 }}
        >
          {data.imageUrl && (
            <Image
              src={data.imageUrl}
              alt={
                data.imageAlt ||
                'Solar and Electrical Installation - Power & Control'
              }
              fill
              // SEO UPGRADE: Added sizes for better mobile performance (LCP)
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'contain' }}
            />
          )}
        </div>

        {/* TEXT */}
        <div
          className={Styles.ImageTextBlock__Text}
          style={{ order: isTextLeft ? 1 : 2 }}
        >
          {data.title && (
            <h2 className={Styles.ImageTextBlock__Text_H2}>{data.title}</h2>
          )}

          {data.content && (
            <div className={Styles.ImageTextBlock__Text_P}>
              <PortableText value={data.content} />
            </div>
          )}

          {/* SEO UPGRADE: Changed button to Link so Google can crawl your site */}
          {data.moreInfo && data.link && (
            <div style={{ marginTop: '20px' }}>
              <Link
                href={data.link}
                className="primary-btn"
                style={{ textDecoration: 'none' }}
              >
                {data.moreInfo}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
