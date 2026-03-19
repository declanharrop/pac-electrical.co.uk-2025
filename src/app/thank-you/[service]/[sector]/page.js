import SolarDomesticThankYou from '@/Components/ThankYou/SolarDomesticThankYou';
import SolarCommercialThankYou from '@/Components/ThankYou/SolarCommercialThankYou';
import EvDomesticThankYou from '@/Components/ThankYou/EvDomesticThankYou';

export default async function ThankYouPage({ params }) {
  const resolvedParams = await params;
  const service = resolvedParams?.service;
  const sector = resolvedParams?.sector;

  // Solar Routes
  if (service === 'solar' && sector === 'domestic') {
    return <SolarDomesticThankYou />;
  }
  if (service === 'solar' && sector === 'commercial') {
    return <SolarCommercialThankYou />;
  }

  // EV Routes
  if (service === 'ev%20charging' && sector === 'domestic') {
    return <EvDomesticThankYou />;
  }

  // Fallback
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1>Thank you for your enquiry!</h1>
      <p>
        Our team will be in touch shortly. (Service: {service}, Sector: {sector}
        )
      </p>
    </div>
  );
}
