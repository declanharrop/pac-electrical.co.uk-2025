'use client';

import { useQuery } from '@apollo/client';
import { STANDARD_PAGE_QUERY } from '@/lib/DataQueries';
import StandardPageFrame from '@/Frames/StandardPageFrame';

export default function CommercialElectricalPage() {
  const { data } = useQuery(STANDARD_PAGE_QUERY, {
    variables: {
      id: 'cm6j6wkl3a1tm07mlc1jfmrt4',
    },
  });

  if (data) {
    const { page } = data;
    return (
      <div>
        <StandardPageFrame data={page} />
      </div>
    );
  }
}
