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
          chooseOption({ elecUsage: '10000kWh' }, '/get-a-quote/solar/dom/3')
        }
      >
        10,000kWh
      </button>
      <button
        className="button-alt"
        type="button"
        onClick={() =>
          chooseOption({ elecUsage: '12000kWh' }, '/get-a-quote/solar/dom/3')
        }
      >
        12,000kWh
      </button>
      <button
        className="button-alt"
        type="button"
        onClick={() =>
          chooseOption({ elecUsage: '14000kWh+' }, '/get-a-quote/solar/dom/3')
        }
      >
        14,000kWh or More
      </button>
    </>
  );
}
