'use client';

import LowerHeaderBar from '@/Components/Header/LowerHeaderBar';

export default function CaseStudyLayout({ children }) {
  return (
    <div>
      <LowerHeaderBar
        color="var(--navy)"
        title="Our Work"
        selectOptions={[
          {
            name: 'Electrical',
            value: 'electrical',
          },
          {
            name: 'Solar',
            value: 'solar',
          },
          {
            name: 'EV',
            value: 'ev',
          },
        ]}
      />
      <h4> Discover our Work </h4>
      {children}
    </div>
  );
}
