import Link from 'next/link';
import Styles from '@/Styles/Pages/CommercialThankYou.module.css';

export default function EvCommercialThankYou() {
  const steps = [
    {
      title: 'Initial Infrastructure Review',
      description:
        'Our commercial design team is currently reviewing your submission, assessing your proposed parking layout and estimated fleet charging requirements.',
    },
    {
      title: 'Site Survey & DNO Assessment',
      description:
        'A dedicated commercial project manager will contact you to arrange a site visit.',
    },
    {
      title: 'Bespoke Proposal & Software Integration',
      description:
        'Following the survey, we will present a comprehensive proposal covering groundworks, hardware installation.',
    },
  ];

  return (
    <div
      className={Styles.Container}
      style={{
        // Injecting the EV Theme colors into the Commercial layout
        '--theme-bg': 'var(--navy-25)',
        '--theme-border': 'var(--neon-50)',
        '--theme-accent': 'var(--neon)',
      }}
    >
      <div className={Styles.Header}>
        <h1>Inquiry Received</h1>
        <p className={Styles.Subtitle}>
          Thank you for exploring a commercial EV infrastructure partnership
          with us. Your request has been routed directly to our commercial
          engineering team.
        </p>
      </div>

      <div className={Styles.ProcessCard}>
        <h3>What to Expect Next</h3>

        <div className={Styles.StepList}>
          {steps.map((step, index) => (
            <div key={index} className={Styles.Step}>
              <div className={Styles.StepNumber}>{index + 1}</div>
              <div className={Styles.StepContent}>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={Styles.Footer}>
        <Link href="/">
          <button className="button-alt">
            <p>Return to Homepage</p>
          </button>
        </Link>
      </div>
    </div>
  );
}
