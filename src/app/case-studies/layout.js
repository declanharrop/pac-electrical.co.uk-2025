'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import LowerHeaderBar from '@/Components/Header/LowerHeaderBar';

export default function CaseStudyLayout({ children }) {
  const [color, setColor] = useState('var(--navy)');
  const pathname = usePathname();

  // Simple logic to switch header color based on active section
  useEffect(() => {
    if (pathname.includes('/solar')) setColor('var(--green)');
    else if (pathname.includes('/ev')) setColor('var(--neon)');
    else setColor('var(--navy)');
  }, [pathname]);

  return (
    <div>
      <LowerHeaderBar
        color={color}
        title="Our Work"
        // Ensure these links match your route structure
        selectOptions={[
          { name: 'All', value: 'all' }, // Links to /case-studies/all
          { name: 'Electrical', value: 'electrical' },
          { name: 'Solar', value: 'solar' },
          { name: 'EV', value: 'ev' },
        ]}
        // We pass the active value to highlight the correct tab
        selectedValue={pathname.split('/').pop()}
      />
      {children}
    </div>
  );
}
