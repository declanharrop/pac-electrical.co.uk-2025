import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { use100vh } from 'react-div-100vh';
import { GetAQuoteContext } from '@/Context/GetAQuoteContext';
import Styles from '../GetAQuote.module.css';
import EVVeiw6 from './EVView6';
import EVVeiw5 from './EVView5';
import EVVeiw4 from './EVView4';
import EVVeiw3 from './EVView3';
import EVVeiw2 from './EVView2';
import EVVeiw1 from './EVView1';
import EVSector from './EVSector';

export default function EVQuote({ step }) {
  const { userDetails } = useContext(GetAQuoteContext);
  const router = useRouter();
  const height = use100vh();
  useEffect(() => {
    if (userDetails.service.length === 0) {
      router.push('/get-a-quote');
    }
  }, []);

  if (height) {
    return (
      <>
        <div
          className={Styles.Solar__GAQ}
          style={{ height: `calc(${height}px - 160px)` }}
        >
          <div className={Styles.Solar__GAQ__Header}>
            <h5 style={{ marginBottom: '10px' }}>Get a Quote</h5>
            <h2>EV Charge Point</h2>
          </div>
          <div style={{ height: '100%' }}>
            {userDetails.sector.length === 0 && <EVSector />}
            {userDetails.sector.length > 0 && (
              <>
                {step === '1' && <EVVeiw1 />}
                {step === '2' && <EVVeiw2 />}
                {step === '3' && <EVVeiw3 />}
                {step === '6' && <EVVeiw6 />}
                {step === '5' && <EVVeiw5 />}
                {step === '4' && <EVVeiw4 />}
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}
