import LowerHeaderBar from '@/Components/Header/LowerHeaderBar';

export default function EVLayout({ children }) {
  return (
    <div>
      <LowerHeaderBar
        color="var(--neon)"
        title="EV Charging"
        links={[
          {
            name: 'Charge Points',
            link: '/ev/chargers',
          },
          {
            name: 'More',
            dropdown: true,
          },
        ]}
        dropdownOptions={[
          {
            name: 'Our Work',
            link: '/case-studies/ev',
          },
          {
            name: 'Our Installation Process',
            link: '/ev/installation',
          },
          {
            name: 'Home EV Charge Points',
            link: '/ev/',
          },
          {
            name: 'Workplace EV Charge Points',
            link: '/ev/',
          },
        ]}
      />
      {children}
    </div>
  );
}
