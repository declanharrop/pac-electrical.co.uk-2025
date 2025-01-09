'use client';

import { GetAQuoteProvider } from '@/Context/GetAQuoteContext';

export default function GetAQuoteLayout({ children }) {
  return (
    <div style={{ marginTop: '100px', padding: '20px' }}>
      <GetAQuoteProvider>{children}</GetAQuoteProvider>
    </div>
  );
}
