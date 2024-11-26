'use client';

import { useEffect, useState, createContext } from 'react';

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <HeaderContext.Provider value={{ activeDropdown, setActiveDropdown }}>
      {children}
    </HeaderContext.Provider>
  );
};
