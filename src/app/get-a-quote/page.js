'use client';

import { useContext } from 'react';
import { use100vh } from 'react-div-100vh';
import Image from 'next/image';
import { GetAQuoteContext } from '@/Context/GetAQuoteContext';
import Styles from '@/Styles/Pages/GetAQuote.module.css';

export default function GetAQuotePage() {
  const { chooseOption } = useContext(GetAQuoteContext);
  const height = use100vh();
  if (height) {
    return (
      <div
        className={Styles.GetAQuotePage}
        style={{ height: `calc(${height}px - 160px)` }}
      >
        <div className={Styles.GetAQuotePage__Container}>
          <button
            className={Styles.GetAQuotePage__Button}
            type="button"
            onClick={() =>
              chooseOption({ service: 'Solar' }, '/get-a-quote/solar/1')
            }
          >
            <div>
              <div style={{ position: 'relative' }}>
                <Image
                  style={{ marginBottom: '40px' }}
                  width={120}
                  height={120}
                  src="/icons/solar-alt.svg"
                  alt="Solar Icon"
                />
              </div>
              <h5>GET A QUOTE</h5>
              <h2 className={Styles.GetAQuotePage__Button_Text}>SOLAR</h2>
            </div>
          </button>
          <button
            className={Styles.GetAQuotePage__Button}
            type="button"
            onClick={() =>
              chooseOption(
                { service: 'Electrical' },
                '/get-a-quote/electrical/1',
              )
            }
          >
            <div style={{ position: 'relative' }}>
              <Image
                style={{ marginBottom: '40px' }}
                width={120}
                height={120}
                src="/icons/electrical-alt.svg"
                alt="Solar Icon"
              />
            </div>
            <h5>GET A QUOTE</h5>
            <h2 className={Styles.GetAQuotePage__Button_Text}>ELECTRICAL</h2>
          </button>
          <button
            className={Styles.GetAQuotePage__Button}
            type="button"
            onClick={() =>
              chooseOption({ service: 'EV Charging' }, '/get-a-quote/ev/1')
            }
          >
            <div style={{ position: 'relative' }}>
              <Image
                style={{ marginBottom: '40px' }}
                width={120}
                height={120}
                src="/icons/ev-charging-alt.svg"
                alt="Solar Icon"
              />
            </div>
            <h5>GET A QUOTE</h5>
            <h2 className={Styles.GetAQuotePage__Button_Text}>EV Charging</h2>
          </button>
        </div>
      </div>
    );
  }
}
