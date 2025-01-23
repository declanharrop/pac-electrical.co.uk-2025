import { useContext } from 'react';
import { GetAQuoteContext } from '@/Context/GetAQuoteContext';
import Styles from '../../GetAQuote.module.css';

export default function SolarDomView10() {
  const { chooseOption } = useContext(GetAQuoteContext);

  return (
    <>
      <h4>Where did you hear about us?</h4>
      <div className={Styles.Solar__GAQ__View10__Container}>
        <button
          className={Styles.GetAQuotePage__Button_V10}
          type="button"
          onClick={() =>
            chooseOption({ heardFrom: 'Google' }, '/get-a-quote/solar/dom/9')
          }
        >
          <img
            className={Styles.GetAQuotePage__Button_Icon_P10}
            src="/icons/heard-from/google.svg"
            alt="Solar Icon"
          />
          <h2 className={Styles.GetAQuotePage__Button_Text_SM}>Google</h2>
        </button>
        <button
          className={Styles.GetAQuotePage__Button_V10}
          type="button"
          onClick={() =>
            chooseOption({ heardFrom: 'Linked In' }, '/get-a-quote/solar/dom/9')
          }
        >
          <img
            className={Styles.GetAQuotePage__Button_Icon_P10}
            src="/icons/heard-from/linkedin.svg"
            alt="LinkedIn Icon"
          />
          <h2 className={Styles.GetAQuotePage__Button_Text_SM}>LinkedIn</h2>
        </button>
        <button
          className={Styles.GetAQuotePage__Button_V10}
          type="button"
          onClick={() =>
            chooseOption({ heardFrom: 'Facebook' }, '/get-a-quote/solar/dom/9')
          }
        >
          <img
            className={Styles.GetAQuotePage__Button_Icon_P10}
            src="/icons/heard-from/facebook.svg"
            alt="Facebook Icon"
          />
          <h2 className={Styles.GetAQuotePage__Button_Text_SM}>Facebook</h2>
        </button>
        <button
          className={Styles.GetAQuotePage__Button_V10}
          type="button"
          onClick={() =>
            chooseOption({ heardFrom: 'Instagram' }, '/get-a-quote/solar/dom/9')
          }
        >
          <img
            className={Styles.GetAQuotePage__Button_Icon_P10}
            src="/icons/heard-from/instagram.svg"
            alt="Instagram Icon"
          />
          <h2 className={Styles.GetAQuotePage__Button_Text_SM}>Instagram</h2>
        </button>
        <button
          className={Styles.GetAQuotePage__Button_V10}
          type="button"
          onClick={() =>
            chooseOption(
              { heardFrom: 'Word of Mouth' },
              '/get-a-quote/solar/dom/9',
            )
          }
        >
          <img
            className={Styles.GetAQuotePage__Button_Icon_P10}
            src="/icons/heard-from/chat.svg"
            alt="Solar Icon"
          />
          <h2 className={Styles.GetAQuotePage__Button_Text_SM}>Friend</h2>
        </button>
        <button
          className={Styles.GetAQuotePage__Button_V10}
          type="button"
          onClick={() =>
            chooseOption({ heardFrom: 'Vans' }, '/get-a-quote/solar/dom/9')
          }
        >
          <img
            className={Styles.GetAQuotePage__Button_Icon_P10}
            src="/icons/heard-from/van.svg"
            alt="Van Icon"
          />
          <h2 className={Styles.GetAQuotePage__Button_Text_SM}>Vans</h2>
        </button>
        <button
          className={Styles.GetAQuotePage__Button_V10}
          type="button"
          onClick={() =>
            chooseOption({ heardFrom: 'Flyer' }, '/get-a-quote/solar/dom/9')
          }
        >
          <img
            className={Styles.GetAQuotePage__Button_Icon_P10}
            src="/icons/heard-from/flyer.svg"
            alt="Leaflet Icon"
          />
          <h2 className={Styles.GetAQuotePage__Button_Text_SM}>Flyer</h2>
        </button>
        <button
          className={Styles.GetAQuotePage__Button_V10}
          type="button"
          onClick={() =>
            chooseOption({ heardFrom: 'Other' }, '/get-a-quote/solar/dom/9')
          }
        >
          <img
            className={Styles.GetAQuotePage__Button_Icon_P10}
            src="/icons/heard-from/more.svg"
            alt="More Icon"
          />
          <h2 className={Styles.GetAQuotePage__Button_Text_SM}>Other</h2>
        </button>
      </div>
    </>
  );
}
