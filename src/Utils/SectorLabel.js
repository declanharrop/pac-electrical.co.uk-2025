import Styles from './Styles/SectorLabel.module.css';

function LabelSwitch({ sector }) {
  // Handle cases where 'sector' is an object (from Sanity reference) or string
  // If it's an object, we assume it has a 'title' or 'value' property, or we map based on ID/Title
  // For now, let's normalize the input to lower case string to match your switch statement

  let sectorName = '';

  if (typeof sector === 'string') {
    sectorName = sector.toLowerCase();
  } else if (sector && sector.title) {
    // If you expand the reference in GROQ: sector->{title}
    sectorName = sector.title.toLowerCase();
  }

  // Normalize mapping (Sanity title "Commercial" -> "commercial")
  if (sectorName === 'commercial')
    return <Badge color="var(--navy)" text="Commercial" />;
  if (sectorName === 'domestic')
    return <Badge color="var(--navy)" text="Domestic" />;
  if (sectorName === 'solar')
    return <Badge color="var(--green)" text="Solar" />;
  if (sectorName === 'electrical')
    return <Badge color="var(--navy)" text="Electrical" />;
  if (sectorName.includes('ev') || sectorName.includes('charging')) {
    return (
      <Badge color="var(--neon)" textColor="var(--navy)" text="EV Charging" />
    );
  }

  return null;
}

// Helper to keep code clean
const Badge = ({ color, textColor = 'white', text }) => (
  <div
    style={{ background: color, color: textColor }}
    className={Styles.SectorLabel_Container_Item}
  >
    {text}
  </div>
);

export default function SectorLabel({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <div className={Styles.SectorLabel}>
      <div className={Styles.SectorLabel_Container}>
        {data.map((sector, i) => (
          // We pass the raw item to the switch
          <LabelSwitch sector={sector} key={i} />
        ))}
      </div>
    </div>
  );
}
