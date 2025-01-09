import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { GetAQuoteContext } from '@/Context/GetAQuoteContext';
import SolarSector from './SolarSector';
import SolarDomView1 from './Domestic/SolarDomView1';
import SolarDomView4 from './Domestic/SolarDomView4';
import SolarDomView2 from './Domestic/SolarDomView2';

export default function SolarQuote({ step, sector }) {
  const { userDetails } = useContext(GetAQuoteContext);
  const router = useRouter();
  useEffect(() => {
    if (userDetails.service.length === 0) {
      router.push('/get-a-quote');
    }
  }, []);

  return (
    <>
      <div>
        <h5 style={{ marginBottom: '10px' }}>Get a Quote</h5>
        <h2>Solar</h2>

        <div style={{ marginTop: '50px' }}>
          {userDetails.sector.length === 0 && <SolarSector />}
          {sector === 'dom' && (
            <>
              {step === '1' && <SolarDomView1 />}
              {step === '2' && <SolarDomView2 />}
            </>
          )}
        </div>
        {console.log(userDetails)}
      </div>
    </>
  );
}
