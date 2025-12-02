import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import Styles from './FrameBlocks.module.css';

export default function ImageTextBlock({ data }) {
  // Layout logic
  const isTextLeft = data.textLeft !== false;

  return (
    <div className={Styles.ImageTextBlock}>
      <div className={Styles.ImageTextBlock__Container}>
        {/* IMAGE */}
        <div
          className={Styles.ImageTextBlock__Image}
          style={{ order: isTextLeft ? 2 : 1 }}
        >
          {data.imageUrl && (
            <Image
              src={data.imageUrl}
              alt={data.imageAlt || 'Power & Control'}
              fill
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

          {/* FIX: Use 'data.content' instead of 'data.text' */}
          {data.content && (
            <div className={Styles.ImageTextBlock__Text_P}>
              <PortableText value={data.content} />
            </div>
          )}

          {/* Button Logic (if you added 'moreInfo' to schema) */}
          {data.moreInfo && (
            <div style={{ marginTop: '20px' }}>
              <button type="button" className="primary-btn">
                {data.moreInfo}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
