'use client';

import Link from 'next/link';
import { useContext } from 'react';
import { usePathname } from 'next/navigation';
import Styles from './Header.module.css';
import LeftNav from './LeftNav';
import RightNav from './RightNav';
import { HeaderContext } from '@/Context/HeaderContext';
import RightNavMobile from './RightNavMobile';
import MobileNavDock from './MobileNavDock';
import GetAQuoteButton from '@/Elements/Buttons/GetAQuoteButton';

export default function HeaderBar() {
  const { windowWidth } = useContext(HeaderContext);
  const pathname = usePathname();
  return (
    <>
      <div className={Styles.HeaderBar}>
        {windowWidth && (
          <>
            {windowWidth < 1090 ? (
              <div className={Styles.HeaderBar_Container}>
                <div className={Styles.HeaderBar_Container_Left}>
                  <Link href="/">
                    <img
                      className={Styles.HeaderBar_Container_Logo}
                      src="/logo/pac-logo-plain.svg"
                      alt="PAC Electrical Logo"
                    />
                  </Link>
                </div>
                <div className={Styles.HeaderBar_Container_Logo_Placer} />
                <div className={Styles.HeaderBar_Container_Right_Mobile}>
                  <RightNavMobile />
                </div>
              </div>
            ) : (
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
            )}
          </>
        )}
      </div>
      {windowWidth < 1090 && (
        <>
          {pathname.includes('get-a-quote') ? null : (
            <div
              style={{
                position: 'fixed',
                zIndex: '1000',
                bottom: '70px',
                right: '10px',
              }}
            >
              <GetAQuoteButton />
            </div>
          )}
          <MobileNavDock />
        </>
      )}
      {windowWidth > 1090 && (
        <>
          {pathname.includes('get-a-quote') ? null : (
            <div
              style={{
                position: 'fixed',
                zIndex: '1000',
                bottom: '0px',
                right: '10px',
              }}
            >
              <GetAQuoteButton />
            </div>
          )}
        </>
      )}
    </>
  );
}
