import LowerHeaderBar from '@/Components/Header/LowerHeaderBar';

export default function UsLayout({ children }) {
  return (
    <div>
      <LowerHeaderBar
        color="var(--navy)"
        title="Power & Control"
        links={[
          {
            name: 'Contact Us',
            link: '/us/contact',
          },
          {
            name: 'Our Work',
            link: '/us/case-studies',
          },
          {
            name: 'Our Team',
            link: '/us/our-team',
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
            name: 'Recruitment',
            link: '/us/recruitment',
          },
          {
            name: 'Reviews',
            link: '/us/reviews',
          },
          {
            name: '',
            link: '/us',
          },
          {
            name: '',
            link: '/us',
          },
          {
            name: '',
            link: '/us',
          },
          {
            name: '',
            link: '/us',
          },
        ]}
      />
      {children}
    </div>
  );
}
