'use client';

import Link from 'next/link';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import Styles from './Header.module.css';
import HeaderDropdown from './HeaderDropdown';
import { HeaderContext } from '@/Context/HeaderContext';
import { CaseStudiesContext } from '@/Context/CaseStudiesContext';

export default function LowerHeaderBar({
  title = 'Solar',
  color = 'var(--green)',
  selectOptions = false,
  links = [
    {
      name: 'Our Installs',
      link: '/case-studies/solar',
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

  const router = useRouter();

  const { selectedValue } = useContext(CaseStudiesContext);

  function handleChange(e) {
    router.push(`/case-studies${e.target.value}`);
  }
  return (
    <>
      <div
        className={Styles.LowerHeaderBar}
        style={{ backgroundColor: `${color}` }}
      >
        <div className={Styles.LowerHeaderBar_Container}>
          <div className={Styles.LowerHeaderBar_Container_Left}>
            <h2 className={Styles.LowerHeaderBar_Container_Left_Title}>
              {title}
            </h2>
          </div>
          {selectOptions ? (
            <div className={Styles.LowerHeaderBar_Container_Right}>
              <select
                onChange={handleChange}
                className={Styles.LowerHeaderBar_Select}
                value={`/${selectedValue}`}
              >
                <option value="/all">All</option>
                <option value="/solar">Solar</option>
                <option value="/electrical">Electrical</option>
                <option value="/ev">EV</option>
              </select>
            </div>
          ) : (
            <div className={Styles.LowerHeaderBar_Container_Left}>
              <ul className={Styles.LowerHeaderBar_UL}>
                {links.map((link, i) => (
                  <div key={i}>
                    {link.dropdown ? (
                      <li
                        key={i}
                        className={Styles.LowerHeaderBar_LI}
                        onMouseEnter={() => setActiveDropdown(title)}
                      >
                        {link.name}
                      </li>
                    ) : (
                      <li key={i} className={Styles.LowerHeaderBar_LI}>
                        <Link
                          className={Styles.LowerHeaderBar_LI_Link}
                          href={link.link}
                        >
                          {link.name}
                        </Link>
                      </li>
                    )}
                  </div>
                ))}
              </ul>
            </div>
          )}
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
