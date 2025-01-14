'use client';

import { usePathname } from 'next/navigation';
import LowerHeaderBar from '@/Components/Header/LowerHeaderBar';
import { CaseStudiesProvider } from '@/Context/CaseStudiesContext';

export default function CaseStudyLayout({ children }) {
  return (
    <div>
      <LowerHeaderBar
        color="var(--navy)"
        title="Our Work"
        selectOptions={[
          {
            name: 'All',
            value: 'all',
          },
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
        selectedValue="electrical"
      />
      {children}
    </div>
  );
}
