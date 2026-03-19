import Link from 'next/link';
import Styles from '@/Styles/Pages/ThankYou.module.css';

export default function ElectricalDomesticThankYou() {
  const steps = [
    {
      title: 'The Review',
      text: 'Our team reviews your inquiry to understand exactly what electrical work you need, ensuring we send the right expert for the job.',
    },
    {
      title: 'Scheduling the Visit',
      text: 'We will give you a call to arrange a convenient time to visit your property. We always aim to work around your schedule.',
    },
    {
      title: 'Expert Assessment',
      text: 'Our certified electrician arrives to assess the job, identify any faults, or plan the new installation, keeping you informed every step of the way.',
    },
    {
      title: 'Transparent Quote',
      text: 'For larger jobs, we will provide a clear, fixed-price quote so you know exactly what to expect before any tools are lifted.',
    },
    {
      title: 'Safe & Tidy Execution',
      text: 'We carry out the work to the highest safety standards. We pride ourselves on respecting your home and always cleaning up before we leave.',
    },
    {
      title: 'Testing & Certification',
      text: 'Once the work is complete, we rigorously test the circuits and provide you with the relevant electrical safety certificates for your records.',
    },
  ];

  return (
    <div
      className={Styles.Container}
      style={{
        // Matching the Navy theme here as well
        '--theme-bg': 'var(--navy-25)',
        '--theme-border': 'var(--navy-50)',
        '--theme-accent': 'var(--light-grey)',
      }}
    >
      <div className={Styles.Header}>
        <h1>Inquiry Submitted!</h1>
        <p className={Styles.Subtitle}>
          Your home is in safe hands. Our certified electricians are reviewing
          your request and will be in touch shortly to discuss your
          requirements.
        </p>
      </div>

      {/* THE ELECTRICAL TIMELINE */}
      <div>
        <h3 className={Styles.TimelineTitle}>What Happens Next?</h3>
        <div className={Styles.StepsList}>
          {steps.map((step, index) => (
            <div key={index} className={Styles.StepCard}>
              <div className={Styles.StepAccent} />
              <div className={Styles.StepContent}>
                <div className={Styles.StepNumber}>STEP {index + 1}</div>
                <div className={Styles.StepTextWrapper}>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '4.8rem' }}>
        <Link href="/">
          <button type="button" className="button-alt">
            <p>Return to Homepage</p>
          </button>
        </Link>
      </div>
    </div>
  );
}
