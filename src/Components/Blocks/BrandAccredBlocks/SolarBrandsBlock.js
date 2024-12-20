import Image from 'next/image';
import Styles from './BrandAccredBlocks.module.css';

const brands = [
  { image: 'Aiko.png', alt: ' Logo' },
  { image: 'Clenergy.png', alt: ' Logo' },
  { image: 'Duracell.png', alt: ' Logo' },
  { image: 'EcoFlow.png', alt: ' Logo' },
  { image: 'Enphase.png', alt: ' Logo' },
  { image: 'Fastensol.png', alt: ' Logo' },
  { image: 'Fox.png', alt: ' Logo' },
  { image: 'Fusebox.png', alt: ' Logo' },
  { image: 'GivEnergy.png', alt: ' Logo' },
  { image: 'Jinko.png', alt: ' Logo' },
  { image: 'MyEnergi.png', alt: ' Logo' },
  { image: 'Sigenergy.png', alt: ' Logo' },
  { image: 'Solax.png', alt: ' Logo' },
  { image: 'Solis.png', alt: ' Logo' },
  { image: 'Tesla.png', alt: 'Tesla Logo' },
  { image: 'Tigo.png', alt: 'Tigo Logo' },
  { image: 'Trina.png', alt: 'Trina Logo' },
];
export default function SolarBrandsBlock() {
  return (
    <div className={Styles.BrandsBlock}>
      <h5 style={{ margin: '0 0 10px' }}>Solar brands we love to install</h5>
      <div className={Styles.BrandsBlock_Container}>
        {brands.map((brand, index) => (
          <div className={Styles.BrandsBlock_Brand} key={index}>
            <Image
              width="70"
              height="70"
              src={`/brands/solar/${brand.image}`}
              alt={brand.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
