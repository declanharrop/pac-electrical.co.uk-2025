import Image from 'next/image';
import Link from 'next/link';
import styles from './Blocks.module.css';

export default function ServicesBlock({
  services = [
    {
      image: 'electrical/commercial.webp',
      title: 'Commercial Electrical',
      description: '',
      link: '/electrical/commercial',
    },
    {
      image: 'electrical/domestic.webp',
      title: 'Large Domestic',
      description: '',
      link: '/electrical/domestic',
    },
    {
      image: 'electrical/led.webp',
      title: 'LED Lighting Systems',
      link: '/electrical/led',
    },
    // {
    //   image: 'electrical/inf.webp',
    //   title: 'Infrared Heating Systems',
    //   link: '/electrical/infrared',
    // },
    {
      image: 'electrical/data.webp',
      title: 'Data Communications',
      link: '/electrical/data',
    },
    {
      image: 'electrical/testing.webp',
      title: 'Testing & Inspections',
      link: '/electrical/testing',
    },
    {
      image: 'electrical/faultfinding.webp',
      title: 'Fault Finding & Maintenance',
      link: '/electrical/fault',
    },
  ],
}) {
  return (
    <div className={styles.ServicesBlock}>
      <div className={styles.ServicesBlock_Container}>
        {services.map((service, index) => (
          <Link
            href={service.link}
            key={index}
            style={{ position: 'relative' }}
          >
            <div key={index} className={styles.ServicesBlock_Service}>
              <div className={styles.ServicesBlock_Service_Image}>
                <Image
                  src={`/images/${service.image}`}
                  alt={service.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.ServicesBlock_Service_Content}>
                <h2>{service.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
