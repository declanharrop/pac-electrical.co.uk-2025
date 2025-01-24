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
            link: '/us/news',
          },
          {
            name: 'More',
            dropdown: true,
          },
        ]}
        dropdownOptions={[
          {
            name: 'Contact Us',
            link: '/us/contact',
          },
          {
            name: 'Our Team',
            link: '/us/our-team',
          },
          {
            name: 'Recruitment',
            link: '/us/recruitment',
          },
          {
            name: 'Reviews',
            link: '/us/reviews',
          },
        ]}
      />
      {children}
    </div>
  );
}
