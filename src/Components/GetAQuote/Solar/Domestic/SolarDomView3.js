import { useContext } from 'react';
import { GetAQuoteContext } from '@/Context/GetAQuoteContext';
import Styles from '../../GetAQuote.module.css';

export default function SolarDomView3() {
  const { chooseOption } = useContext(GetAQuoteContext);

  return (
    <>
      <h4>What is the size of your home?</h4>
      <div className={Styles.Solar__GAQ__View4__Container}>
        <button
          className={Styles.GetAQuotePage__Button}
          type="button"
          onClick={() =>
            chooseOption({ homeSize: '2/3 Bed' }, '/get-a-quote/solar/dom/5')
          }
        >
          <img
            className={Styles.GetAQuotePage__Button_Icon}
            src="/icons/home-alt.svg"
            alt="Solar Icon"
          />
          <h2 className={Styles.GetAQuotePage__Button_Text_SM}>2/3 Bed</h2>
        </button>
        <button
          className={Styles.GetAQuotePage__Button}
          type="button"
          onClick={() =>
            chooseOption(
              { homeSize: '4 Bed Detatched' },
              '/get-a-quote/solar/dom/5',
            )
          }
        >
          <img
            className={Styles.GetAQuotePage__Button_Icon}
            src="/icons/4bed-home-alt.svg"
            alt="Solar Icon"
          />
          <h2 className={Styles.GetAQuotePage__Button_Text_SM}>
            4 Bed Detatched
          </h2>
        </button>
        <button
          className={Styles.GetAQuotePage__Button}
          type="button"
          onClick={() =>
            chooseOption(
              { homeSize: 'Large Detatched' },
              '/get-a-quote/solar/dom/5',
            )
          }
        >
          <img
            className={Styles.GetAQuotePage__Button_Icon}
            src="/icons/large-home-alt.svg"
            alt="Solar Icon"
          />
          <h2 className={Styles.GetAQuotePage__Button_Text_SM}>
            Large Detatched
          </h2>
        </button>
        <button
          className={Styles.GetAQuotePage__Button}
          type="button"
          onClick={() =>
            chooseOption({ homeSize: 'Other' }, '/get-a-quote/solar/dom/5')
          }
        >
          <img
            className={Styles.GetAQuotePage__Button_Icon}
            src="/icons/other-home-alt.svg"
            alt="Solar Icon"
          />
          <h2 className={Styles.GetAQuotePage__Button_Text_SM}>Other</h2>
        </button>
      </div>
    </>
  );
}
