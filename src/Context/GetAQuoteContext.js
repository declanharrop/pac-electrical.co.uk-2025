'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState, createContext } from 'react';

export const GetAQuoteContext = createContext();

export const GetAQuoteProvider = ({ children }) => {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState({
    service: '',
    sector: '',
    name: '',
    email: '',
    phone: '',
    details: '',
    address: '',
    postcode: '',
    elecUsage: '',
    solarType: '',
    homeSize: '',
    heardFrom: '',
  });

  const [turnstileStatus, setTurnstileStatus] = useState();
  const handleVerify = (token) => {
    setTurnstileStatus('success');
  };

  const addUserDetails = (data) => {
    setUserDetails({ ...userDetails, ...data });
  };

  const ResetForm = ({ children }) => {
    if (userDetails.service.length === 0) {
      router.push('/get-a-quote');
    } else {
      return <>{children}</>;
    }
  };

  const submitOption = (e, route) => {
    e.preventDefault();
    router.push(route);
  };

  const chooseOption = (data, route) => {
    setUserDetails({ ...userDetails, ...data });
    router.push(route);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (turnstileStatus !== 'success') {
      alert('Please complete the security check.');
      return;
    }

    if (turnstileStatus === 'success') {
      const formData = {
        service: userDetails.service,
        sector: userDetails.sector,
        solarType: userDetails.solarType,
        name: userDetails.name,
        email: userDetails.email,
        phone: userDetails.phone,
        address: userDetails.address,
        postcode: userDetails.postcode,
        elecUsage: userDetails.elecUsage,
        homeSize: userDetails.homeSize,
        details: userDetails.details,
        heardFrom: userDetails.heardFrom,
      };

      const JSONData = JSON.stringify(formData);

      const endpoint = 'https://hooks.zapier.com/hooks/catch/11615843/2z5b76r/';

      const options = {
        method: 'POST',
        body: JSONData,
      };
      const response = await fetch(endpoint, options);

      const result = await response.json();
      if (result.status === 'success') {
        router.push('/thank-you');
      }
    }
  };

  return (
    <GetAQuoteContext.Provider
      value={{
        userDetails,
        setUserDetails,
        addUserDetails,
        submitOption,
        chooseOption,
        ResetForm,
        handleSubmit,
        handleVerify,
      }}
    >
      {children}
    </GetAQuoteContext.Provider>
  );
};
