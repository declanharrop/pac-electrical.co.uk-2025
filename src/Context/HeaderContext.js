'use client';

import { useEffect, useState, createContext } from 'react';

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeMenu = () => {
    setActiveDropdown(null);
  };
  return (
    <HeaderContext.Provider
      value={{ activeDropdown, setActiveDropdown, windowWidth, closeMenu }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
