import Image from 'next/image';
import Styles from './FrameBlocks.module.css';

export default function ImageTextBlock({ data }) {
  return (
    <div className={Styles.ImageTextBlock}>
      <div className={Styles.ImageTextBlock__Container}>
        <div className={Styles.ImageTextBlock__Image}>
          <Image
            src={data.image.url}
            alt="Power & Control Ltd - Working with you to deliver the best"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className={Styles.ImageTextBlock__Text}>
          {data.text.map((text, index) => (
            <p className={Styles.ImageTextBlock__Text_P} key={index}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
