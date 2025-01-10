import { useContext } from 'react';
import { GetAQuoteContext } from '@/Context/GetAQuoteContext';
import Styles from '../../GetAQuote.module.css';

export default function SolarDomView8() {
  const { addUserDetails, submitOption } = useContext(GetAQuoteContext);
  return (
    <div className={Styles.Solar__GAQ__FormView__Container}>
      <h4>We just need your address now...</h4>
      <form onSubmit={(e) => submitOption(e, '/get-a-quote/solar/dom/9')}>
        <input
          type="text"
          required
          onChange={(e) => addUserDetails({ address: e.target.value })}
          placeholder="First Line of Address"
        />
        <input
          type="text"
          required
          onChange={(e) => addUserDetails({ postcode: e.target.value })}
          placeholder="Postcode"
        />
        <button
          type="submit"
          className="button-alt"
          style={{ marginTop: '30px' }}
        >
          NEXT <span>→</span>
        </button>
      </form>
    </div>
  );
}
