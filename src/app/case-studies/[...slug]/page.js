'use client';

export default function CaseStudies(params) {
  if (params) {
    if (params.params.slug[0] === 'study') {
      return (
        <div style={{ marginTop: '10px' }}>
          <h1>Case Study</h1>
        </div>
      );
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
