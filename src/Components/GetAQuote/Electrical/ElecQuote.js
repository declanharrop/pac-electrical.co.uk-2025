import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { use100vh } from 'react-div-100vh';
import ElecVeiw1 from './ElecVeiw1';
import ElecVeiw2 from './ElecView2';
import ElecVeiw3 from './ElecView3';
import ElecVeiw4 from './ElecView4';
import ElecVeiw5 from './ElecView5';
import ElecVeiw6 from './ElecView6';
import { GetAQuoteContext } from '@/Context/GetAQuoteContext';
import Styles from '../GetAQuote.module.css';
import ElecSector from './ElecSector';

export default function ElecQuote({ step }) {
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
            <h2>Electrical</h2>
          </div>
          <div style={{ height: '100%' }}>
            {userDetails.sector.length === 0 && <ElecSector />}
            {userDetails.sector.length > 0 && (
              <>
                {step === '1' && <ElecVeiw1 />}
                {step === '2' && <ElecVeiw2 />}
                {step === '3' && <ElecVeiw3 />}
                {step === '6' && <ElecVeiw6 />}
                {step === '5' && <ElecVeiw5 />}
                {step === '4' && <ElecVeiw4 />}
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}
