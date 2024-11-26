import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext } from 'react';
import Link from 'next/link';
import Styles from './Header.module.css';
import { HeaderContext } from '@/Context/HeaderContext';

export default function HeaderDropdown({
  title,
  color = 'var(--green)',
  dropdownOptions = [
    {
      name: 'Learn More',
      link: '/electrical',
    },
    {
      name: 'Our Contracts',
      link: '/electrial/case-studies',
    },
    {
      name: 'Contact Us',
      link: '/electrical/contact',
    },
  ],
}) {
  const { activeDropdown, setActiveDropdown } = useContext(HeaderContext);

  const animateFrom = { height: '0px' };
  const animateTo = { height: 'auto' };
  const animateExit = { height: '0px' };
  const transition = {
    height: { ease: 'easeOut', duration: 0.6 },
  };
  return (
    <>
      <AnimatePresence>
        {activeDropdown === title && (
          <motion.div
            initial={animateFrom}
            animate={animateTo}
            exit={animateExit}
            transition={transition}
            style={{ borderTop: `5px solid ${color}` }}
            className={Styles.LowerHeaderBar_Dropdown}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <ul className={Styles.LowerHeaderBar_Dropdown_UL}>
              {dropdownOptions.map((option) => (
                <li
                  key={option.name}
                  className={Styles.LowerHeaderBar_Dropdown_LI}
                >
                  <Link
                    href={option.link}
                    className={Styles.LowerHeaderBar_Dropdown_LI_Link}
                  >
                    {option.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
