import Link from 'next/link';
import Styles from './Header.module.css';
import TopMenuButton from '@/Elements/Buttons/TopMenuButton';

export default function LeftNav() {
  return (
    <nav className={Styles.LeftNav}>
      <ul className={Styles.LeftNav_UL}>
        <li className={Styles.LeftNav_LI}>
          <TopMenuButton title="SOLAR" color="var(--green)" link="/solar" />
        </li>
        <li className={Styles.LeftNav_LI}>
          <TopMenuButton
            title="ELECTRICAL"
            color="var(--navy)"
            link="/electrical"
          />
        </li>
        <li className={Styles.LeftNav_LI}>
          <TopMenuButton title="EV CHARGING" color="var(--neon)" link="/ev" />
        </li>
      </ul>
    </nav>
  );
}
