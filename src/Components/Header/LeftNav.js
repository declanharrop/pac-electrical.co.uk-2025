import Link from 'next/link';
import Styles from './Header.module.css';
import TopMenuButton from '@/Elements/Buttons/TopMenuButton';

export default function LeftNav() {
  return (
    <nav className={Styles.LeftNav}>
      <ul className={Styles.LeftNav_UL}>
        <li className={Styles.LeftNav_LI}>
          <TopMenuButton
            title="SOLAR"
            color="var(--green)"
            dropdownOptions={[
              {
                name: 'Explore Solar',
                link: '/solar',
              },
              {
                name: 'Our Installs',
                link: '/solar/case-studies',
              },
              {
                name: 'Get a Quote',
                link: '/solar/quote',
              },
            ]}
          />
        </li>
        <li className={Styles.LeftNav_LI}>
          <TopMenuButton title="ELECTRICAL" color="var(--navy)" />
        </li>
        <li className={Styles.LeftNav_LI}>
          <TopMenuButton
            title="EV CHARGING"
            color="var(--neon)"
            dropdownOptions={[
              {
                name: 'Learn More',
                link: '/ev',
              },
              {
                name: 'Our Installs',
                link: '/ev/case-studies',
              },
              {
                name: 'Get a Quote',
                link: '/ev/quote',
              },
            ]}
          />
        </li>
      </ul>
    </nav>
  );
}
