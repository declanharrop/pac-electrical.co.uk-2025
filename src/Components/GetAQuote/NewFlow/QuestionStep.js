'use client';

import { useQuoteFlow } from '@/Context/QuoteFlowContext';
import Styles from '@/Styles/Pages/QuoteFlowDynamic.module.css';

export default function QuestionStep({ data, service, currentStep }) {
  const { chooseOption } = useQuoteFlow();
  const urlService = service ? service.toLowerCase() : '';

  // --- THE UPDATED HANDLE SELECTION ---
  const handleSelection = (value, customNextStep) => {
    // If the option has a custom nextStep defined in the data, use it!
    // Otherwise, just add 1 to the current step.
    const nextStepNumber = customNextStep || parseInt(currentStep) + 1;
    const nextRoute = `/quote/${urlService}/${nextStepNumber}`;

    // Update the specific field in context and navigate
    chooseOption({ [data.field]: value }, nextRoute);
  };

  return (
    <div className={Styles.StepContainer}>
      <div className={Styles.StepTitle}>
        <h3>{data.question.toUpperCase()}</h3>
      </div>

      <div className={Styles.QuestionGrid}>
        {data.options.map((option, index) => (
          <button
            key={index}
            className={`${Styles.OptionCard} ${Styles[urlService]} ${option.fullWidth ? Styles.FullWidthCard : ''}`}
            type="button"
            // Pass BOTH the value and the custom nextStep (if it exists) to the function
            onClick={() => handleSelection(option.value, option.nextStep)}
          >
            <div className={Styles.IconWrapper}>
              {/* The SVG Masking Trick for the icons */}
              <div
                className={Styles.IconMask}
                style={{
                  WebkitMaskImage: `url(${option.icon})`,
                  maskImage: `url(${option.icon})`,
                }}
                aria-hidden="true"
              />
            </div>
            <h3 className={Styles.OptionCard_Text_SM}>{option.label}</h3>
          </button>
        ))}
      </div>
    </div>
  );
}
