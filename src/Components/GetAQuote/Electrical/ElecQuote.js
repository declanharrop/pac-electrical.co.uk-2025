import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import ElecVeiw1 from './ElecVeiw1';
import ElecVeiw2 from './ElecView2';
import ElecVeiw3 from './ElecView3';
import ElecVeiw4 from './ElecView4';
import { GetAQuoteContext } from '@/Context/GetAQuoteContext';

export default function ElecQuote({ step }) {
  const { userDetails } = useContext(GetAQuoteContext);
  const router = useRouter();
  useEffect(() => {
    if (userDetails.service.length === 0) {
      router.push('/get-a-quote');
    }
  }, []);

  return (
    <>
      <div style={{ marginTop: '100px' }}>
        <h5 style={{ marginBottom: '10px' }}>Get a Quote</h5>
        <h2>Electrical</h2>
        <div style={{ marginTop: '50px' }}>
          {step === '1' && <ElecVeiw1 />}
          {step === '2' && <ElecVeiw2 />}
          {step === '3' && <ElecVeiw3 />}
          {step === '4' && <ElecVeiw4 />}
        </div>
      </div>
    </>
  );
}
