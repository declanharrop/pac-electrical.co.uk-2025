'use client';

import { useQuery } from '@apollo/client';
import { STUDIES_QUERY } from '@/lib/DataQueries';
import CaseStudiesFrame from '@/Frames/CaseStudiesFrame';

export default function CaseStudies(params) {
  const { data } = useQuery(STUDIES_QUERY);

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
        return <CaseStudiesFrame data={data} title="All Case Studies" />;
      }
      if (params.params.slug[0] === 'electrical') {
        return (
          <div style={{ marginTop: '100px' }}>
            <h1>Case Studies Electrical</h1>
          </div>
        );
      }
      if (params.params.slug[0] === 'solar') {
        return (
          <div style={{ marginTop: '100px' }}>
            <h1>Case Studies Solar</h1>
          </div>
        );
      }
      if (params.params.slug[0] === 'ev') {
        return (
          <div style={{ marginTop: '100px' }}>
            <h1>Case Studies EV</h1>
          </div>
        );
      }
    }
  }
}
