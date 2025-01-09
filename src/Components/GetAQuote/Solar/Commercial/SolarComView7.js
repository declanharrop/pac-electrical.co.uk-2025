import { useContext } from 'react';
import { GetAQuoteContext } from '@/Context/GetAQuoteContext';

export default function SolarComView7() {
  const { addUserDetails, submitOption } = useContext(GetAQuoteContext);
  return (
    <>
      <h4>What's your Phone Number?</h4>
      <form onSubmit={(e) => submitOption(e, '/get-a-quote/solar/com/8')}>
        <input
          type="phone"
          required
          onChange={(e) => addUserDetails({ phone: e.target.value })}
          placeholder="Mobile Number"
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
