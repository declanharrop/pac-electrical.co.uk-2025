import { useContext } from 'react';
import { GetAQuoteContext } from '@/Context/GetAQuoteContext';

export default function SolarComView4() {
  const { addUserDetails, submitOption } = useContext(GetAQuoteContext);

  return (
    <>
      <h4>Great, Enter your Anual Electricity Usage</h4>
      <form onSubmit={(e) => submitOption(e, '/get-a-quote/solar/com/5')}>
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
    </>
  );
}
