'use client';

import { useContext } from 'react';
import { GetAQuoteContext } from '@/Context/GetAQuoteContext';

export default function GetAQuotePage() {
  const { chooseOption } = useContext(GetAQuoteContext);

  return (
    <div>
      <button
        className="button-alt"
        type="button"
        onClick={() =>
          chooseOption({ service: 'Solar' }, '/get-a-quote/solar/1')
        }
      >
        Solar
      </button>
      <button
        className="button-alt"
        type="button"
        onClick={() =>
          chooseOption({ service: 'EV Charging' }, '/get-a-quote/ev/1')
        }
      >
        EV Charging
      </button>
      <button
        className="button-alt"
        type="button"
        onClick={() =>
          chooseOption({ service: 'Electrical' }, '/get-a-quote/electrical/1')
        }
      >
        Electrical
      </button>
    </div>
  );
}
