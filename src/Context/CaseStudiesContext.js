'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, createContext } from 'react';

export const CaseStudiesContext = createContext();

export const CaseStudiesProvider = ({ children }) => {
  const pathname = usePathname();
  const [selectedValue, setSelectedValue] = useState('');
  useEffect(() => {
    if (pathname.includes('case-studies')) {
      setSelectedValue(pathname.split('/')[2]);
    }
  }, [pathname, selectedValue]);

  return (
    <CaseStudiesContext.Provider value={{ selectedValue }}>
      {children}
    </CaseStudiesContext.Provider>
  );
};
