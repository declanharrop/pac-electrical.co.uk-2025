// app/context/QuoteFlowContext.jsx (or equivalent path)

'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, createContext, useContext } from 'react';
import Cookies from 'js-cookie';

export const QuoteFlowContext = createContext();

export const QuoteFlowProvider = ({ children }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [sessionId, setSessionId] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');

  const [userDetails, setUserDetails] = useState({
    service: '',
    sector: '',
    name: '',
    email: '',
    phone: '',
    businessName: '',
    companyName: '',
    details: '',
    addressLine1: '',
    addressLine2: '',
    county: '',
    postcode: '',
    coordinates: '',
    locationDetails: '',

    // Tracking Fields
    heardFrom: '',
    adId: '',
    gclid: '', // Added for future offline conversion mapping
    fbclid: '', // Added for future Meta CAPI

    // Solar - Domestic
    solarDomesticType: '',
    solarDomesticKnowsUsage: '',
    solarDomesticElecUsage: '',
    solarDomesticHomeSize: '',

    // Solar - Commercial
    commercialOwnership: '',
    commercialSolarMounting: '',

    // EV - Domestic
    evDomesticChargerPreference: '',
    evDomesticDistance: '',

    // EV - Commercial
    evCommercialPrimaryUse: '',
    evCommercialChargePoints: '',
    evCommercialPowerSupply: '',
  });

  useEffect(() => {
    // Generate UUID on the client to prevent hydration errors
    setSessionId(crypto.randomUUID());
  }, []);

  // ---------------------------------------------------------------------------
  // ATTRIBUTION READ LOGIC & DEBUGGER
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (typeof window === 'undefined') return; // Guard for server environments

    // 1. Read directly from URL (if landing directly on the /quote route)
    const urlProvider = searchParams?.get('provider');
    const urlAdId = searchParams?.get('adId');
    const urlGclid = searchParams?.get('gclid');
    const urlFbclid = searchParams?.get('fbclid');

    // 2. Read from Global Cookies (if navigated internally from the homepage)
    const cookieProvider = Cookies.get('provider');
    const cookieAdId = Cookies.get('adId');
    const cookieGclid = Cookies.get('gclid');
    const cookieFbclid = Cookies.get('fbclid');

    // 3. Resolve the final values (Prioritize URL, fallback to Cookie)
    const finalProvider = urlProvider || cookieProvider || '';
    const finalAdId = urlAdId || cookieAdId || '';
    const finalGclid = urlGclid || cookieGclid || '';
    const finalFbclid = urlFbclid || cookieFbclid || '';

    // --- TRACKING DEBUGGER LOG ---
    console.group('🔍 Next.js Tracking Architecture Debugger');
    console.log('1. Raw URL Parameters:', {
      provider: urlProvider,
      adId: urlAdId,
      gclid: urlGclid,
    });
    console.log('2. Retrieved Cookies:', {
      provider: cookieProvider,
      adId: cookieAdId,
      gclid: cookieGclid,
    });
    console.log('3. Final Resolved State ->', {
      heardFrom: finalProvider,
      adId: finalAdId,
      gclid: finalGclid,
    });
    console.groupEnd();
    // -----------------------------

    // 4. Safely update React state ONCE without triggering infinite loops
    setUserDetails((prev) => {
      // Deep check to prevent unnecessary re-renders if state is already correct
      if (
        prev.heardFrom !== finalProvider ||
        prev.adId !== finalAdId ||
        prev.gclid !== finalGclid ||
        prev.fbclid !== finalFbclid
      ) {
        return {
          ...prev,
          heardFrom: finalProvider || prev.heardFrom,
          adId: finalAdId || prev.adId,
          gclid: finalGclid || prev.gclid || '',
          fbclid: finalFbclid || prev.fbclid || '',
        };
      }
      return prev;
    });
  }, [searchParams]); // Strictly dependent on URL changes

  // ... [Keep the rest of your functions identical: handleVerify, addUserDetails, chooseOption, etc.]

  const handleVerify = (token) => {
    setTurnstileToken(token);
  };
  const addUserDetails = (data) => {
    setUserDetails((prev) => ({ ...prev, ...data }));
  };
  const chooseOption = (data, route) => {
    addUserDetails(data);
    if (route) router.push(route);
  };
  const submitOption = (e, route) => {
    if (e) e.preventDefault();
    if (route) router.push(route);
  };

  const handlePartialSubmit = async (newData = {}, nextRoute) => {
    const freshestData = { ...userDetails, ...newData, sessionId };
    try {
      await fetch('/api/quote/partial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(freshestData),
      });
      if (nextRoute) router.push(nextRoute);
    } catch (error) {
      console.error('Partial submission failed:', error);
      if (nextRoute) router.push(nextRoute);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!turnstileToken) {
      alert('Please complete the security check.');
      return;
    }

    const formData = {
      ...userDetails,
      sessionId,
      cf_turnstile_response: turnstileToken,
    };

    try {
      const response = await fetch('/api/quote/complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.status === 'success') {
        // Enforce path '/' on session cookie as well
        Cookies.set('quoteSessionId', sessionId, { expires: 1, path: '/' });
        const finalService = userDetails.service.toLowerCase() || 'solar';
        const finalSector = userDetails.sector.toLowerCase() || 'domestic';
        router.push(`/thank-you/${finalService}/${finalSector}`);
      } else {
        alert(`Submission issue: ${result.message || 'Please try again.'}`);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please try again.');
    }
  };

  const RouteGuard = ({ children }) => {
    useEffect(() => {
      if (userDetails.service.length === 0) router.push('/quote');
    }, [userDetails.service, router]);

    if (userDetails.service.length === 0) return null;
    return <>{children}</>;
  };

  return (
    <QuoteFlowContext.Provider
      value={{
        sessionId,
        userDetails,
        addUserDetails,
        submitOption,
        chooseOption,
        handlePartialSubmit,
        handleSubmit,
        handleVerify,
        RouteGuard,
      }}
    >
      {children}
    </QuoteFlowContext.Provider>
  );
};

export const useQuoteFlow = () => useContext(QuoteFlowContext);
