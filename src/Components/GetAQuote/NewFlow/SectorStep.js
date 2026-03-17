'use client';

import Image from 'next/image';
import { useQuoteFlow } from '@/Context/QuoteFlowContext';
import Styles from '@/Styles/Pages/QuoteFlowDynamic.module.css';

export default function SectorStep({ service }) {
  const { chooseOption } = useQuoteFlow();

  const displayService = service ? service.toUpperCase() : 'SERVICE';
  const urlService = service ? service.toLowerCase() : '';

  const handleSelection = (sector) => {
    chooseOption({ sector }, `/quote/${urlService}/2`);
  };

  return (
    <div className={Styles.StepContainer}>
      <div className={Styles.StepTitle}>
        {/* Changed to h3 */}
        <h3>Choose your sector</h3>
      </div>

      <div className={Styles.OptionsGrid}>
        <button
          className={`${Styles.OptionCard} ${Styles[urlService]}`}
          type="button"
          onClick={() => handleSelection('Domestic')}
        >
          <div className={Styles.IconWrapper}>
            <div
              className={Styles.IconMask}
              style={{
                WebkitMaskImage: `url('/icons/home-alt.svg')`,
                maskImage: `url('/icons/home-alt.svg')`,
              }}
            />
          </div>
          <h5>{displayService}</h5>
          {/* Changed to h3 */}
          <h3 className={Styles.OptionCard_Text}>DOMESTIC</h3>
        </button>

        <button
          className={`${Styles.OptionCard} ${Styles[urlService]}`}
          type="button"
          onClick={() => handleSelection('Commercial')}
        >
          <div className={Styles.IconWrapper}>
            <div
              className={Styles.IconMask}
              style={{
                WebkitMaskImage: `url('/icons/commercial-alt.svg')`,
                maskImage: `url('/icons/commercial-alt.svg')`,
              }}
            />
          </div>
          <h5>{displayService}</h5>
          {/* Changed to h3 */}
          <h3 className={Styles.OptionCard_Text}>COMMERCIAL</h3>
        </button>
      </div>
    </div>
  );
}
