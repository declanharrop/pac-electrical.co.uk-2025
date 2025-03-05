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
      link: '',
    },
    {
      image: 'electrical/led.webp',
      title: 'LED Lighting Systems',
      link: '',
    },
    {
      image: '',
      title: 'Infrared Heating Systems',
      link: '',
    },
    {
      image: '',
      title: 'Testing & Inspections',
      link: '',
    },
    {
      image: '',
      title: 'Fault Finding & Maintenance',
      link: '',
    },
    {
      image: '',
      title: 'Data Communications',
      link: '',
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
