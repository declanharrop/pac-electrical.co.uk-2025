import { getClient } from '@/Lib/client';
import { JOB } from '@/Lib/queries';
import RecruitmentTemplate from '@/Templates/RecruitmentTemplate';

export default async function Recruitment({ params }) {
  const client = getClient();
  const pathname = params.slug[0];

  const { data: job } = await client.query({
    query: JOB,
    variables: {
      slug: pathname,
    },
  });

  return <RecruitmentTemplate job={job.jobs[0]} />;
}
