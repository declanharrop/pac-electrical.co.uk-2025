'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Must import Autoplay module
import styles from './BrandsScroller.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

export default function BrandsScroller({
  brands = [
    { brand: 'Aiko', image: 'solar/Aiko.png' },
    { brand: 'Tesla', image: 'solar/Tesla.png' },
    { brand: 'EcoFlow', image: 'solar/Ecoflow.png' },
    { brand: 'Enphase', image: 'solar/Enphase.png' },
    { brand: 'Fox', image: 'solar/Fox.png' },
    { brand: 'Sigenergy', image: 'solar/Sigenergy.png' },
    { brand: 'Clenergy', image: 'solar/Clenergy.png' },
    { brand: 'GivEnergy', image: 'solar/GivEnergy.png' },
    { brand: 'Duracell', image: 'solar/Duracell.png' },
    { brand: 'Fastensol', image: 'solar/Fastensol.png' },
    { brand: 'Fusebox', image: 'solar/Fusebox.png' },
    { brand: 'Jinko', image: 'solar/Jinko.png' },
    { brand: 'MyEnergi', image: 'solar/MyEnergi.png' },
    { brand: 'Solax', image: 'solar/Solax.png' },
    { brand: 'Solis', image: 'solar/Solis.png' },
    { brand: 'Tigo', image: 'solar/Tigo.png' },
    { brand: 'Trina', image: 'solar/Trina.png' },
  ],
}) {
  return (
    <div className={styles.scrollerBlock}>
      <Swiper
        modules={[Autoplay]} // CRITICAL: Register the module
        loop
        speed={4000}
        freeMode
        slidesPerView={3}
        spaceBetween={40}
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 3, spaceBetween: 20 },
          640: { slidesPerView: 4, spaceBetween: 30 },
          1024: { slidesPerView: 6, spaceBetween: 50 },
        }}
      >
        {brands.map((brand, i) => (
          <SwiperSlide key={i}>
            {/* Check path: Ensure images exist in /public/brands/solar/ */}
            <img
              className={styles.brandImage}
              src={`/brands/${brand.image}`}
              alt={brand.brand}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
