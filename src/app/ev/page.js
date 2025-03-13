import ServicesBlock from '@/Components/Blocks/ServicesBlock';
import TextWithImageBlock from '@/Components/Blocks/TextWithImageBlock';
import VideoHero from '@/Components/Hero/VideoHero';

export default function EVPage() {
  return (
    <div>
      <VideoHero margin height="70vh">
        <h1>EV Charging</h1>
        <h3>POWERING YOUR NEXT ADVENTURE</h3>
      </VideoHero>
      <div style={{ marginTop: '100px' }} />
      <TextWithImageBlock
        image="/images/electrical/com1.webp"
        title="EV Charging Experts"
        text={[
          'With the increase in electric vehicles, many people are looking to install domestic or commercial EV chargers to their properties. All electric vehicles require an EV charger to charge their battery. Installing a charger at your home or workplace will mean owning an electric vehicle is effortless.',
          'At Power and Control, we specialise in domestic and commercial EV charger installations. We install a wide range of chargers.',
        ]}
      />
      <div style={{ marginTop: '100px' }} />
      <ServicesBlock
        title="Your EV Charge Point Options"
        services={[
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
        ]}
      />
    </div>
  );
}
