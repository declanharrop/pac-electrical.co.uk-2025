'use client';

import { useQuery } from '@apollo/client';
import { STUDIES_QUERY } from '@/lib/DataQueries';
import CaseStudiesFrame from '@/Frames/CaseStudiesFrame';

export default function CaseStudies(params) {
  const { data } = useQuery(STUDIES_QUERY);

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
        return (
          <div style={{ marginTop: '10px' }}>
            <h1>Case Study</h1>
          </div>
        );
      }
      if (params.params.slug[0] === 'all') {
        return <CaseStudiesFrame data={caseStudies} title="All Case Studies" />;
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
          <CaseStudiesFrame
            data={solarStudies}
            title="Electrical Case Studies"
          />
        );
      }
      if (params.params.slug[0] === 'ev') {
        return (
          <CaseStudiesFrame data={evStudies} title="Electrical Case Studies" />
        );
      }
    }
  }
}
