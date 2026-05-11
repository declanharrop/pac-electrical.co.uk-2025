import { notFound } from 'next/navigation';
import { client } from '@/sanity/client';
import JobApplicationForm from '@/ComponentsV2/ContentBlocks/Static/JobApplicationForm';

export const revalidate = 60;

async function getJob(slug) {
  const query = `
    *[_type == "job" && slug.current == $slug && isActive == true][0] {
      _id,
      title,
      "slug": slug.current,
      shortDescription,
      description,
      location,
      salary,
      division,
      requirements
    }
  `;
  return client.fetch(query, { slug }, { next: { tags: ['job'] } });
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const job = await getJob(slug);
  if (!job) return {};
  return {
    title: `${job.title} | Careers at PAC Electrical`,
    description: job.shortDescription,
  };
}

export default async function JobDetailPage({ params }) {
  const { slug } = await params;
  const job = await getJob(slug);

  if (!job) notFound();

  return (
    <main style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', textAlign: 'left' }}>
      {/* Job header */}
      <section
        style={{
          padding: '8rem 2rem 5rem',
          borderBottom: '1px solid #1e1e1e',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-urbanist)',
              fontSize: '1.3rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--green)',
              marginBottom: '1.5rem',
            }}
          >
            {job.division ?? 'Open Position'}
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-good-times)',
              fontSize: 'clamp(3rem, 4vw, 5rem)',
              color: 'white',
              lineHeight: 1.1,
              marginBottom: '2rem',
            }}
          >
            {job.title}
          </h1>

          {(job.location || job.salary) && (
            <div
              style={{
                display: 'flex',
                gap: '2rem',
                flexWrap: 'wrap',
                marginBottom: '2.5rem',
              }}
            >
              {job.location && (
                <span
                  style={{
                    fontFamily: 'var(--font-urbanist)',
                    fontSize: '1.5rem',
                    color: '#888',
                  }}
                >
                  📍 {job.location}
                </span>
              )}
              {job.salary && (
                <span
                  style={{
                    fontFamily: 'var(--font-urbanist)',
                    fontSize: '1.5rem',
                    color: '#888',
                  }}
                >
                  💰 {job.salary}
                </span>
              )}
            </div>
          )}

          <p
            style={{
              fontFamily: 'var(--font-urbanist)',
              fontSize: '1.8rem',
              color: '#aaa',
              lineHeight: 1.7,
              maxWidth: '640px',
              margin: '0',
            }}
          >
            {job.shortDescription}
          </p>
        </div>
      </section>

      {/* Job description / requirements */}
      {(job.description || job.requirements) && (
        <section
          style={{ padding: '5rem 2rem', borderBottom: '1px solid #1e1e1e' }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {job.description && (
              <>
                <h2
                  style={{
                    fontFamily: 'var(--font-good-times)',
                    fontSize: '2rem',
                    color: 'white',
                    marginBottom: '1.5rem',
                  }}
                >
                  About the Role
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-urbanist)',
                    fontSize: '1.6rem',
                    color: '#aaa',
                    lineHeight: 1.75,
                    marginBottom: '3rem',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {job.description}
                </p>
              </>
            )}

            {job.requirements && Array.isArray(job.requirements) && (
              <>
                <h2
                  style={{
                    fontFamily: 'var(--font-good-times)',
                    fontSize: '2rem',
                    color: 'white',
                    marginBottom: '1.5rem',
                  }}
                >
                  What We&apos;re Looking For
                </h2>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  {job.requirements.map((req, i) => (
                    <li
                      key={i}
                      style={{
                        fontFamily: 'var(--font-urbanist)',
                        fontSize: '1.6rem',
                        color: '#aaa',
                        lineHeight: 1.75,
                        marginBottom: '0.8rem',
                      }}
                    >
                      {req}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </section>
      )}

      {/* Application form */}
      <JobApplicationForm jobTitle={job.title} />
    </main>
  );
}
