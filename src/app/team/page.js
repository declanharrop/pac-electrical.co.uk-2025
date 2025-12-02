import { groq } from 'next-sanity';
import { blogClient } from '@/sanity/client';
import TeamPageFrame from '@/Frames/TeamPageFrame';

// Revalidate every minute
export const revalidate = 60;

export const metadata = {
  title: 'Meet the Team - Power & Control',
  description:
    'The expert electrical contractors and project managers behind Power & Control.',
};

// Query: Get active staff, sorted by 'position' number (1, 2, 3...)
const TEAM_QUERY = groq`*[_type == "author" && (isFormerStaff != true)] | order(position asc) {
  _id,
  name,
  jobTitle,
  "slug": slug.current,
  "avatarUrl": profilePhoto.asset->url,
  "avatarAlt": profilePhoto.alt
}`;

export default async function TeamPage() {
  const team = await blogClient.fetch(TEAM_QUERY);

  // DEBUGGING: Log to your terminal to see what's happening
  console.log('Team Data Fetched:', team);

  if (!team || team.length === 0) {
    return (
      <div style={{ padding: '100px', textAlign: 'center' }}>
        <h2>No team members found.</h2>
        <p>
          Please go to Sanity Studio, create an Author, and ensure you click{' '}
          <strong>Publish</strong>.
        </p>
      </div>
    );
  }

  return (
    <div style={{ marginTop: '-40px' }}>
      <TeamPageFrame team={team} />
    </div>
  );
}
