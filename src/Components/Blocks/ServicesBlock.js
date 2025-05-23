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
  title,
}) {
  return (
    <div className={styles.ServicesBlock}>
      {title && <h2>{title}</h2>}
      <div className={styles.ServicesBlock_Container}>
        {services.map((service, index) => (
          <Link
            href={service.link}
            key={index}
            style={{ position: 'relative' }}
          >
            <div key={index} className={styles.ServicesBlock_Service}>
              <div className={styles.ServicesBlock_Service_Image}>
                {service.image && (
                  <Image
                    src={`/images/${service.image}`}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                )}
              </div>
              <div className={styles.ServicesBlock_Service_Content}>
                <h2>{service.title}</h2>
                <p
                  style={{
                    textAlign: 'left',
                    paddingRight: '160px',
                    paddingTop: '10px',
                  }}
                >
                  {service.description}
                </p>
              </div>
              {service.charger && (
                <div className={styles.ServicesBlock_Service_Content_Charger}>
                  {console.log(service.charger)}
                  <Image
                    src={`/images/chargers/${service.charger}`}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
