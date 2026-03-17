import { notFound } from 'next/navigation';
import { client } from '@/sanity/client';
import {
  ALL_CASE_STUDIES_QUERY,
  SINGLE_CASE_STUDY_QUERY,
} from '@/sanity/queries';
import CaseStudiesFrame from '@/Frames/CaseStudiesFrame';
import CaseStudyFrame from '@/Frames/CaseStudyFrame';

export const revalidate = 60;

const filterBySector = (studies, sector) =>
  studies.filter((study) =>
    study.studySectors?.some((s) => s.toLowerCase().includes(sector)),
  );

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slugPath = resolvedParams.slug;
  const type = slugPath[0];
  const identifier = slugPath[1];

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
      openGraph: { images: [{ url: page.hero?.url }] },
    };
  }

  const metaMap = {
    all: {
      title: 'Electrical & Solar Case Studies Derbyshire',
      desc: 'Explore our portfolio of commercial and domestic electrical, solar PV, and EV charging projects.',
    },
    electrical: {
      title: 'Commercial Electrical Projects | Derbyshire',
      desc: 'View our recent commercial electrical installations and compliance projects.',
    },
    solar: {
      title: 'Solar PV & Battery Storage Projects | Derbyshire',
      desc: 'Showcasing our sustainable solar panel and battery storage installations.',
    },
    ev: {
      title: 'EV Charging Infrastructure Projects | East Midlands',
      desc: 'Discover our recent electric vehicle charging installations.',
    },
  };

  const meta = metaMap[type] || metaMap.all;
  return { title: `${meta.title} | Power & Control`, description: meta.desc };
}

export default async function CaseStudiesPage({ params }) {
  const resolvedParams = await params;
  const slugPath = resolvedParams.slug;
  const type = slugPath[0];
  const identifier = slugPath[1];

  // 1. BASE BREADCRUMB (Always present)
  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://pac-electrical.co.uk/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Case Studies',
        item: 'https://pac-electrical.co.uk/case-studies/all',
      },
    ],
  };

  // SCENARIO 1: SINGLE CASE STUDY PAGE
  if (type === 'study' && identifier) {
    const studyData = await client.fetch(SINGLE_CASE_STUDY_QUERY, {
      slug: identifier,
    });
    if (!studyData) return notFound();

    // Dynamically add the 3rd breadcrumb step for the specific project
    breadcrumbList.itemListElement.push({
      '@type': 'ListItem',
      position: 3,
      name: studyData.title,
      item: `https://pac-electrical.co.uk/case-studies/study/${identifier}`,
    });

    const projectSchema = {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: studyData.title,
      description: studyData.metaDescription,
      image: studyData.hero?.url,
      author: { '@type': 'Organization', name: 'Power & Control Ltd' },
      locationCreated: { '@type': 'Place', name: 'Derbyshire, UK' },
    };

    return (
      <div style={{ marginTop: '10px' }}>
        {/* Inject BOTH Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
        />
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
  let categoryName = 'All';

  if (type === 'electrical') {
    filteredData = filterBySector(allStudies, 'electrical');
    pageTitle = 'Electrical Case Studies';
    categoryName = 'Electrical';
  } else if (type === 'solar') {
    filteredData = filterBySector(allStudies, 'solar');
    pageTitle = 'Solar Case Studies';
    categoryName = 'Solar PV';
  } else if (type === 'ev') {
    filteredData = filterBySector(allStudies, 'ev');
    pageTitle = 'EV Charging Case Studies';
    categoryName = 'EV Charging';
  }

  // Dynamically add the 3rd breadcrumb step for the category (if not "all")
  if (type !== 'all' && type !== undefined) {
    breadcrumbList.itemListElement.push({
      '@type': 'ListItem',
      position: 3,
      name: categoryName,
      item: `https://pac-electrical.co.uk/case-studies/${type}`,
    });
  }

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
      {/* Inject BOTH Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
      />
      <CaseStudiesFrame data={filteredData} title={pageTitle} />
    </>
  );
}
