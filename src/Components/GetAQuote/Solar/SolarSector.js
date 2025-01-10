import { useContext } from 'react';
import { GetAQuoteContext } from '@/Context/GetAQuoteContext';
import Styles from '../GetAQuote.module.css';

export default function SolarSector() {
  const { chooseOption } = useContext(GetAQuoteContext);

  return (
    <div className={Styles.Solar__GAQ__Sector__Container}>
      <button
        className={Styles.GetAQuotePage__Button}
        type="button"
        onClick={() =>
          chooseOption({ sector: 'domestic' }, '/get-a-quote/solar/dom/1')
        }
      >
        <img
          className={Styles.GetAQuotePage__Button_Icon}
          src="/icons/home-alt.svg"
          alt="Solar Icon"
        />
        <h5>Solar</h5>
        <h2 className={Styles.GetAQuotePage__Button_Text}>DOMESTIC</h2>
      </button>

      <button
        className={Styles.GetAQuotePage__Button}
        type="button"
        onClick={() =>
          chooseOption({ sector: 'commercial' }, '/get-a-quote/solar/com/1')
        }
      >
        <img
          className={Styles.GetAQuotePage__Button_Icon}
          src="/icons/commercial-alt.svg"
          alt="Solar Icon"
        />
        <h5>Solar</h5>
        <h2 className={Styles.GetAQuotePage__Button_Text}>COMMERCIAL</h2>
      </button>
    </div>
  );
}
