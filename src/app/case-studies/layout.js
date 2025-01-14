'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import LowerHeaderBar from '@/Components/Header/LowerHeaderBar';

export default function CaseStudyLayout({ children }) {
  const [color, setColor] = useState('var(--navy)');
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes('solar')) {
      setColor('var(--green)');
    }
    if (pathname.includes('ev')) {
      setColor('var(--neon)');
    }
    if (pathname.includes('electrical')) {
      setColor('var(--navy)');
    }
    if (pathname.includes('all')) {
      setColor('var(--navy)');
    }
  }, [pathname]);

  return (
    <div>
      <LowerHeaderBar
        color={color}
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
