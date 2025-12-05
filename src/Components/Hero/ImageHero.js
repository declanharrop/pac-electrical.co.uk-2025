import Image from 'next/image';
import Styles from './Hero.module.css';

export default function ImageHero({
  height = '70vh',
  title = '',
  subtitle = '',
  src = '/images/solar/Tesla-Hero.webp', // Default fallback
  alt = 'Power and Control Hero',
}) {
  return (
    <div className={Styles.HeroWrapper} style={{ height }}>
      {/* Background Image */}
      <div className={Styles.ImageContainer}>
        <Image
          priority
          src={src}
          alt={alt}
          fill
          quality={90}
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Gradient Overlay & Content */}
      <div className={Styles.Overlay}>
        <div className={Styles.ContentWrapper}>
          {/* Main Title - Bright/White */}
          {title && <h1 className={Styles.Title}>{title}</h1>}

          {/* Subtitle - Faded/Grey */}
          {subtitle && <h4 className={Styles.Subtitle}>{subtitle}</h4>}
        </div>
      </div>
    </div>
  );
}
