'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, createContext, useContext } from 'react';
import Cookies from 'js-cookie';

export const QuoteFlowContext = createContext();

export const QuoteFlowProvider = ({ children }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [sessionId, setSessionId] = useState('');
  const [turnstileToken, setTurnstileToken] = useState(''); // Stores the actual security token

  const [userDetails, setUserDetails] = useState({
    service: '',
    sector: '',
    name: '',
    email: '',
    phone: '',
    details: '',
    addressLine1: '',
    addressLine2: '',
    county: '',
    postcode: '',
    coordinates: '',
    elecUsage: '',
    solarType: '',
    homeSize: '',
    ownership: '', // For Commercial
    chargerDistance: '', // NEW: For EV
    companyName: '',
    heardFrom: '',
    adId: '',
  });

  useEffect(() => {
    setSessionId(crypto.randomUUID());
  }, []);

  useEffect(() => {
    if (!searchParams) return;

    const urlProvider = searchParams.get('provider');
    const cookieProvider = Cookies.get('provider');

    if (urlProvider && userDetails.heardFrom.length < 1) {
      Cookies.set('provider', urlProvider, { expires: 7 });
      setUserDetails((prev) => ({ ...prev, heardFrom: urlProvider }));
    } else if (cookieProvider && userDetails.heardFrom.length < 1) {
      setUserDetails((prev) => ({ ...prev, heardFrom: cookieProvider }));
    }

    const urlAdId = searchParams.get('adId');
    const cookieAdId = Cookies.get('adId');

    if (urlAdId && userDetails.adId.length < 1) {
      Cookies.set('adId', urlAdId, { expires: 7 });
      setUserDetails((prev) => ({ ...prev, adId: urlAdId }));
    } else if (cookieAdId && userDetails.adId.length < 1) {
      setUserDetails((prev) => ({ ...prev, adId: cookieAdId }));
    }
  }, [searchParams, userDetails.heardFrom, userDetails.adId]);

  const handleVerify = (token) => {
    setTurnstileToken(token); // Captures the token string from Cloudflare
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
    const freshestData = {
      ...userDetails,
      ...newData,
      sessionId,
    };

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

    // Include the turnstile token in the final POST body
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
        // Save the sessionId to a cookie for 1 day
        Cookies.set('quoteSessionId', sessionId, { expires: 1 });

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
