import Image from 'next/image';
import styles from './Blocks.module.css';

export default function TextWithImageBlock({ isImageLeft = true }) {
  return (
    <section className={styles.TextWithImageBlock}>
      <div
        className={
          isImageLeft
            ? styles.TextWithImageBlock__left
            : styles.TextWithImageBlock__right
        }
      >
        <Image
          src="/images/solar/pac-sol-1.webp"
          fill
          alt="Solar Image"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div
        className={
          isImageLeft
            ? styles.TextWithImageBlock__right
            : styles.TextWithImageBlock__left
        }
      >
        <h2 style={{ marginBottom: '30px' }}>
          Save on your energy bills today
        </h2>
        <p>
          Harnessing the power of renewable energy sources, both for domestic
          and commercial purposes, offers a cost-effective solution due to their
          infinite supply. By generating your own energy, you reduce your
          dependence on the National Grid and its fluctuating electricity
          prices, ultimately leading to lower energy bills.
        </p>
      </div>
    </section>
  );
}
