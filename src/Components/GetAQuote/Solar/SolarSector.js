import { useContext } from 'react';
import { GetAQuoteContext } from '@/Context/GetAQuoteContext';

export default function SolarSector() {
  const { chooseOption } = useContext(GetAQuoteContext);

  return (
    <>
      <button
        className="button-alt"
        type="button"
        onClick={() =>
          chooseOption({ sector: 'domestic' }, '/get-a-quote/solar/dom/1')
        }
      >
        DOMESTIC
      </button>

      <button
        className="button-alt"
        type="button"
        onClick={() =>
          chooseOption({ sector: 'commercial' }, '/get-a-quote/solar/com/1')
        }
      >
        COMMERCIAL
      </button>
    </>
  );
}
