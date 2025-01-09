import { useContext } from 'react';
import { GetAQuoteContext } from '@/Context/GetAQuoteContext';

export default function ElecVeiw1() {
  const { addUserDetails, submitOption } = useContext(GetAQuoteContext);

  return (
    <>
      <h4>First lets get your name...</h4>
      <form onSubmit={(e) => submitOption(e, '/get-a-quote/electrical/2')}>
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
    </>
  );
}
