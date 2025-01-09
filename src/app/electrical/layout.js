import LowerHeaderBar from '@/Components/Header/LowerHeaderBar';

export default function ElectricalLayout({ children }) {
  return (
    <div>
      <LowerHeaderBar
        color="var(--navy)"
        title="Electrical"
        links={[
          {
            name: 'Contact Us',
            link: '/electrical/contact',
          },
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
            name: 'Infared Heating Systems',
            link: '/electrical/infared',
          },
          {
            name: 'Testing & Inspections',
            link: '/electrical/testing',
          },
          {
            name: 'Fault Finding',
            link: '/electrical/fault',
          },
          {
            name: 'Repairs & Maintenance',
            link: '/electrical/repairs',
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
