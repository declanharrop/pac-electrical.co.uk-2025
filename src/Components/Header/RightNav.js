import Link from 'next/link';
import Styles from './Header.module.css';
import TopMenuButton from '@/Elements/Buttons/TopMenuButton';

export default function RightNav() {
  return (
    <nav className={Styles.RightNav}>
      <ul className={Styles.RightNav_UL}>
        <li className={Styles.RightNav_LI}>
          <TopMenuButton title="ABOUT" color="var(--navy)" link="/us" />
        </li>
      </ul>
      <div className={Styles.RightNav_Socials}>
        <a
          className={Styles.RightNav_Socials_Link}
          href="https://www.instagram.com/pacrenewable"
          target="_blank"
          rel="noreferrer"
        >
          <img
            id="button"
            className={Styles.RightNav_Socials_Icon}
            src="/icons/instagram.svg"
            alt="Power & Control - Instagram"
          />
        </a>
        <a
          className={Styles.RightNav_Socials_Link}
          href="https://www.facebook.com/powerandcontrolltd"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={Styles.RightNav_Socials_Icon}
            src="/icons/facebook.svg"
            alt="Power & Control - Facebook"
          />
        </a>
        <a
          className={Styles.RightNav_Socials_Link}
          href="https://www.linkedin.com/company/76618968"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={Styles.RightNav_Socials_Icon}
            src="/icons/linkedin.svg"
            alt="Power & Control - Linked In"
          />
        </a>
      </div>
      <div className={Styles.RightNav_Contact}>
        <a
          className={Styles.RightNav_Contact_Link}
          href="tel:+441332552320"
          target="_blank"
          rel="noreferrer"
        >
          <img
            id="button"
            className={Styles.RightNav_Contact_Icon}
            src="/icons/phone.svg"
            alt="Power & Control - Phone Icon"
          />
        </a>
        <a
          className={Styles.RightNav_Contact_Link}
          href="mailto:enquiries@pac-electrical.co.uk"
          target="_blank"
          rel="noreferrer"
        >
          <img
            id="button"
            className={Styles.RightNav_Contact_Icon}
            src="/icons/email.svg"
            alt="Power & Control - Email Icon"
          />
        </a>
      </div>
    </nav>
  );
}
