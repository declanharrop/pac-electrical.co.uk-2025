'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import SolarQuote from '@/Components/GetAQuote/Solar/SolarQuote';
import EVQuote from '@/Components/GetAQuote/EV/EVQuote';
import ElecQuote from '@/Components/GetAQuote/Electrical/ElecQuote';

export default function QuoteJourney(params) {
  const router = useRouter();
  const location = params.params.slug;
  const service = location[0];
  const step = location[1];
  const sector = location[1];
  const subStep = location[2];

  if (service === 'solar') {
    return <SolarQuote step={subStep} sector={sector} />;
  }
  if (service === 'ev') {
    return <EVQuote step={step} />;
  }
  if (service === 'electrical') {
    return <ElecQuote step={step} />;
  }
  return (
    <div
      style={{
        marginTop: '100px',
        height: 'calc(90vh - 100px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h4 style={{ marginBottom: '20px' }}>
        Ooops, looks like you've hit a dead end!
      </h4>
      <h4 style={{ marginBottom: '40px' }}>Let's start your quote again</h4>
      <button
        className="button-alt"
        type="button"
        onClick={() => router.push('/get-a-quote')}
      >
        Start Quote
      </button>
    </div>
  );
}
