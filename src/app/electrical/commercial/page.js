// 'use client';

// import { useQuery } from '@apollo/client';
// import { STANDARD_PAGE_QUERY } from '@/lib/DataQueries';
// import StandardPageFrame from '@/Frames/StandardPageFrame';

// export default function CommercialElectricalPage() {
//   const { data } = useQuery(STANDARD_PAGE_QUERY, {
//     variables: {
//       id: 'cm6j6wkl3a1tm07mlc1jfmrt4',
//     },
//   });

//   if (data) {
//     const { page } = data;
//     return (
//       <div>
//         <StandardPageFrame data={page} />
//       </div>
//     );
//   }
// }

import { STANDARD_PAGE_QUERY } from '@/lib/DataQueries';
import StandardPageFrame from '@/Frames/StandardPageFrame';
import { getClient } from '@/Utils/client';

export async function generateMetadata() {
  const client = getClient();
  const { data } = await client.query({
    query: STANDARD_PAGE_QUERY,
    variables: { id: 'cm6j6wkl3a1tm07mlc1jfmrt4' },
  });

  const { page } = data;

  const METADATA = {
    Url: `https://pac-electrical.co.uk/electrical/commercial`,
    SiteName: `${page.metaTitle} - Power & Control Ltd`,
    Description: `${page.metaDescription}`,
  };
  return {
    title: METADATA.SiteName,
    applicationName: METADATA.SiteName,
    description: METADATA.Description,
    referrer: 'origin-when-cross-origin',
    url: METADATA.Url,
    openGraph: {
      title: METADATA.SiteName,
      siteName: METADATA.siteName,
      description: METADATA.Description,
      url: METADATA.Url,
      images: [
        {
          url: `${page.heroImage.image.url}`,
          width: 600, // Must be an absolute URL
        },
      ],
      locale: 'en_GB',
      type: 'article',
    },
  };
}
export default async function CommercialElectricalPage() {
  const client = getClient();
  const { data } = await client.query({
    query: STANDARD_PAGE_QUERY,
    variables: {
      id: 'cm6j6wkl3a1tm07mlc1jfmrt4',
    },
  });

  const { page } = data;

  return <StandardPageFrame data={page} />;
}
