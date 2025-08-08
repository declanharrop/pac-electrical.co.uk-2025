import Image from 'next/image';
import Styles from './Blocks.module.css';

export default function BrandsBlock({
  title = 'Explore Solar Brands',
  brands = [
    {
      link: '/solar/brands/tesla',
      image: '/images/solar/tesla.svg',
      heroImage: '/images/solar/Tesla-Hero.webp',
      alt: 'Tesla',
      name: 'Tesla',
    },
    {
      link: '/solar/brands/sigenergy',
      image: '/images/solar/sigenergy.svg',
      heroImage: '/images/solar/Sig-Hero.webp',
      alt: 'Sigenergy',
      name: 'Sigenergy',
    },
    {
      link: '/solar/brands/ecoflow',
      image: '/images/solar/ecoflow.svg',
      heroImage: '/images/solar/EcoFlow-Hero.webp',
      alt: 'Tesla',
      name: 'Tesla',
    },
    // {
    //   link: '/solar/brands/fox',
    //   image: '/images/solar/fox.png',
    //   heroImage: '/images/solar/Fox-Hero.webp',
    //   alt: 'Fox Solar',
    //   name: 'Fox',
    // },
  ],
}) {
  return (
    <div className={Styles.BrandsBlock}>
      <div className={Styles.BrandsBlock_Container}>
        <h2>{title}</h2>
        <div className={Styles.BrandsBlock_Container_Brands}>
          {brands.map((brand, index) => (
            <div className={Styles.BrandsBlock_Brand} key={index}>
              <Image
                src={brand.heroImage}
                alt={brand.alt}
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className={Styles.BrandsBlock_Brand_Overlay}>
                <div className={Styles.BrandsBlock_Brand_Overlay_Content}>
                  <div
                    className={Styles.BrandsBlock_Brand_Overlay_Content_Logo}
                  >
                    {brand.image && (
                      <Image src={brand.image} alt={brand.alt} fill />
                    )}
                    {!brand.image && (
                      <h2
                        style={{
                          color: 'var(--black)',
                          fontSize: '2rem',
                          fontWeight: '600',
                          textWrap: 'nowrap',
                          paddingTop: '12px',
                        }}
                      >
                        {brand.name}
                      </h2>
                    )}
                  </div>
                  <div>
                    <a href={brand.link} key={index}>
                      <button type="button">Learn More</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
