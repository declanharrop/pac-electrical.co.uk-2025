'use client';

import { use100vh } from 'react-div-100vh';
import Link from 'next/link';
import { useQuoteFlow } from '@/Context/QuoteFlowContext';
import Styles from '@/Styles/Pages/QuoteFlow.module.css';

export default function QuoteStartPage() {
  const { chooseOption } = useQuoteFlow();
  const height = use100vh();

  // const containerHeight = height ? `calc(${height}px - 180px)` : '80vh';

  return (
    <div className={Styles.QuotePage}>
      <div className={Styles.QuotePage__Container}>
        {/* SOLAR OPTION */}
        <Link
          href="/quote/solar/1"
          className={`${Styles.QuotePage__LinkWrapper} ${Styles.solar}`}
          onClick={(e) => {
            e.preventDefault();
            chooseOption({ service: 'Solar' }, '/quote/solar/1');
          }}
        >
          <div className={Styles.QuotePage__Button}>
            <div style={{ position: 'relative' }}>
              <div
                className={Styles.IconMask}
                style={{
                  WebkitMaskImage: `url('/icons/solar-alt.svg')`,
                  maskImage: `url('/icons/solar-alt.svg')`,
                }}
                aria-hidden="true"
              />
            </div>
            <div className={Styles.QuotePage__Text_Wrapper}>
              <h5>GET A QUOTE</h5>
              <h2 className={Styles.QuotePage__Button_Text}>SOLAR</h2>
            </div>
          </div>
        </Link>

        {/* ELECTRICAL OPTION */}
        <Link
          href="/quote/electrical/1"
          className={`${Styles.QuotePage__LinkWrapper} ${Styles.electrical}`}
          onClick={(e) => {
            e.preventDefault();
            chooseOption({ service: 'Electrical' }, '/quote/electrical/1');
          }}
        >
          <div className={Styles.QuotePage__Button}>
            <div>
              <div
                className={Styles.IconMask}
                style={{
                  WebkitMaskImage: `url('/icons/electrical-alt.svg')`,
                  maskImage: `url('/icons/electrical-alt.svg')`,
                }}
                aria-hidden="true"
              />
            </div>
            <div className={Styles.QuotePage__Text_Wrapper}>
              <h5>GET A QUOTE</h5>
              <h2 className={Styles.QuotePage__Button_Text}>ELECTRICAL</h2>
            </div>
          </div>
        </Link>

        {/* EV OPTION */}
        <Link
          href="/quote/ev/1"
          className={`${Styles.QuotePage__LinkWrapper} ${Styles.ev}`}
          onClick={(e) => {
            e.preventDefault();
            chooseOption({ service: 'EV Charging' }, '/quote/ev/1');
          }}
        >
          <div className={Styles.QuotePage__Button}>
            <div style={{ position: 'relative' }}>
              <div
                className={Styles.IconMask}
                style={{
                  WebkitMaskImage: `url('/icons/ev-charging-alt.svg')`,
                  maskImage: `url('/icons/ev-charging-alt.svg')`,
                }}
                aria-hidden="true"
              />
            </div>
            <div className={Styles.QuotePage__Text_Wrapper}>
              <h5>GET A QUOTE</h5>
              <h2 className={Styles.QuotePage__Button_Text}>EV Charging</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
