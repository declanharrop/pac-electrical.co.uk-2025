import { Suspense } from 'react';
import EVBrandsBlock from '@/Components/Blocks/BrandAccredBlocks/EVBrandsBlock';
import SolarBrandsBlock from '@/Components/Blocks/BrandAccredBlocks/SolarBrandsBlock';
import CaseStudiesBlock from '@/Components/Blocks/CaseStudiesBlock/CaseStudiesBlock';
import SimpleHeaderTextBlock from '@/Components/Blocks/SimpleHeaderTextBlock';
import NewsSection from '@/Components/Blocks/Static/NewsSection';

import ThreeItemBlock from '@/Components/Blocks/ThreeItemBlock';
import VideoHero from '@/Components/Hero/VideoHero';

export default function HomePage() {
  return (
    <div>
      <VideoHero height="75vh">
        <h1>Power & Control</h1>
        <h3>Powering homes, businesses, and futures.</h3>
      </VideoHero>
      <ThreeItemBlock />
      <Suspense
        fallback={
          <div style={{ height: 400, background: '#f9f9f9' }}>
            Loading News...
          </div>
        }
      >
        <NewsSection />
      </Suspense>
      <CaseStudiesBlock />
      <SimpleHeaderTextBlock margin="0px 0 100px 0" />
      <SolarBrandsBlock />
      <EVBrandsBlock margin="-40px 0 0 0" />
    </div>
  );
}
