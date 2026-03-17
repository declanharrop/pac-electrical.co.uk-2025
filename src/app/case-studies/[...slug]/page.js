import { notFound } from 'next/navigation';
import { client } from '@/sanity/client';
import {
  ALL_CASE_STUDIES_QUERY,
  SINGLE_CASE_STUDY_QUERY,
} from '@/sanity/queries';
import CaseStudiesFrame from '@/Frames/CaseStudiesFrame';
import CaseStudyFrame from '@/Frames/CaseStudyFrame';

export const revalidate = 60;

// Helper: Filter studies by sector string (case-insensitive)
const filterBySector = (studies, sector) =>
  studies.filter((study) =>
    study.studySectors?.some((s) => s.toLowerCase().includes(sector)),
  );

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slugPath = resolvedParams.slug;

  const type = slugPath[0];
  const identifier = slugPath[1];

  // 1. Single Study Metadata - SEO UPGRADE: Front-load the project and location
  if (type === 'study' && identifier) {
    const page = await client.fetch(SINGLE_CASE_STUDY_QUERY, {
      slug: identifier,
    });
    if (!page) return { title: 'Project Not Found' };

    return {
      title: `${page.title} | Case Study | Power & Control Ltd`,
      description:
        page.metaDescription ||
        `View our recent ${page.title} project. Expert electrical and renewable installations across the East Midlands.`,
      openGraph: {
        images: [{ url: page.hero?.url }],
      },
    };
  }

  // 2. Category Lists Metadata - SEO UPGRADE: Add British English & Location
  const metaMap = {
    all: {
      title: 'Electrical & Solar Case Studies Derbyshire',
      desc: 'Explore our portfolio of commercial and domestic electrical, solar PV, and EV charging projects across the East Midlands.',
    },
    electrical: {
      title: 'Commercial Electrical Projects | Derbyshire & UK',
      desc: 'View our recent commercial electrical installations, maintenance, and compliance projects.',
    },
    solar: {
      title: 'Solar PV & Battery Storage Projects | Derbyshire',
      desc: 'Showcasing our sustainable solar panel and battery storage installations for homes and businesses.',
    },
    ev: {
      title: 'EV Charging Infrastructure Projects | East Midlands',
      desc: 'Discover our recent electric vehicle charging installations for domestic and commercial clients.',
    },
  };

  const meta = metaMap[type] || metaMap.all;

  return {
    title: `${meta.title} | Power & Control`,
    description: meta.desc,
  };
}

export default async function CaseStudiesPage({ params }) {
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

    // SEO UPGRADE: Schema for the specific project
    const projectSchema = {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: studyData.title,
      description: studyData.metaDescription,
      image: studyData.hero?.url,
      author: {
        '@type': 'Organization',
        name: 'Power & Control Ltd',
      },
      locationCreated: {
        '@type': 'Place',
        name: 'Derbyshire, UK',
      },
    };

    return (
      <div style={{ marginTop: '10px' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
        />
        <CaseStudyFrame title="All Case Studies" study={studyData} />
      </div>
    );
  }

  // SCENARIO 2: LIST PAGES
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

  // SEO UPGRADE: Collection Schema for list pages
  const listSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: filteredData.slice(0, 10).map((study, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://pac-electrical.co.uk/case-studies/study/${study.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
      />
      <CaseStudiesFrame data={filteredData} title={pageTitle} />
    </>
  );
}
