import Styles from './Blocks.module.css';

export default function BrandsBlock({
  brands = [
    {
      link: 'solar/brands/tesla',
      image: '/brands/solar/Tesla.png',
      heroImage: '/images/solar/Tesla-Hero.webp',
      alt: 'Tesla',
      name: 'Tesla',
    },
    {
      link: 'solar/brands/ecoflow',
      image: '/brands/solar/EcoFlow.png',
      heroImage: '/images/solar/EcoFlow-Hero.webp',
      alt: 'Tesla',
      name: 'Tesla',
    },
  ],
}) {
  return (
    <div className={Styles.BrandsBlock}>
      <div className={Styles.BrandsBlock_Container}>
        <h2>Explore Different Brands</h2>
        <div className={Styles.BrandsBlock_Container_Brands}>
          {brands.map((brand, index) => (
            <a href={brand.link} key={index}>
              <img src={brand.image} alt={brand.alt} />
              <h3>{brand.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
