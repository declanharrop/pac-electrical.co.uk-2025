import { useContext } from 'react';
import { GetAQuoteContext } from '@/Context/GetAQuoteContext';

export default function SolarComView1() {
  const { chooseOption } = useContext(GetAQuoteContext);

  return (
    <>
      <h4>What are you looking for today?</h4>
      <button
        className="button-alt"
        type="button"
        onClick={() =>
          chooseOption({ solarType: 'Solar Only' }, '/get-a-quote/solar/com/2')
        }
      >
        Solar PV
      </button>
      <button
        className="button-alt"
        type="button"
        onClick={() =>
          chooseOption({ solarType: 'Solar Only' }, '/get-a-quote/solar/com/2')
        }
      >
        Solar PV & Battery Storage
      </button>
      <button
        className="button-alt"
        type="button"
        onClick={() =>
          chooseOption({ solarType: 'Solar Only' }, '/get-a-quote/solar/com/2')
        }
      >
        Solar PV, Battery Storage & Electric Vehicle Charger
      </button>
    </>
  );
}
