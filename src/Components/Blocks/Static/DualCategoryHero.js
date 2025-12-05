import Link from 'next/link';
import Image from 'next/image';
import Styles from './DualCategoryHero.module.css';

export default function DualCategoryHero({
  items = [
    {
      link: '/solar/domestic',
      image: '/images/solar/pac-sol-2.webp', // Replace with your actual image paths
      alt: 'Domestic Solar Installation on roof',
      title: 'Domestic',
    },
    {
      link: '/solar/commercial',
      image: '/images/solar/comsol1.webp',
      alt: 'Commercial Solar Panel Flat Roof',
      title: 'Commercial',
    },
  ],
}) {
  return (
    <section className={Styles.Section}>
      <div className={Styles.Container}>
        {items.map((item, index) => (
          <Link href={item.link} key={index} className={Styles.Card}>
            {/* Background Image - Priority true because this is above the fold */}
            <div className={Styles.ImageWrapper}>
              <Image
                src={item.image}
                alt={item.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                className={Styles.Image}
              />
            </div>

            {/* Content Overlay */}
            <div className={Styles.Overlay}>
              <div className={Styles.Content}>
                <h2 className={Styles.Title}>{item.title}</h2>
                <span className={Styles.FakeButton}>Learn More</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
