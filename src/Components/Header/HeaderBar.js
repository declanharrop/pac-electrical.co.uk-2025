import Link from 'next/link';
import Styles from './Header.module.css';
import LeftNav from './LeftNav';
import RightNav from './RightNav';

export default function HeaderBar() {
  return (
    <div className={Styles.HeaderBar}>
      <div className={Styles.HeaderBar_Container}>
        <div className={Styles.HeaderBar_Container_Left}>
          <LeftNav />
        </div>
        <div className={Styles.HeaderBar_Container_Logo_Placer}>
          <Link href="/">
            <img
              className={Styles.HeaderBar_Container_Logo}
              src="/logo/pac-logo-plain.svg"
              alt="PAC Electrical Logo"
            />
          </Link>
        </div>
        <div className={Styles.HeaderBar_Container_Right}>
          <RightNav />
        </div>
      </div>
    </div>
  );
}
