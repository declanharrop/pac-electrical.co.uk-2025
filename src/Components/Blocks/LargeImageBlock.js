import Image from 'next/image';
import Link from 'next/link';
import Styles from './Blocks.module.css';

export default function LargeImageBlock({
  src = 'solar/pac-sol-2.webp',
  title = 'Why Choose Power & Control for your solar installation?',
  text = 'Power and Control are an MCS certified business, meaning we are fully qualified to install solar PV systems on both domestic and commercial properties. MCS certification demonstrates the quality of products and competence of installers in the renewable technology sector.',
}) {
  return (
    <div className={Styles.LargeImageBlock}>
      <div className={Styles.LargeImageBlock__image}>
        <Image
          src={`/images/${src}`}
          alt="Large Image"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={Styles.LargeImageBlock__overlay}>
        <div className={Styles.LargeImageBlock__overlay__container}>
          <h2>{title}</h2>
          <p>{text}</p>
          <Link href="/get-a-quote">
            <button type="button">Start Your Journey Today</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
