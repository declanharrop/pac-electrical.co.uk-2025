import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { use100vh } from 'react-div-100vh';
import { GetAQuoteContext } from '@/Context/GetAQuoteContext';
import Styles from '../GetAQuote.module.css';
import SolarSector from './SolarSector';
import SolarDomView1 from './Domestic/SolarDomView1';
import SolarDomView4 from './Domestic/SolarDomView4';
import SolarDomView2 from './Domestic/SolarDomView2';
import SolarDomView3 from './Domestic/SolarDomView3';
import SolarDomView5 from './Domestic/SolarDomView5';
import SolarDomView6 from './Domestic/SolarDomView6';
import SolarDomView7 from './Domestic/SolarDomView7';
import SolarDomView8 from './Domestic/SolarDomView8';
import SolarDomView9 from './Domestic/SolarDomView9';
import SolarComView1 from './Commercial/SolarComView1';
import SolarComView2 from './Commercial/SolarComView2';
import SolarComView4 from './Commercial/SolarComView4';
import SolarComView5 from './Commercial/SolarComView5';
import SolarComView6 from './Commercial/SolarComView6';
import SolarComView7 from './Commercial/SolarComView7';
import SolarComView8 from './Commercial/SolarComView8';
import SolarComView9 from './Commercial/SolarComView9';
import SolarComView10 from './Commercial/SolarComView10';
import SolarDomView10 from './Domestic/SolarDomView10';

export default function SolarQuote({ step, sector }) {
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
      <div
        className={Styles.Solar__GAQ}
        style={{ height: `calc(${height}px - 160px)` }}
      >
        <div className={Styles.Solar__GAQ__Header}>
          <h5 style={{ marginBottom: '10px' }}>Get a Quote</h5>
          <h2>Solar</h2>
        </div>
        <div style={{ height: '100%' }}>
          {userDetails.sector.length === 0 && <SolarSector />}
          {sector === 'dom' && (
            <>
              {step === '1' && <SolarDomView1 />}
              {step === '2' && <SolarDomView2 />}
              {step === '3' && <SolarDomView3 />}
              {step === '4' && <SolarDomView4 />}
              {step === '5' && <SolarDomView5 />}
              {step === '6' && <SolarDomView6 />}
              {step === '7' && <SolarDomView7 />}
              {step === '8' && <SolarDomView8 />}
              {step === '10' && <SolarDomView10 />}
              {step === '9' && <SolarDomView9 />}
            </>
          )}
          {sector === 'com' && (
            <>
              {step === '1' && <SolarComView1 />}
              {step === '2' && <SolarComView2 />}
              {step === '4' && <SolarComView4 />}
              {step === '5' && <SolarComView5 />}
              {step === '6' && <SolarComView6 />}
              {step === '7' && <SolarComView7 />}
              {step === '8' && <SolarComView8 />}
              {step === '10' && <SolarComView10 />}
              {step === '9' && <SolarComView9 />}
            </>
          )}
        </div>
      </div>
    );
  }
}
