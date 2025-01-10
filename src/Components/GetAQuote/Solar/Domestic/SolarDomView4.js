import { useContext } from 'react';
import { GetAQuoteContext } from '@/Context/GetAQuoteContext';
import Styles from '../../GetAQuote.module.css';

export default function SolarDomView4() {
  const { addUserDetails, submitOption } = useContext(GetAQuoteContext);

  return (
    <div className={Styles.Solar__GAQ__FormView__Container}>
      <h4>Great, Enter your Anual Electricity Usage</h4>
      <form onSubmit={(e) => submitOption(e, '/get-a-quote/solar/dom/5')}>
        <input
          type="text"
          required
          onChange={(e) => addUserDetails({ elecUsage: e.target.value })}
          placeholder="Your Anual Electricity Usage"
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
