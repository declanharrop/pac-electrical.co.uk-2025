import Link from 'next/link';
import Styles from './Header.module.css';
import TopMenuButton from '@/Elements/Buttons/TopMenuButton';

export default function RightNav() {
  return (
    <nav className={Styles.RightNav}>
      <ul className={Styles.RightNav_UL}>
        <li className={Styles.RightNav_LI}>
          <TopMenuButton
            right
            title="US"
            color="var(--green)"
            dropdownOptions={[
              {
                name: 'Our Team',
                link: '/us/team',
              },
              {
                name: 'News',
                link: '/news',
              },
              {
                name: 'Case Studies',
                link: '/case-studies',
              },
              {
                name: 'About Us',
                link: '/us',
              },
              {
                name: 'Recruitment',
                link: '/us/recruitment',
              },
              {
                name: 'Reviews',
                link: '/us/reviews',
              },
            ]}
          />
        </li>
      </ul>
    </nav>
  );
}
