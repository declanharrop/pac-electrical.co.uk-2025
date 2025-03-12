// 'use client';

import CaseStudiesFrame from '@/Frames/CaseStudiesFrame';
import CaseStudyFrame from '@/Frames/CaseStudyFrame';
import { STUDIES_QUERY, STUDY_QUERY } from '@/lib/DataQueries';
import { getClient } from '@/Utils/client';

export async function generateMetadata(params) {
  const client = getClient();
  const { data } = await client.query({
    query: STUDIES_QUERY,
  });

  if (params) {
    if (data) {
      if (params.params.slug[0] === 'study') {
        const { data: studyData } = await client.query({
          query: STUDY_QUERY,
          variables: { slug: params.params.slug[1] },
        });
        if (studyData) {
          const page = studyData.caseStudies[0];
          const METADATA = {
            Url: `https://pac-electrical.co.uk/solar/commerical`,
            SiteName: `Power & Control Ltd - ${page.title}`,
            Description: `${page.metaDescription}`,
          };
          return {
            title: METADATA.SiteName,
            applicationName: METADATA.SiteName,
            description: METADATA.Description,
            referrer: 'origin-when-cross-origin',
            url: METADATA.Url,
            openGraph: {
              title: METADATA.SiteName,
              siteName: METADATA.siteName,
              description: METADATA.Description,
              url: METADATA.Url,
              images: [
                {
                  url: `${page.hero.url}`,
                  width: 600, // Must be an absolute URL
                },
              ],
              locale: 'en_GB',
              type: 'article',
            },
          };
        }
      }
    }
    if (params.params.slug[0] === 'all') {
      const METADATA = {
        Url: `https://pac-electrical.co.uk/case-studies/all`,
        SiteName: `Power & Control Ltd - All Case Studies`,
        Description: `All case studies from Power & Control Ltd`,
      };
      return {
        title: METADATA.SiteName,
        applicationName: METADATA.SiteName,
        description: METADATA.Description,
        referrer: 'origin-when-cross-origin',
        url: METADATA.Url,
        openGraph: {
          title: METADATA.SiteName,
          siteName: METADATA.siteName,
          description: METADATA.Description,
          url: METADATA.Url,
          images: [
            {
              url: '/images/electrical/commercial.webp',
              width: 600, // Must be an absolute URL
            },
          ],
          locale: 'en_GB',
          type: 'article',
        },
      };
    }
    if (params.params.slug[0] === 'electrical') {
      const METADATA = {
        Url: `https://pac-electrical.co.uk/case-studies/electrical`,
        SiteName: `Power & Control Ltd - Electrical Case Studies`,
        Description: `Electrical Case Studies from Power & Control Ltd`,
      };
      return {
        title: METADATA.SiteName,
        applicationName: METADATA.SiteName,
        description: METADATA.Description,
        referrer: 'origin-when-cross-origin',
        url: METADATA.Url,
        openGraph: {
          title: METADATA.SiteName,
          siteName: METADATA.siteName,
          description: METADATA.Description,
          url: METADATA.Url,
          images: [
            {
              url: '/images/electrical/commercial.webp',
              width: 600, // Must be an absolute URL
            },
          ],
          locale: 'en_GB',
          type: 'article',
        },
      };
    }
    if (params.params.slug[0] === 'solar') {
      const METADATA = {
        Url: `https://pac-electrical.co.uk/case-studies/ev`,
        SiteName: `Power & Control Ltd - EV Charging Case Studies`,
        Description: `EV Charging Case Studies from Power & Control Ltd`,
      };
      return {
        title: METADATA.SiteName,
        applicationName: METADATA.SiteName,
        description: METADATA.Description,
        referrer: 'origin-when-cross-origin',
        url: METADATA.Url,
        openGraph: {
          title: METADATA.SiteName,
          siteName: METADATA.siteName,
          description: METADATA.Description,
          url: METADATA.Url,
          images: [
            {
              url: '/images/solar/pac-sol-1.webp',
              width: 600, // Must be an absolute URL
            },
          ],
          locale: 'en_GB',
          type: 'article',
        },
      };
    }
    if (params.params.slug[0] === 'ev') {
      const METADATA = {
        Url: `https://pac-electrical.co.uk/case-studies/electrical`,
        SiteName: `Power & Control Ltd - Electrical Case Studies`,
        Description: `Electrical Case Studies from Power & Control Ltd`,
      };
      return {
        title: METADATA.SiteName,
        applicationName: METADATA.SiteName,
        description: METADATA.Description,
        referrer: 'origin-when-cross-origin',
        url: METADATA.Url,
        openGraph: {
          title: METADATA.SiteName,
          siteName: METADATA.siteName,
          description: METADATA.Description,
          url: METADATA.Url,
          images: [
            {
              url: '/images/electrical/commercial.webp',
              width: 600, // Must be an absolute URL
            },
          ],
          locale: 'en_GB',
          type: 'article',
        },
      };
    }
  }
}

export default async function CaseStudies(params) {
  const client = getClient();
  const { data } = await client.query({
    query: STUDIES_QUERY,
  });

  const caseStudies = data?.caseStudies;
  const electricalStudies = data?.caseStudies.filter((study) =>
    study.studySectors.includes('electrical'),
  );
  const solarStudies = data?.caseStudies.filter((study) =>
    study.studySectors.includes('solar'),
  );
  const evStudies = data?.caseStudies.filter((study) =>
    study.studySectors.includes('evCharging'),
  );

  if (params) {
    if (data) {
      if (params.params.slug[0] === 'study') {
        const { data: studyData } = await client.query({
          query: STUDY_QUERY,
          variables: { slug: params.params.slug[1] },
        });
        if (studyData) {
          return (
            <div style={{ marginTop: '10px' }}>
              <CaseStudyFrame title="All Case Studies" study={studyData} />
            </div>
          );
        }
      }
      if (params.params.slug[0] === 'all') {
        return <CaseStudiesFrame data={caseStudies} title="Case Studies" />;
      }
      if (params.params.slug[0] === 'electrical') {
        return (
          <CaseStudiesFrame
            data={electricalStudies}
            title="Electrical Case Studies"
          />
        );
      }
      if (params.params.slug[0] === 'solar') {
        return (
          <CaseStudiesFrame data={solarStudies} title="Solar Case Studies" />
        );
      }
      if (params.params.slug[0] === 'ev') {
        return (
          <CaseStudiesFrame data={evStudies} title="EV Charging Case Studies" />
        );
      }
    }
  }
}
