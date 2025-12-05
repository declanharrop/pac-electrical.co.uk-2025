import Link from 'next/link';
import Styles from './Blocks.module.css';

export default function ThreeItemBlock() {
  return (
    <div className={Styles.ThreeItemBlock}>
      <div className={Styles.ThreeItemBlock_Container}>
        {/* Card 1: Electrical */}
        <Link href="/electrical" className={Styles.LinkWrapper}>
          <div className={Styles.ThreeItemBlock_Container_Item}>
            <img
              className={Styles.ThreeItemBlock_Container_Item_Icon}
              src="/icons/electrical.svg"
              alt="Electrical Icon"
            />
            {/* Wrapper div added for Mobile Flex alignment */}
            <div className={Styles.ContentWrapper}>
              <h2 className={Styles.ThreeItemBlock_Container_Item_Title}>
                Commercial Electrical
              </h2>
              <p className={Styles.ThreeItemBlock_Container_Item_Text}>
                Setting the commercial quality standard.
              </p>
            </div>
          </div>
        </Link>

        {/* Card 2: Solar */}
        <Link href="/solar" className={Styles.LinkWrapper}>
          <div className={Styles.ThreeItemBlock_Container_Item}>
            <img
              className={Styles.ThreeItemBlock_Container_Item_Icon}
              src="/icons/solar.svg"
              alt="Solar Icon"
            />
            <div className={Styles.ContentWrapper}>
              <h2 className={Styles.ThreeItemBlock_Container_Item_Title}>
                Solar PV Installations
              </h2>
              <p className={Styles.ThreeItemBlock_Container_Item_Text}>
                Powering your world, your way.
              </p>
            </div>
          </div>
        </Link>

        {/* Card 3: EV */}
        <Link href="/ev" className={Styles.LinkWrapper}>
          <div className={Styles.ThreeItemBlock_Container_Item}>
            <img
              className={Styles.ThreeItemBlock_Container_Item_Icon}
              src="/icons/ev-charging.svg"
              alt="EV Icon"
            />
            <div className={Styles.ContentWrapper}>
              <h2 className={Styles.ThreeItemBlock_Container_Item_Title}>
                EV Charge Points
              </h2>
              <p className={Styles.ThreeItemBlock_Container_Item_Text}>
                Powering your next adventure.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
