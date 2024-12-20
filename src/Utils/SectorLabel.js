import Styles from './Styles/SectorLabel.module.css';

function LabelSwitch({ sector }) {
  switch (sector) {
    case 'commercial':
      return (
        <div
          style={{ background: 'var(--navy)', color: 'white' }}
          className={Styles.SectorLabel_Container_Item}
        >
          Commercial
        </div>
      );
    case 'domestic':
      return (
        <div
          style={{ background: 'var(--navy)', color: 'white' }}
          className={Styles.SectorLabel_Container_Item}
        >
          Domestic
        </div>
      );
    case 'evCharging':
      return (
        <div
          style={{ background: 'var(--neon)', color: 'var(--navy)' }}
          className={Styles.SectorLabel_Container_Item}
        >
          EV Charging
        </div>
      );
    case 'solar':
      return (
        <div
          style={{ background: 'var(--green)', color: 'white' }}
          className={Styles.SectorLabel_Container_Item}
        >
          Solar
        </div>
      );
    case 'electrical':
      return (
        <div
          style={{ background: 'var(--navy)', color: 'white' }}
          className={Styles.SectorLabel_Container_Item}
        >
          Electrical
        </div>
      );

    default:
      return null;
  }
}

export default function SectorLabel({ data }) {
  return (
    <div className={Styles.SectorLabel}>
      <div className={Styles.SectorLabel_Container}>
        {data.map((sector, i) => (
          <LabelSwitch sector={sector} key={i} />
        ))}
      </div>
    </div>
  );
}
