import { notFound } from 'next/navigation';
import { client } from '@/sanity/client';
import {
  ALL_CASE_STUDIES_QUERY,
  SINGLE_CASE_STUDY_QUERY,
} from '@/sanity/queries';
import CaseStudiesFrame from '@/Frames/CaseStudiesFrame';
import CaseStudyFrame from '@/Frames/CaseStudyFrame';

export const revalidate = 60;

// Helper: Filter studies by sector string (case insensitive)
const filterBySector = (studies, sector) =>
  studies.filter((study) =>
    study.studySectors?.some((s) => s.toLowerCase().includes(sector)),
  );

export async function generateMetadata({ params }) {
  // AWAIT PARAMS HERE (Next.js 15 Fix)
  const resolvedParams = await params;
  const slugPath = resolvedParams.slug;

  const type = slugPath[0];
  const identifier = slugPath[1];

  // 1. Single Study Metadata
  if (type === 'study' && identifier) {
    const page = await client.fetch(SINGLE_CASE_STUDY_QUERY, {
      slug: identifier,
    });
    if (!page) return { title: 'Project Not Found' };

    return {
      title: `Power & Control Ltd - ${page.title}`,
      description: page.metaDescription,
      openGraph: {
        images: [{ url: page.hero.url }],
      },
    };
  }

  // 2. Category Lists Metadata
  const metaMap = {
    all: { title: 'All Case Studies', desc: 'Explore all our projects.' },
    electrical: {
      title: 'Electrical Projects',
      desc: 'Commercial electrical work.',
    },
    solar: {
      title: 'Solar Projects',
      desc: 'Sustainable solar installations.',
    },
    ev: { title: 'EV Charging Projects', desc: 'EV infrastructure projects.' },
  };

  const meta = metaMap[type] || metaMap.all;

  return {
    title: `Power & Control - ${meta.title}`,
    description: meta.desc,
  };
}

export default async function CaseStudiesPage({ params }) {
  // AWAIT PARAMS HERE (Next.js 15 Fix)
  const resolvedParams = await params;
  const slugPath = resolvedParams.slug;

  const type = slugPath[0];
  const identifier = slugPath[1];

  // SCENARIO 1: SINGLE CASE STUDY PAGE (/case-studies/study/slug)
  if (type === 'study' && identifier) {
    const studyData = await client.fetch(SINGLE_CASE_STUDY_QUERY, {
      slug: identifier,
    });

    if (!studyData) return notFound();

    return (
      <div style={{ marginTop: '10px' }}>
        <CaseStudyFrame title="All Case Studies" study={studyData} />
      </div>
    );
  }

  // SCENARIO 2: LIST PAGES (/case-studies/all, /case-studies/solar)
  const allStudies = await client.fetch(ALL_CASE_STUDIES_QUERY);

  let filteredData = allStudies;
  let pageTitle = 'Case Studies';

  if (type === 'electrical') {
    filteredData = filterBySector(allStudies, 'electrical');
    pageTitle = 'Electrical Case Studies';
  } else if (type === 'solar') {
    filteredData = filterBySector(allStudies, 'solar');
    pageTitle = 'Solar Case Studies';
  } else if (type === 'ev') {
    filteredData = filterBySector(allStudies, 'ev');
    pageTitle = 'EV Charging Case Studies';
  }

  return <CaseStudiesFrame data={filteredData} title={pageTitle} />;
}
