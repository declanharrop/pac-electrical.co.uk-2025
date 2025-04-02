import { useContext, useEffect } from 'react';
import { GetAQuoteContext } from '@/Context/GetAQuoteContext';
import Styles from '../../GetAQuote.module.css';

export default function SolarDomView9() {
  const { addUserDetails, handleSubmit } = useContext(GetAQuoteContext);

  return (
    <div className={Styles.Solar__GAQ__FormView__Container}>
      <h4>Thank you for completing our solar quote form.</h4>
      <p style={{ marginTop: '20px', maxWidth: '500px' }}>
        When you click submit you will recieve an email asking for more details.
        Once you reply to that email with the required details, you will recieve
        your fully bespoke quote from us.
      </p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <button
          type="submit"
          className="button-alt"
          style={{ marginTop: '30px' }}
        >
          Submit <span>→</span>
        </button>
      </form>
    </div>
  );
}
