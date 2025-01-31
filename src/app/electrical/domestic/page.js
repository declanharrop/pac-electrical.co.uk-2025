'use client';

import { useQuery } from '@apollo/client';
import { STANDARD_PAGE_QUERY } from '@/lib/DataQueries';
import StandardPageFrame from '@/Frames/StandardPageFrame';

export default function DomesticElectricalPage() {
  const { data } = useQuery(STANDARD_PAGE_QUERY, {
    variables: {
      id: 'cm6knvq59bp2i06l63uuo3gva',
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
