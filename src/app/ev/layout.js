import LowerHeaderBar from '@/Components/Header/LowerHeaderBar';

export default function EVLayout({ children }) {
  return (
    <div>
      <LowerHeaderBar
        color="var(--neon)"
        title="EV Charge Points"
        links={[
          {
            name: 'Get a Quote',
            link: '/ev/quote',
          },
          {
            name: 'Charge Points',
            link: '/ev/chargers',
          },
          {
            name: 'Our Work',
            link: '/ev/case-studies',
          },
          {
            name: 'More',
            dropdown: true,
          },
        ]}
        dropdownOptions={[
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
