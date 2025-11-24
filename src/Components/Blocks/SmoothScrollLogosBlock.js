'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Styles from './Blocks.module.css';
import 'swiper/css';

export default function SmoothScrollLogosBlock({
  margin = '80px 0',
  brands = [
    { brand: 'Aiko', image: 'solar/Aiko.png' },
    { brand: 'Clenergy', image: 'solar/Clenergy.png' },
    { brand: 'Duracell', image: 'solar/Duracell.png' },
    { brand: 'EcoFlow', image: 'solar/Ecoflow.png' },
    { brand: 'Enphase', image: 'solar/Enphase.png' },
    { brand: 'Fastensol', image: 'solar/Fastensol.png' },
    { brand: 'Fox', image: 'solar/Fox.png' },
    { brand: 'Fusebox', image: 'solar/Fusebox.png' },
    { brand: 'GivEnergy', image: 'solar/GivEnergy.png' },
    { brand: 'Jinko', image: 'solar/Jinko.png' },
    { brand: 'MyEnergi', image: 'solar/MyEnergi.png' },
    { brand: 'Sigenergy', image: 'solar/Sigenergy.png' },
    { brand: 'Solax', image: 'solar/Solax.png' },
    { brand: 'Solis', image: 'solar/Solis.png' },
    { brand: 'Tesla', image: 'solar/Tesla.png' },
    { brand: 'Tigo', image: 'solar/Tigo.png' },
    { brand: 'Trina', image: 'solar/Trina.png' },
  ],
}) {
  return (
    <div
      className={Styles.SmoothScrollLogosBlock}
      style={{ margin: `${margin}` }}
    >
      <Swiper
        className={Styles.SmoothScrollLogosBlock__Swiper}
        loop
        speed={6000}
        freeMode
        modules={[Autoplay]}
        slidesPerView="3"
        a11y={false}
        spaceBetween={40}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 7,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 50,
          },
        }}
      >
        {brands.map((brand, i) => (
          <SwiperSlide key={i}>
            <img
              className={Styles.SmoothScrollLogosBlock_Brand}
              src={`/brands/${brand.image}`}
              alt={brand.brand}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
