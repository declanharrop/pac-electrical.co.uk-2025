import { useContext } from 'react';
import { GetAQuoteContext } from '@/Context/GetAQuoteContext';
import Styles from '../GetAQuote.module.css';

export default function ElecVeiw2() {
  const { addUserDetails, submitOption } = useContext(GetAQuoteContext);
  return (
    <div className={Styles.Solar__GAQ__FormView__Container}>
      <h4>What's your Email Address?</h4>
      <form onSubmit={(e) => submitOption(e, '/get-a-quote/electrical/3')}>
        <input
          type="email"
          required
          onChange={(e) => addUserDetails({ email: e.target.value })}
          placeholder="Email Address"
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
