import BrandsBlock from '@/Components/Blocks/BrandsBlock';
import LargeImageBlock from '@/Components/Blocks/LargeImageBlock';
import LatestStudiesBlock from '@/Components/Blocks/LatestStudiesBlock';
import SmoothScrollLogosBlock from '@/Components/Blocks/SmoothScrollLogosBlock';
import TextWithImageBlock from '@/Components/Blocks/TextWithImageBlock';
import VideoBlock from '@/Components/Blocks/VideoBlock';
import VideoHero from '@/Components/Hero/VideoHero';

export default function SolarPage() {
  return (
    <div>
      <VideoHero margin height="70vh">
        <h1>Solar</h1>
        <h3>UNLEASH THE POWER OF THE SUN</h3>
      </VideoHero>
      <SmoothScrollLogosBlock margin="0 auto 100px" />
      <BrandsBlock
        title="Sectors"
        brands={[
          {
            link: '/solar/domestic',
            heroImage: '/images/solar/pac-sol-2.webp',
            alt: 'Domestic Solar from Power & Control',
            name: 'Domestic Solar',
          },
          {
            link: '/solar/commercial',
            heroImage: '/images/solar/comsol1.webp',
            alt: 'Comercial Solar from Power & Control',
            name: 'Commercial Solar',
          },
        ]}
      />
      <VideoBlock subtitle="Let us show you what an install from Power & Control will look like in your home" />
      <BrandsBlock />
      <TextWithImageBlock />
      <LatestStudiesBlock title="Solar" query="solar" />
      <LargeImageBlock />
    </div>
  );
}
