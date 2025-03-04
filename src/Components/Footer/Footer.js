import React from 'react';
import Styles from './Footer.module.css';
import SmoothScrollLogosBlock from '../Blocks/SmoothScrollLogosBlock';

export default function Footer() {
  return (
    <>
      <div className="stripe" style={{ marginBottom: '-74px' }}>
        <svg height="100%" width="100%">
          <defs>
            <linearGradient id="grad3">
              <stop
                offset="0%"
                style={{ stopColor: 'var(--navy)', stopOpacity: '1' }}
              />
              <stop
                offset="20%"
                style={{ stopColor: 'var(--navy)', stopOpacity: '1' }}
              />
              <stop
                offset="40%"
                style={{ stopColor: 'var(--green)', stopOpacity: '1' }}
              />
              <stop
                offset="60%"
                style={{ stopColor: 'var(--green)', stopOpacity: '1' }}
              />
              <stop
                offset="80%"
                style={{ stopColor: 'var(--neon)', stopOpacity: '1' }}
              />
              <stop
                offset="100%"
                style={{ stopColor: 'var(--neon)', stopOpacity: '1' }}
              />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad3)" />
        </svg>
      </div>
      <SmoothScrollLogosBlock
        brands={[
          { brand: 'NICEIC', image: 'accreds/NICEIC.png' },
          { brand: 'Chas', image: 'accreds/CHAS.png' },
          { brand: 'HEIS', image: 'accreds/Heis.png' },
          { brand: 'MCS', image: 'accreds/MCS.png' },
          { brand: 'Renewable Energy Hub', image: 'accreds/TREH.png' },
          { brand: 'RCP', image: 'accreds/RCPE.png' },
          { brand: 'OLEV', image: 'accreds/olev.png' },
          { brand: 'Trust a Trader', image: 'accreds/Trustatrader.png' },
          { brand: 'Solar Nation', image: 'accreds/Solarnation.png' },
          { brand: 'Contstructionline', image: 'accreds/Constructionline.png' },
        ]}
      />
      <div className="stripe" style={{ marginTop: '-80px' }}>
        <svg height="100%" width="100%">
          <defs>
            <linearGradient id="grad3">
              <stop
                offset="0%"
                style={{ stopColor: 'var(--navy)', stopOpacity: '1' }}
              />
              <stop
                offset="20%"
                style={{ stopColor: 'var(--navy)', stopOpacity: '1' }}
              />
              <stop
                offset="40%"
                style={{ stopColor: 'var(--green)', stopOpacity: '1' }}
              />
              <stop
                offset="60%"
                style={{ stopColor: 'var(--green)', stopOpacity: '1' }}
              />
              <stop
                offset="80%"
                style={{ stopColor: 'var(--neon)', stopOpacity: '1' }}
              />
              <stop
                offset="100%"
                style={{ stopColor: 'var(--neon)', stopOpacity: '1' }}
              />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad3)" />
        </svg>
      </div>
      <div className={Styles.Footer}>
        <div className={Styles.Footer__Container}>
          <h3>Footer</h3>
        </div>
      </div>
    </>
  );
}
