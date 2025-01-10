import { useContext, useEffect } from 'react';
import { GetAQuoteContext } from '@/Context/GetAQuoteContext';
import Styles from '../../GetAQuote.module.css';

export default function SolarDomView9() {
  const { addUserDetails, handleSubmit } = useContext(GetAQuoteContext);

  return (
    <div className={Styles.Solar__GAQ__FormView__Container}>
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
    </div>
  );
}
