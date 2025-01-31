import Image from 'next/image';
import Styles from './Hero.module.css';

export default function ImageHero({
  height = '70vh',
  title = 'Title',
  subtitle,
  src = '/ph.webp',
  alt = 'Hero Image',
}) {
  return (
    <div className={Styles.ImageHero} style={{ height: `${height}` }}>
      <div className={Styles.ImageHero_Container}>
        <Image
          priority
          src={src}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={Styles.ImageHero_Overlay}>
        <div className={Styles.ImageHero_Overlay_Container}>
          <div className={Styles.ImageHero_Overlay_Container_Content}>
            <h1 className={Styles.ImageHero_Overlay_Container_Content_Title}>
              {title}
            </h1>
            {subtitle && (
              <h4
                className={Styles.ImageHero_Overlay_Container_Content_Subtitle}
              >
                {subtitle}
              </h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
