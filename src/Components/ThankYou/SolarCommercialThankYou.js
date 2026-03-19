import Link from 'next/link';
import Styles from '@/Styles/Pages/CommercialThankYou.module.css';

export default function SolarCommercialThankYou() {
  const steps = [
    {
      title: 'Initial Engineering Review',
      description:
        'Our commercial design team is currently reviewing your submission, including roof space availability and current energy infrastructure.',
    },
    {
      title: 'Site Survey Arrangement',
      description:
        'A dedicated commercial project manager will contact you shortly to schedule a comprehensive, non-disruptive site survey at your premises.',
    },
    {
      title: 'Bespoke Proposal & ROI Analysis',
      description:
        'Following the survey, we will present a detailed technical proposal, including exact generation forecasts, DNO grid requirements, and a full financial ROI breakdown.',
    },
  ];

  return (
    <div
      className={Styles.Container}
      style={{
        '--theme-bg': 'var(--green-25)',
        '--theme-border': 'var(--green-50)',
        '--theme-accent': 'var(--light-green)',
      }}
    >
      <div className={Styles.Header}>
        <h1>Inquiry Received</h1>
        <p className={Styles.Subtitle}>
          Thank you for exploring a commercial solar partnership with us. Your
          request has been routed directly to our commercial engineering team.
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
