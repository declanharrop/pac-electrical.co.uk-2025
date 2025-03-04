import Image from 'next/image';
import Styles from './Blocks.module.css';

export default function BrandsBlock({
  brands = [
    {
      link: 'solar/brands/tesla',
      image: '/images/solar/tesla.svg',
      heroImage: '/images/solar/Tesla-Hero.webp',
      alt: 'Tesla',
      name: 'Tesla',
    },
    {
      link: 'solar/brands/ecoflow',
      image: '/images/solar/ecoflow.svg',
      heroImage: '/images/solar/EcoFlow-Hero.webp',
      alt: 'Tesla',
      name: 'Tesla',
    },
  ],
}) {
  return (
    <div className={Styles.BrandsBlock}>
      <div className={Styles.BrandsBlock_Container}>
        <h2>Explore Solar Brands</h2>
        <div className={Styles.BrandsBlock_Container_Brands}>
          {brands.map((brand, index) => (
            <div className={Styles.BrandsBlock_Brand}>
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
                    <Image src={brand.image} alt={brand.alt} fill />
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
