import { useContext } from 'react';
import { GetAQuoteContext } from '@/Context/GetAQuoteContext';
import Styles from '../../GetAQuote.module.css';

export default function SolarDomView5() {
  const { addUserDetails, submitOption } = useContext(GetAQuoteContext);

  return (
    <div className={Styles.Solar__GAQ__FormView__Container}>
      <h4>Can we take your name?</h4>
      <form onSubmit={(e) => submitOption(e, '/get-a-quote/solar/dom/6')}>
        <input
          type="text"
          required
          onChange={(e) => addUserDetails({ name: e.target.value })}
          placeholder="Full Name"
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
