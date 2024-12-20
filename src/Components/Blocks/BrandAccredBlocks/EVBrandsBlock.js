import Image from 'next/image';
import Styles from './BrandAccredBlocks.module.css';

const brands = [
  { image: 'bg-syncev.png', alt: ' Logo' },
  { image: 'easee.png', alt: ' Logo' },
  { image: 'hypervolt.png', alt: ' Logo' },
  { image: 'myenergi.png', alt: ' Logo' },
  { image: 'ohme.png', alt: ' Logo' },
  { image: 'podpoint.png', alt: ' Logo' },
  { image: 'rolecev.png', alt: ' Logo' },
  { image: 'tesla.png', alt: ' Logo' },
  { image: 'wallbox.png', alt: ' Logo' },
];
export default function EVBrandsBlock({ margin = '0' }) {
  return (
    <div className={Styles.BrandsBlock} style={{ margin: `${margin}` }}>
      <h5 style={{ margin: '0 0 10px' }}>
        EV Charge Points we love to install
      </h5>
      <div className={Styles.BrandsBlock_Container}>
        {brands.map((brand, index) => (
          <div className={Styles.BrandsBlock_Brand} key={index}>
            <Image
              width="70"
              height="70"
              src={`/brands/ev/${brand.image}`}
              alt={brand.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
