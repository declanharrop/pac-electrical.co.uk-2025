import Link from 'next/link';
import Styles from './Blocks.module.css';

export default function ThreeItemBlock() {
  return (
    <div className={Styles.ThreeItemBlock}>
      <div className={Styles.ThreeItemBlock_Container}>
        <Link href="/electrical">
          <div className={Styles.ThreeItemBlock_Container_Item}>
            <img
              className={Styles.ThreeItemBlock_Container_Item_Icon}
              src="/icons/electrical.svg"
              alt="Solar"
            />

            <h2 className={Styles.ThreeItemBlock_Container_Item_Title}>
              Commercial Electrical
            </h2>
            <p className={Styles.ThreeItemBlock_Container_Item_Text}>
              Setting the commercial quality standard.
            </p>
          </div>
        </Link>
        <Link href="/solar">
          <div className={Styles.ThreeItemBlock_Container_Item}>
            <img
              className={Styles.ThreeItemBlock_Container_Item_Icon}
              src="/icons/solar.svg"
              alt="Solar"
            />

            <h2 className={Styles.ThreeItemBlock_Container_Item_Title}>
              Solar PV Installations
            </h2>
            <p className={Styles.ThreeItemBlock_Container_Item_Text}>
              Powering your world, your way.
            </p>
          </div>
        </Link>
        <Link href="/ev">
          <div className={Styles.ThreeItemBlock_Container_Item}>
            <img
              className={Styles.ThreeItemBlock_Container_Item_Icon}
              src="/icons/ev-charging.svg"
              alt="Solar"
            />

            <h2 className={Styles.ThreeItemBlock_Container_Item_Title}>
              EV Charge Points
            </h2>
            <p className={Styles.ThreeItemBlock_Container_Item_Text}>
              Powering your next adventure
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
