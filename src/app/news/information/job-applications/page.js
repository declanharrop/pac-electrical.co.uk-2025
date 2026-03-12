import Script from 'next/script';
import ImageHero from '@/Components/Hero/ImageHero';
import style from '@/Styles/Information/JobAppPage.module.css';

// const JobApplicationStyles = styled.div`
//   h3 {
//     margin: 40px auto 0;
//     max-width: 800px;
//   }
//   iframe {
//     border: none;
//   }
// `;

const METADATA = {
  Url: 'https://pac-electrical.co.uk',
  SiteName: 'Power & Control - Solar Installer & Commercial Electrician',
  Description:
    'Trusted electrical and renewable energy contractors, Power & Control, serving the Midlands and beyond. Specialising in solar, EV charging, and commercial electrical.',
};
export const metadata = {
  title: METADATA.SiteName,
  applicationName: METADATA.SiteName,
  description: METADATA.Description,
  referrer: 'origin-when-cross-origin',
  url: METADATA.Url,
  openGraph: {
    title: METADATA.SiteName,
    description: METADATA.Description,
    url: METADATA.Url,
    images: [
      {
        url: `${METADATA.Url}/images/sustain1.webp`, // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
};

export default function JobApplications() {
  return (
    <>
      <Script src="https://app-cdn.clickup.com/assets/js/forms-embed/v1.js" />

      <ImageHero height="20vh" title="Apply for a job" />
      <iframe
        className={style.Iframe}
        title="Job Application Form"
        src="https://forms.clickup.com/9006129973/f/8ccx8tn-1528/0KHV8MEK3FP66COPXA"
        onWheel=""
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      >
        Loading…
      </iframe>
    </>
  );
}
