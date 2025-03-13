import LowerHeaderBar from '@/Components/Header/LowerHeaderBar';

export default function EVLayout({ children }) {
  return (
    <div>
      <LowerHeaderBar
        color="var(--neon)"
        title="EV Charging"
        links={[
          // {
          //   name: 'Charge Points',
          //   link: '/ev/chargers',
          // },
          {
            name: 'Our Work',
            link: '/case-studies/ev',
          },
          {
            name: 'More',
            dropdown: true,
          },
        ]}
        dropdownOptions={[
          // {
          //   name: 'Our Installation Process',
          //   link: '/ev/installation',
          // },
          {
            name: 'Home EV Charge Points',
            link: '/ev/domestic',
          },
          {
            name: 'Workplace EV Charge Points',
            link: '/ev/commercial',
          },
        ]}
      />
      {children}
    </div>
  );
}
