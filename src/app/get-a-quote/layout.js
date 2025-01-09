'use client';

import { GetAQuoteProvider } from '@/Context/GetAQuoteContext';

export default function GetAQuoteLayout({ children }) {
  return (
    <div style={{ marginTop: '80px' }}>
      <GetAQuoteProvider>{children}</GetAQuoteProvider>
    </div>
  );
}
