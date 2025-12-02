import LowerHeaderBar from '@/Components/Header/LowerHeaderBar';

export default function UsLayout({ children }) {
  return (
    <div>
      <LowerHeaderBar
        color="var(--navy)"
        title="About Us"
        links={[
          {
            name: 'Our Work',
            link: '/case-studies/electrical',
          },
          {
            name: 'News',
            link: '/news',
          },
          {
            name: 'More',
            dropdown: true,
          },
        ]}
        dropdownOptions={[
          {
            name: 'Our Team',
            link: '/team',
          },
          {
            name: 'Contact Us',
            link: '/us/contact',
          },
          // {
          //   name: 'Recruitment',
          //   link: '/us/recruitment',
          // },
          // {
          //   name: 'Reviews',
          //   link: '/us/reviews',
          // },
        ]}
      />
      {children}
    </div>
  );
}
