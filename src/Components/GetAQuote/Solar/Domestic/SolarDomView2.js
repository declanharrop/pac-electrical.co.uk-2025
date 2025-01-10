import { useContext } from 'react';
import { GetAQuoteContext } from '@/Context/GetAQuoteContext';
import Styles from '../../GetAQuote.module.css';

export default function SolarDomView2() {
  const { chooseOption } = useContext(GetAQuoteContext);

  return (
    <>
      <h4>Do You Know Your Annual Electricity Usage?</h4>
      <div className={Styles.Solar__GAQ__View2__Container}>
        <button
          className={Styles.GetAQuotePage__Button}
          type="button"
          onClick={() =>
            chooseOption({ elecUsage: '' }, '/get-a-quote/solar/dom/4')
          }
        >
          <img
            className={Styles.GetAQuotePage__Button_Icon}
            src="/icons/yes-alt.svg"
            alt="Solar Icon"
          />
          <h2 className={Styles.GetAQuotePage__Button_Text_SM}>Yes</h2>
        </button>
        <button
          className={Styles.GetAQuotePage__Button}
          type="button"
          onClick={() =>
            chooseOption({ elecUsage: '' }, '/get-a-quote/solar/dom/3')
          }
        >
          <img
            className={Styles.GetAQuotePage__Button_Icon}
            src="/icons/no-alt.svg"
            alt="Solar Icon"
          />
          <h2 className={Styles.GetAQuotePage__Button_Text_SM}>I'm not sure</h2>
        </button>
      </div>
    </>
  );
}
