import { Suspense } from 'react';
import { QuoteFlowProvider } from '@/Context/QuoteFlowContext';

// Standardized metadata mapping
export const metadata = {
  title: 'Get a quote from Power & Control',
  description:
    'Request a Quote: Power & Control provides professional electrical and renewable energy solutions. Get your personalised quote for solar, EV chargers, or commercial projects.',
  openGraph: {
    title: 'Get a quote from Power & Control',
    description:
      'Request a Quote: Power & Control provides professional electrical and renewable energy solutions.',
    images: [
      {
        url: 'https://pac-electrical.co.uk/images/comsolar26.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
};

export default function QuoteLayout({ children }) {
  return (
    <div style={{ marginTop: '80px' }}>
      <Suspense fallback={<div>Loading...</div>}>
        <QuoteFlowProvider>{children}</QuoteFlowProvider>
      </Suspense>
    </div>
  );
}
