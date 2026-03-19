'use client';

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useQuoteFlow } from '@/Context/QuoteFlowContext';
import Styles from '@/Styles/Pages/QuoteFlowDynamic.module.css';

// Import all of our step components
import SectorStep from '@/Components/GetAQuote/NewFlow/SectorStep';
import QuestionStep from '@/Components/GetAQuote/NewFlow/QuestionStep';
import ContactStep from '@/Components/GetAQuote/NewFlow/ContactStep';
import InputStep from '@/Components/GetAQuote/NewFlow/InputStep';
import MapStep from '@/Components/GetAQuote/NewFlow/MapStep';
import AddressConfirmStep from '@/Components/GetAQuote/NewFlow/AddressConfirmStep';
import FinalStep from '@/Components/GetAQuote/NewFlow/FinalStep';
import { quoteQuestions } from '@/lib/quoteFlowData';

export default function QuoteStepPage() {
  const params = useParams();
  const router = useRouter();
  const { userDetails, addUserDetails } = useQuoteFlow();

  const service = params?.service;
  const step = params?.step;
  const urlService = service ? service.toLowerCase() : '';

  useEffect(() => {
    if (!service) return;

    // Determine what the formatted string SHOULD be based on the URL
    const expectedService =
      service.toLowerCase() === 'ev'
        ? 'EV Charging'
        : service.charAt(0).toUpperCase() + service.slice(1);

    // If the Context doesn't match our exact expected string, update it
    if (userDetails.service !== expectedService) {
      addUserDetails({ service: expectedService });
    }
  }, [service, userDetails.service, addUserDetails]);

  // 2. Safe Route Guarding
  // If they are on Step 2 or higher but haven't chosen a sector, safely redirect them back to Step 1
  useEffect(() => {
    if (!userDetails.sector && step !== '1') {
      router.replace(`/quote/${urlService}/1`);
    }
  }, [userDetails.sector, step, router, urlService]);

  const handleBack = () => {
    router.back();
  };

  const renderStep = () => {
    // Step 1 is always Sector selection (Domestic/Commercial)
    if (step === '1') {
      return <SectorStep service={service} />;
    }

    const sectorKey = userDetails.sector
      ? userDetails.sector.toLowerCase()
      : null;

    // While the useEffect above is preparing to redirect them, return null to prevent errors
    if (!sectorKey && step !== '1') {
      return null;
    }

    // Step 3 is our Contact Form (Zapier trigger)
    if (step === '3') {
      return <ContactStep service={service} currentStep={step} />;
    }

    // Pull the data for the current step from our data file
    const questionData = quoteQuestions[urlService]?.[sectorKey]?.[step];

    if (questionData) {
      // Check if this specific question is a text/number input field
      if (questionData.type === 'input') {
        return (
          <InputStep data={questionData} service={service} currentStep={step} />
        );
      }

      // Check if this specific question is the Map step
      if (questionData.type === 'map') {
        return (
          <MapStep data={questionData} service={service} currentStep={step} />
        );
      }

      if (questionData.type === 'addressConfirm') {
        return (
          <AddressConfirmStep
            data={questionData}
            service={service}
            currentStep={step}
          />
        );
      }

      if (questionData.type === 'final') {
        return <FinalStep data={questionData} service={service} />;
      }

      // Default: It's a multiple choice button grid
      return (
        <QuestionStep
          data={questionData}
          service={service}
          currentStep={step}
        />
      );
    }

    // Fallback if the step number doesn't exist in the data file yet
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h3>Step {step} Data Not Found</h3>
      </div>
    );
  };

  return (
    <div className={Styles.DynamicPage}>
      <div className={Styles.DynamicPage__Container}>
        {/* Top Header / Progress Area */}
        <div className={Styles.DynamicPage__Header}>
          <button className={Styles.BackButton} onClick={handleBack}>
            <span className={Styles.BackArrow}>&larr;</span> Back
          </button>

          {/* Dynamically apply the service color class to the badge */}
          <div className={`${Styles.ProgressBadge} ${Styles[urlService]}`}>
            STEP {step}
          </div>
        </div>

        {/* Dynamic Form Content */}
        <div className={Styles.StepContent}>{renderStep()}</div>
      </div>
    </div>
  );
}
