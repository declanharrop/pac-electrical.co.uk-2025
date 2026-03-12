import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import styles from './FrameBlocks.module.css';

export default function BlockBlock({ data }) {
  return (
    // SEO UPGRADE: Using <section> to define a thematic grouping of content
    <section className={styles.BlockBlock}>
      <h2 className={styles.BlockBlock__Title}>{data.title}</h2>

      <div className={styles.BlockBlock__Container}>
        {(data.contentBlocks || []).map((block) => (
          // SEO UPGRADE: Using <article> for self-contained, independent items
          <article key={block._key} className={styles.BlockBlock__Block}>
            {/* Block Image */}
            {block.image?.asset && (
              <div className={styles.BlockBlock__Block__Image}>
                <Image
                  src={block.imageUrl || '/images/placeholder.jpg'}
                  alt={block.title} // This is great: uses the block title as alt text!
                  width={60}
                  height={60}
                />
              </div>
            )}

            {/* SEO UPGRADE: Fixed the heading hierarchy from H4 to H3 */}
            <h3 className={styles.BlockBlock__Block__Title}>{block.title}</h3>

            <div className="white-divider" />

            {/* Block Text */}
            <div className={styles.BlockBlock__Block__Text}>
              {typeof block.text === 'string' ? (
                <p>{block.text}</p>
              ) : (
                <PortableText value={block.text} />
              )}
            </div>

            {/* Optional Content/Button */}
            {block.moreInfo && (
              <div className={styles.BlockBlock__Block__Content}>
                {/* SEO NOTE: Ensure whatever is passed into block.moreInfo 
                  renders as a standard <a href="..."> or Next.js <Link>, 
                  NOT an onClick <button>! 
                */}
                {block.moreInfo}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
