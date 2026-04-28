import { client } from '@/sanity/client';
import { getGoogleReviews } from '@/utils/getGoogleReviews';

// Static Blocks
import HeroImmersive from '@/ComponentsV2/ContentBlocks/Static/HeroImmersive';
import CultureOverlap from '@/ComponentsV2/ContentBlocks/Static/CultureOverlap';
import ImageTextSplit from '@/ComponentsV2/ContentBlocks/Static/ImageTextSplit';
import LandscapeFeatureBanner from '@/ComponentsV2/ContentBlocks/Static/LandscapeFeatureBanner';
import StaggeredGalleryText from '@/ComponentsV2/ContentBlocks/Static/StaggeredGalleryText';
import CareerTracksPills from '@/ComponentsV2/ContentBlocks/Static/CareerTracksPills';
import SpeculativeCTA from '@/ComponentsV2/ContentBlocks/Static/SpeculativeCTA';

// Dynamic Blocks
import GoogleReviews from '@/ComponentsV2/ContentBlocks/Dynamic/GoogleReviews';
import JobTicker from '@/ComponentsV2/ContentBlocks/Dynamic/JobTicker';
import ActiveJobsGrid from '@/ComponentsV2/ContentBlocks/Dynamic/ActiveJobsGrid';

export const revalidate = 60;

async function getActiveJobs() {
  const query = `
    *[_type == "job" && isActive == true] | order(_createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      shortDescription
    }
  `;
  return await client.fetch(query, {}, { next: { tags: ['job'] } });
}

export const metadata = {
  title: 'Careers | PAC Electrical',
  description: 'Join the team at PAC Electrical. We are currently hiring top talent for our Solar, EV, and Commercial divisions.',
};

export default async function RecruitingPage() {
  const jobs = await getActiveJobs();
  const reviewsData = await getGoogleReviews();

  return (
    <main style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      
      {/* 1. The massive, immersive introduction */}
      <HeroImmersive />
      
      {/* 2. Scrolling ticker of live jobs (Dynamic) */}
      <JobTicker jobs={jobs} />
      
      {/* 3. The overlapping culture cards */}
      <CultureOverlap />

      {/* 4. Editorial layout: "No Red Tape" */}
      <StaggeredGalleryText />

      {/* 5. Wide cinematic break: PAC Academy */}
      <LandscapeFeatureBanner />

      {/* 6. 50/50 Split: Career progression */}
      <ImageTextSplit />

      {/* 7. Division breakdown: Solar, EV, Electrical */}
      <CareerTracksPills />

      <GoogleReviews reviewsData={reviewsData} />

      {/* 8. The actual Job Board Grid (Dynamic) */}
      <ActiveJobsGrid jobs={jobs} />

      {/* 9. Catch-all form CTA */}
      <SpeculativeCTA />

    </main>
  );
}