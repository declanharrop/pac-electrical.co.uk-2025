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
      <SmoothScrollLogosBlock />
      <VideoBlock subtitle="Let us show you what an install from Power & Control will look like in your home" />
      <TextWithImageBlock />
      <BrandsBlock />
      <LatestStudiesBlock title="Solar" query="solar" />
      <LargeImageBlock />
    </div>
  );
}
