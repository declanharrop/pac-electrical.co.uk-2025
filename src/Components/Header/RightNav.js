import Link from 'next/link';
import Styles from './Header.module.css';
import TopMenuButton from '@/Elements/Buttons/TopMenuButton';

export default function RightNav() {
  return (
    <nav className={Styles.RightNav}>
      <ul className={Styles.RightNav_UL}>
        <li className={Styles.RightNav_LI}>
          <TopMenuButton title="US" color="var(--navy)" link="/us" />
        </li>
      </ul>
    </nav>
  );
}
