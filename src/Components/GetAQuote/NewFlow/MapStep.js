'use client';

import { useState, useRef } from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
} from '@react-google-maps/api';
import { useQuoteFlow } from '@/Context/QuoteFlowContext';
import Styles from '@/Styles/Pages/QuoteFlowDynamic.module.css';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '12px',
  marginTop: '1rem',
};
const defaultCenter = { lat: 52.3555, lng: -1.1743 }; // Central UK

export default function MapStep({ data, service, currentStep }) {
  const { chooseOption } = useQuoteFlow();
  const urlService = service ? service.toLowerCase() : '';

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const [markerPosition, setMarkerPosition] = useState(null);

  // Store our separated address fields
  const [parsedAddress, setParsedAddress] = useState({
    addressLine1: '',
    addressLine2: '',
    county: '',
    postcode: '',
  });

  const [displayAddress, setDisplayAddress] = useState(''); // Just for showing the user what they selected
  const autocompleteRef = useRef(null);

  // --- THE SORTER: Extracts specific fields from Google's address_components array ---
  const extractAddressDetails = (components) => {
    const getComponent = (type) => {
      const comp = components.find((c) => c.types.includes(type));
      return comp ? comp.long_name : '';
    };

    const streetNumber = getComponent('street_number');
    const route = getComponent('route');

    return {
      addressLine1: `${streetNumber} ${route}`.trim(),
      // In the UK, 'postal_town' is usually the most accurate for Line 2 (City/Town)
      addressLine2: getComponent('postal_town') || getComponent('locality'),
      // Counties usually show up as level 2 or level 1
      county:
        getComponent('administrative_area_level_2') ||
        getComponent('administrative_area_level_1'),
      postcode: getComponent('postal_code'),
    };
  };

  // 1. When they select an address from the search bar
  const onPlaceChanged = () => {
    if (autocompleteRef.current !== null) {
      const place = autocompleteRef.current.getPlace();

      if (place.geometry) {
        const location = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };

        setMapCenter(location);
        setMarkerPosition(location);
        setDisplayAddress(place.formatted_address || place.name);

        if (place.address_components) {
          setParsedAddress(extractAddressDetails(place.address_components));
        }
      }
    }
  };

  // 2. When they drag the pin (Reverse Geocode to update the address)
  const onMarkerDragEnd = async (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setMarkerPosition({ lat, lng });

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`,
      );
      const geocodeData = await response.json();

      if (geocodeData.results && geocodeData.results[0]) {
        setDisplayAddress(geocodeData.results[0].formatted_address);
        setParsedAddress(
          extractAddressDetails(geocodeData.results[0].address_components),
        );
      }
    } catch (error) {
      console.error('Geocoding failed', error);
    }
  };

  // 3. Submit the separated fields to Context
  const handleSubmit = () => {
    if (!markerPosition) {
      alert(
        'Please search for your address or click the map to drop a pin on your house.',
      );
      return;
    }

    const nextStepNumber = parseInt(currentStep) + 1;
    const nextRoute = `/quote/${urlService}/${nextStepNumber}`;

    chooseOption(
      {
        addressLine1: parsedAddress.addressLine1,
        addressLine2: parsedAddress.addressLine2,
        county: parsedAddress.county,
        postcode: parsedAddress.postcode,
        coordinates: `${markerPosition.lat}, ${markerPosition.lng}`,
      },
      nextRoute,
    );
  };

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <div className={Styles.StepContainer}>
      <div className={Styles.StepTitle}>
        <h3>{data.question.toUpperCase()}</h3>
        <p style={{ marginTop: '10px' }}>
          Search your address, then drag the red pin exactly onto your roof.
        </p>
      </div>

      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '600px',
          margin: '0 auto',
        }}
      >
        {displayAddress && (
          <div
            style={{
              marginBottom: '15px',
              padding: '10px',
              backgroundColor: '#f0fdf4',
              border: '1px solid #bbf7d0',
              borderRadius: '8px',
              color: '#166534',
              textAlign: 'center',
            }}
          >
            <strong>Selected:</strong> {displayAddress}
          </div>
        )}

        {/* Google Places Search Bar */}
        <Autocomplete
          onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
          onPlaceChanged={onPlaceChanged}
          options={{ componentRestrictions: { country: 'gb' } }}
        >
          <input
            type="text"
            placeholder="Start typing your postcode or street..."
            style={{
              width: '100%',
              padding: '15px',
              borderRadius: '8px',
              border: '2px solid #ccc',
              marginBottom: '10px',
            }}
          />
        </Autocomplete>

        {/* The Map */}
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={markerPosition ? 20 : 6}
          center={mapCenter}
          // Changed mapTypeControl to false below!
          options={{
            streetViewControl: false,
            mapTypeControl: false,
            mapTypeId: 'satellite',
            tilt: 0,
          }}
          onClick={(e) => {
            onMarkerDragEnd({
              latLng: { lat: () => e.latLng.lat(), lng: () => e.latLng.lng() },
            });
          }}
        >
          {markerPosition && (
            <Marker
              position={markerPosition}
              draggable
              onDragEnd={onMarkerDragEnd}
            />
          )}
        </GoogleMap>
      </div>

      <button
        onClick={handleSubmit}
        className={`${Styles.SubmitButton} ${Styles[urlService]}`}
        style={{ marginTop: '2rem' }}
      >
        CONFIRM LOCATION <span>&rarr;</span>
      </button>
    </div>
  );
}
