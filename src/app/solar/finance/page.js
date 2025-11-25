import Link from 'next/link';
import React from 'react';

export default function FinancePage() {
  return (
    <div style={{ margin: '180px' }}>
      <h1>Get Started with Finance</h1>

      <h4
        style={{
          margin: '50px auto 10px',
          fontWeight: '400',
          fontSize: '4rem',
        }}
      >
        Solar PV & Battery Storage
      </h4>
      <Link
        href="https://www.phoenix-fc.co.uk/finance_landing?b=4991BD7B1993423F&t=2A9C018824984F2CB1EEFAFA"
        style={{ fontSize: '18px' }}
      >
        <img
          src="/images/finance-banners/solar_banner.png"
          alt="We offer finance."
          style={{ width: '100%', marginTop: '10px', maxWidth: '1200px' }}
        />
      </Link>
      <h4
        style={{
          margin: '70px auto 10px',
          fontWeight: '400',
          fontSize: '4rem',
        }}
      >
        Battery Storage
      </h4>
      <Link
        href="https://www.phoenix-fc.co.uk/finance_landing?b=CFFCCA89861C482C&t=2A9C018824984F2CB1EEFAFA"
        style={{ fontSize: '18px' }}
      >
        <img
          src="/images/finance-banners/battery_banner.png"
          alt="We offer finance."
          style={{ width: '100%', marginTop: '10px', maxWidth: '1200px' }}
        />
      </Link>
      <h4
        style={{
          margin: '70px auto 10px',
          fontWeight: '400',
          fontSize: '4rem',
        }}
      >
        EV Charge Points
      </h4>
      <Link
        href="https://www.phoenix-fc.co.uk/finance_landing?b=C8B8CE9EE290400B&t=2A9C018824984F2CB1EEFAFA"
        style={{ fontSize: '18px' }}
      >
        <img
          src="/images/finance-banners/ev_banner.png"
          alt="We offer finance."
          style={{ width: '100%', marginTop: '10px', maxWidth: '1200px' }}
        />
      </Link>
    </div>
  );
}
