import React from 'react';
import Script from 'next/script';
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
        <div className={Styles.Footer_Container}>
          <h2>Power & Control Ltd</h2>
          <div className={Styles.Footer_Container_Contact}>
            <div className={Styles.Footer_Container_Contact_Add}>
              <h4>Unit 2, Colemans Yard,</h4>
              <h4>Alfreton Road,</h4>
              <h4>Derby,</h4>
              <h4>DE21 4AL</h4>
            </div>
            <div className={Styles.Footer_Container_Contact_GIT}>
              <h4>
                <b>Phone:</b>
              </h4>
              <a href="tel:01332552320">
                <h4 style={{ marginBottom: '20px' }}>01332 552 320</h4>
              </a>
              <h4>
                <b>Email:</b>
              </h4>
              <a href="mailto:enquiries@pac-electrical.co.uk">
                <h4>enquiries@pac-electrical.co.uk</h4>
              </a>
            </div>
          </div>
        </div>
        <div className={Styles.Footer_Lower}>
          <div className={Styles.Footer_Lower_Container}>
            <p>
              © {new Date().getFullYear()} Power and Control Ltd. Use of this
              site constitutes acceptance of our Privacy Policy. The material on
              this site may not be reproduced, distributed, transmitted, cached
              or otherwise used, except with prior written permission of Power
              and Control Ltd.
            </p>
            {/* <div className={Styles.Footer_Lower_Container_dhweb}>
              <a href="https://dhweb.dev" target="_blank" rel="noreferrer">
                <img src="/logo/dhwebdev.svg" alt="DH Web Logo" />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
