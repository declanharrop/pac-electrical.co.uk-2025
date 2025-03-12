'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Pagination,
  EffectCoverflow,
  Navigation,
  Autoplay,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

import Image from 'next/image';
import styles from './Blocks.module.css';

export default function SliderBlock({
  images = [
    {
      url: '/images/page-images/renewables/domestic-solar-pv-installation/domsolar.jpg',
    },
    { url: '/images/page-images/renewables/Solar7.jpg' },
    { url: '/images/page-images/renewables/solar2.webp' },
    {
      url: '/images/page-images/renewables/domestic-solar-pv-installation/domsolar1.jpg',
    },
    { url: '/images/page-images/renewables/Solar9.jpg' },
    { url: '/images/page-images/renewables/Solar 8.jpg' },
    {
      url: '/images/page-images/renewables/domestic-solar-pv-installation/domsolar2.jpg',
    },
    { url: '/images/page-images/renewables/solar1.webp' },
    {
      url: '/images/page-images/renewables/domestic-solar-pv-installation/domsolar3.jpg',
    },
  ],
}) {
  return (
    <div className={styles.SliderBlock}>
      <Swiper
        effect="coverflow"
        grabCursor
        loop
        centeredSlides
        slidesPerView="auto"
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 1,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination
        navigation
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className={styles.SwiperWrapper}
      >
        {images.map((slide, i) => (
          <SwiperSlide key={i} className={styles.SwiperSlide}>
            <div
              style={{ height: '500px', width: '100%', position: 'relative' }}
            >
              <Image
                src={slide.url}
                alt=""
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
