import Link from 'next/link';
import Styles from '@/Styles/Pages/CommercialThankYou.module.css';

export default function ElectricalCommercialThankYou() {
  const steps = [
    {
      title: 'Initial Scope Assessment',
      description:
        'Our commercial team is reviewing your project requirements, whether it involves emergency lighting, data cabling, or complex 3-phase distribution.',
    },
    {
      title: 'Site Survey & Compliance Check',
      description:
        'A dedicated project manager will contact you to arrange a thorough site visit. We will assess the premises to ensure all proposed work meets current BS 7671 electrical regulations.',
    },
    {
      title: 'Detailed Proposal & RAMS',
      description:
        'Following the survey, we will provide a comprehensive proposal, transparent costings, and all required Risk Assessments and Method Statements (RAMS) prior to commencing work.',
    },
  ];

  return (
    <div
      className={Styles.Container}
      style={{
        // Using a professional Navy and Light Grey theme for Electrical
        '--theme-bg': 'var(--navy-25)',
        '--theme-border': 'var(--navy-50)',
        '--theme-accent': 'var(--light-grey)',
      }}
    >
      <div className={Styles.Header}>
        <h1>Inquiry Received</h1>
        <p className={Styles.Subtitle}>
          Thank you for trusting us with your commercial electrical
          requirements. Your request has been routed directly to our certified
          electrical engineering team.
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
