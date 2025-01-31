import Image from 'next/image';
import styles from './FrameBlocks.module.css';

export default function BlockBlock({ data }) {
  return (
    <div className={styles.BlockBlock}>
      <h2 className={styles.BlockBlock__Title}>{data.title}</h2>
      <div className={styles.BlockBlock__Container}>
        {data.contentBlock.map((block, index) => (
          <div key={index} className={styles.BlockBlock__Block}>
            {block.image && (
              <div className={styles.BlockBlock__Block__Image}>
                <Image src={block.image.url} alt={block.title} />
              </div>
            )}
            <h4 className={styles.BlockBlock__Block__Title}>{block.title}</h4>
            <div className="white-divider" />
            {block.text.map((text, i) => (
              <p key={i} className={styles.BlockBlock__Block__Text}>
                {text}
              </p>
            ))}
            <div className={styles.BlockBlock__Block__Content}>
              {block.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
