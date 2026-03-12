'use client';

import { useContext } from 'react';
import { use100vh } from 'react-div-100vh';
import Image from 'next/image';
import Link from 'next/link'; // SEO UPGRADE: Imported Next.js Link
import { GetAQuoteContext } from '@/Context/GetAQuoteContext';
import Styles from '@/Styles/Pages/GetAQuote.module.css';

export default function GetAQuotePage() {
  const { chooseOption } = useContext(GetAQuoteContext);
  const height = use100vh();

  if (height) {
    return (
      <div
        className={Styles.GetAQuotePage}
        style={{ height: `calc(${height}px - 180px)` }}
      >
        {/* SEO UPGRADE: Added a semantic H1. You can add a 'sr-only' class in your CSS if you want it visually hidden but readable by Google */}
        <h1 style={{ display: 'none' }}>
          Get a Free Quote for Solar, Electrical, or EV Charging
        </h1>

        <div className={Styles.GetAQuotePage__Container}>
          {/* SEO UPGRADE: Changed <button> to <Link> for crawlability */}
          <Link
            href="/get-a-quote/solar/1"
            onClick={() =>
              chooseOption({ service: 'Solar' }, '/get-a-quote/solar/1')
            }
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'block',
            }}
          >
            <div className={Styles.GetAQuotePage__Button}>
              <div style={{ position: 'relative' }}>
                <Image
                  style={{ marginBottom: '20px' }}
                  width={100}
                  height={90}
                  src="/icons/solar-alt.svg"
                  alt="Solar Panel Installation Icon" // SEO UPGRADE: Better Alt Text
                />
              </div>
              <h5>GET A QUOTE</h5>
              <h2 className={Styles.GetAQuotePage__Button_Text}>SOLAR</h2>
            </div>
          </Link>

          <Link
            href="/get-a-quote/electrical/1"
            onClick={() =>
              chooseOption(
                { service: 'Electrical' },
                '/get-a-quote/electrical/1',
              )
            }
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'block',
            }}
          >
            <div className={Styles.GetAQuotePage__Button}>
              <div>
                <Image
                  style={{ marginBottom: '20px' }}
                  width={100}
                  height={90}
                  src="/icons/electrical-alt.svg"
                  alt="Commercial Electrical Services Icon" // SEO UPGRADE: Fixed Alt Text
                />
              </div>
              <h5>GET A QUOTE</h5>
              <h2 className={Styles.GetAQuotePage__Button_Text}>ELECTRICAL</h2>
            </div>
          </Link>

          <Link
            href="/get-a-quote/ev/1"
            className={Styles.GetAQuotePage__Button}
            onClick={() =>
              chooseOption({ service: 'EV Charging' }, '/get-a-quote/ev/1')
            }
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'block',
            }}
          >
            <div className={Styles.GetAQuotePage__Button}>
              <div style={{ position: 'relative' }}>
                <Image
                  style={{ marginBottom: '20px' }}
                  width={100}
                  height={90}
                  src="/icons/ev-charging-alt.svg"
                  alt="EV Charger Installation Icon" // SEO UPGRADE: Fixed Alt Text
                />
              </div>
              <h5>GET A QUOTE</h5>
              <h2 className={Styles.GetAQuotePage__Button_Text}>EV Charging</h2>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
