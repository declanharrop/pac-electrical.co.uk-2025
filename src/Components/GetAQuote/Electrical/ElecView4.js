import { useContext, useEffect } from 'react';
import { GetAQuoteContext } from '@/Context/GetAQuoteContext';

export default function ElecVeiw4() {
  const { addUserDetails, handleSubmit } = useContext(GetAQuoteContext);

  return (
    <>
      <h4>Could you tell us some more details about your project?</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <textarea
          type="text"
          required
          onChange={(e) => addUserDetails({ details: e.target.value })}
          placeholder="Project Details"
        />
        <button
          type="submit"
          className="button-alt"
          style={{ marginTop: '30px' }}
        >
          Submit <span>→</span>
        </button>
      </form>
    </>
  );
}
