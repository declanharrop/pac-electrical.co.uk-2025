import { useContext } from 'react';
import { GetAQuoteContext } from '@/Context/GetAQuoteContext';

export default function SolarComView2() {
  const { chooseOption } = useContext(GetAQuoteContext);

  return (
    <>
      <h4>Do You Know Your Annual Electricity Usage?</h4>
      <button
        className="button-alt"
        type="button"
        onClick={() =>
          chooseOption({ elecUsage: 'unsure' }, '/get-a-quote/solar/com/5')
        }
      >
        I'm not sure
      </button>
      <button
        className="button-alt"
        type="button"
        onClick={() =>
          chooseOption({ elecUsage: '' }, '/get-a-quote/solar/com/4')
        }
      >
        Yes
      </button>
    </>
  );
}
