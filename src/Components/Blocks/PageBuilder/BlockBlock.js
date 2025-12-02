import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import styles from './FrameBlocks.module.css';

export default function BlockBlock({ data }) {
  return (
    <div className={styles.BlockBlock}>
      <h2 className={styles.BlockBlock__Title}>{data.title}</h2>

      <div className={styles.BlockBlock__Container}>
        {(data.contentBlocks || []).map((block) => (
          <div key={block._key} className={styles.BlockBlock__Block}>
            {/* Block Image */}
            {block.image?.asset && (
              <div className={styles.BlockBlock__Block__Image}>
                {/* Note: You might need to fetch the image URL in the query 
                    or use urlFor() here if it wasn't pre-fetched */}
                {/* Assuming query fetched it as 'imageUrl' inside the array */}
                <Image
                  src={block.imageUrl || '/images/placeholder.jpg'}
                  alt={block.title}
                  width={60}
                  height={60} // Fixed icon size usually better for cards
                />
              </div>
            )}

            <h4 className={styles.BlockBlock__Block__Title}>{block.title}</h4>
            <div className="white-divider" />

            {/* Block Text */}
            <div className={styles.BlockBlock__Block__Text}>
              {/* Simple text or Portable Text depending on schema */}
              {typeof block.text === 'string' ? (
                <p>{block.text}</p>
              ) : (
                <PortableText value={block.text} />
              )}
            </div>

            {/* Optional Content/Button */}
            {block.moreInfo && (
              <div className={styles.BlockBlock__Block__Content}>
                {/* Link logic here */}
                {block.moreInfo}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
