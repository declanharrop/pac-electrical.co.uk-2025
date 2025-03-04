import LowerHeaderBar from '@/Components/Header/LowerHeaderBar';

export default function ElectricalLayout({ children }) {
  return (
    <div>
      <LowerHeaderBar
        color="var(--navy)"
        title="Electrical"
        links={[
          {
            name: 'Our Work',
            link: '/case-studies/electrical',
          },
          {
            name: 'More',
            dropdown: true,
          },
        ]}
        dropdownOptions={[
          {
            name: 'Commercial Electrical',
            link: '/electrical/commercial',
          },
          {
            name: 'Large Domestic',
            link: '/electrical/domestic',
          },
          {
            name: 'LED Lighting Systems',
            link: '/electrical/led',
          },
          {
            name: 'Infrared Heating Systems',
            link: '/electrical/infrared',
          },
          {
            name: 'Testing & Inspections',
            link: '/electrical/testing',
          },
          {
            name: 'Fault Finding & Maintenance',
            link: '/electrical/fault',
          },
          {
            name: 'Data Communication',
            link: '/electrical/data',
          },
        ]}
      />
      {children}
    </div>
  );
}
