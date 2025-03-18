'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// const METADATA = {
//   Url: 'https://pac-electrical.co.uk/case-studies',
//   SiteName: 'Commercial Electrical Experts - Power & Control',
//   Description:
//     "Explore Power & Control's Case Studies: Showcasing a range of electrical and renewable energy projects, from solar installations to complex commercial work.",
// };
// export const metadata = {
//   title: METADATA.SiteName,
//   applicationName: METADATA.SiteName,
//   description: METADATA.Description,
//   referrer: 'origin-when-cross-origin',
//   url: METADATA.Url,
//   openGraph: {
//     title: METADATA.SiteName,
//     description: METADATA.Description,
//     url: METADATA.Url,
//     images: [
//       {
//         url: `${METADATA.Url}/images/sustain1.webp`, // Must be an absolute URL
//         width: 800,
//         height: 600,
//       },
//     ],
//     locale: 'en_GB',
//     type: 'website',
//   },
// };

export default function AllCaseStudiesPage() {
  const router = useRouter();
  useEffect(() => {
    router.push('/case-studies/all');
  }, [router]);
  return null;
}
