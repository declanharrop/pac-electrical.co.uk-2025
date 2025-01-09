import { useContext } from 'react';
import { GetAQuoteContext } from '@/Context/GetAQuoteContext';

export default function SolarDomView3() {
  const { chooseOption } = useContext(GetAQuoteContext);

  return (
    <>
      <h4>What is the size of your home?</h4>
      <button
        className="button-alt"
        type="button"
        onClick={() =>
          chooseOption({ homeSize: '2/3 Bed' }, '/get-a-quote/solar/dom/5')
        }
      >
        2/3 Bed Home
      </button>
      <button
        className="button-alt"
        type="button"
        onClick={() =>
          chooseOption(
            { homeSize: '4 Bed Detatched' },
            '/get-a-quote/solar/dom/5',
          )
        }
      >
        4 Bed Detatched
      </button>
      <button
        className="button-alt"
        type="button"
        onClick={() =>
          chooseOption(
            { homeSize: 'Large Detatched' },
            '/get-a-quote/solar/dom/5',
          )
        }
      >
        Large Detatched
      </button>
      <button
        className="button-alt"
        type="button"
        onClick={() =>
          chooseOption({ homeSize: 'Other' }, '/get-a-quote/solar/dom/5')
        }
      >
        Other
      </button>
    </>
  );
}
