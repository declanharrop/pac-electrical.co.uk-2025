'use client';

import Link from 'next/link';
import { useContext } from 'react';
import Styles from './Header.module.css';
import HeaderDropdown from './HeaderDropdown';
import { HeaderContext } from '@/Context/HeaderContext';

export default function LowerHeaderBar({
  title = 'Solar',
  color = 'var(--green)',
  links = [
    {
      name: 'Get a Quote',
      link: '/solar/quote',
    },
    {
      name: 'Our Installs',
      link: '/solar/installs',
    },
    {
      name: 'Brands',
      link: '/solar/systems',
    },
    {
      name: 'More',
      dropdown: true,
    },
  ],
  dropdownOptions = [
    {
      name: 'Our Process',
      link: '/solar/process',
    },
    {
      name: 'Solar Explained',
      link: '/solar/explained',
    },
    {
      name: 'Battery Storage',
      link: '/solar/battery',
    },
    {
      name: 'Domestic Solar',
      link: '/solar/domestic',
    },
    {
      name: 'Commercial Solar',
      link: '/solar/commercial',
    },
    {
      name: 'MCS Explained',
      link: '/solar/mcs',
    },
    {
      name: 'HEIS Explained',
      link: '/solar/heis',
    },
  ],
}) {
  const { activeDropdown, setActiveDropdown } = useContext(HeaderContext);

  return (
    <>
      <div
        className={Styles.LowerHeaderBar}
        style={{ backgroundColor: `${color}` }}
      >
        <div className={Styles.LowerHeaderBar_Container}>
          <div className={Styles.LowerHeaderBar_Container_Left}>
            <h2 style={{ fontSize: '2.2rem' }}>{title}</h2>
          </div>
          <div className={Styles.LowerHeaderBar_Container_Left}>
            <ul className={Styles.LowerHeaderBar_UL}>
              {links.map((link) => (
                <>
                  {link.dropdown ? (
                    <li
                      key={link.name}
                      className={Styles.LowerHeaderBar_LI}
                      onMouseEnter={() => setActiveDropdown(title)}
                    >
                      {link.name}
                    </li>
                  ) : (
                    <li key={link.name} className={Styles.LowerHeaderBar_LI}>
                      <Link
                        className={Styles.LowerHeaderBar_LI_Link}
                        href={link.link}
                      >
                        {link.name}
                      </Link>
                    </li>
                  )}
                </>
              ))}
            </ul>
          </div>
        </div>
        <div className={Styles.Dropdown_Container}>
          <HeaderDropdown
            title={title}
            dropdownOptions={dropdownOptions}
            color={color}
          />
        </div>
      </div>
    </>
  );
}
