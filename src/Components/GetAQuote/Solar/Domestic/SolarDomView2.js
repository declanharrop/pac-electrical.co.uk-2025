import { useContext } from 'react';
import { GetAQuoteContext } from '@/Context/GetAQuoteContext';

export default function SolarDomView2() {
  const { chooseOption } = useContext(GetAQuoteContext);

  return (
    <>
      <h4>Do You Know Your Annual Electricity Usage?</h4>
      <button
        className="button-alt"
        type="button"
        onClick={() =>
          chooseOption({ elecUsage: '' }, '/get-a-quote/solar/dom/3')
        }
      >
        I'm not sure
      </button>
      <button
        className="button-alt"
        type="button"
        onClick={() =>
          chooseOption({ elecUsage: '' }, '/get-a-quote/solar/dom/4')
        }
      >
        Yes
      </button>
    </>
  );
}
