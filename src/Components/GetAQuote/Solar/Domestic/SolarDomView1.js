import { useContext } from 'react';
import { GetAQuoteContext } from '@/Context/GetAQuoteContext';
import Styles from '../../GetAQuote.module.css';

export default function SolarDomView1() {
  const { chooseOption } = useContext(GetAQuoteContext);

  return (
    <>
      <h4>What are you looking for today?</h4>
      <div className={Styles.Solar__GAQ__View1__Container}>
        <button
          className={Styles.GetAQuotePage__Button}
          type="button"
          onClick={() =>
            chooseOption(
              { solarType: 'Solar Only' },
              '/get-a-quote/solar/dom/2',
            )
          }
        >
          <img
            className={Styles.GetAQuotePage__Button_Icon}
            src="/icons/solar-alt.svg"
            alt="Solar Icon"
          />
          <h2 className={Styles.GetAQuotePage__Button_Text_SM}>SOLAR PV</h2>
        </button>
        <button
          className={Styles.GetAQuotePage__Button}
          type="button"
          onClick={() =>
            chooseOption(
              { solarType: 'Solar Only' },
              '/get-a-quote/solar/dom/2',
            )
          }
        >
          <img
            className={Styles.GetAQuotePage__Button_Icon}
            src="/icons/solar-bat-alt.svg"
            alt="Solar Icon"
          />
          <h2 className={Styles.GetAQuotePage__Button_Text_SM}>
            Solar PV & Battery Storage
          </h2>
        </button>
        <button
          className={Styles.GetAQuotePage__Button}
          type="button"
          onClick={() =>
            chooseOption(
              { solarType: 'Solar Only' },
              '/get-a-quote/solar/dom/2',
            )
          }
        >
          <img
            className={Styles.GetAQuotePage__Button_Icon}
            src="/icons/solar-bat-ev-alt.svg"
            alt="Solar Icon"
          />
          <h2 className={Styles.GetAQuotePage__Button_Text_SM}>
            Solar PV, Battery Storage & EV Charger
          </h2>
        </button>
      </div>
    </>
  );
}
