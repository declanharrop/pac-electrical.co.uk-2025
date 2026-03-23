// src/lib/quoteFlowData.js

export const quoteQuestions = {
  solar: {
    domestic: {
      // Step 2: What are you looking for today?
      2: {
        question: 'What are you looking for today?',
        field: 'solarDomesticType', // Updated
        options: [
          {
            label: 'SOLAR PV',
            value: 'Solar Only',
            icon: '/icons/solar-alt.svg',
          },
          {
            label: 'BATTERY STORAGE',
            value: 'Battery Only',
            icon: '/icons/solar-alt.svg',
          },
          {
            label: 'SOLAR PV & BATTERY STORAGE',
            value: 'Solar & Battery',
            icon: '/icons/solar-bat-alt.svg',
          },
          {
            label: 'SOLAR PV, BATTERY & EV CHARGER',
            value: 'Solar, Battery & EV Charger',
            icon: '/icons/solar-bat-ev-alt.svg',
          },
          {
            label: 'SOLAR REPAIR & MAINTENANCE',
            value: 'Solar, Repair',
            icon: '/icons/technician.svg',
            fullWidth: true,
          },
        ],
      },
      4: {
        question: 'Do You Know Your Annual Electricity Usage?',
        field: 'solarDomesticKnowsUsage', // Updated
        options: [
          {
            label: 'YES',
            value: 'Yes',
            icon: '/icons/yes-alt.svg',
            nextStep: 5,
          },
          {
            label: "I'M NOT SURE",
            value: 'No',
            icon: '/icons/no-alt.svg',
            nextStep: 6,
          },
        ],
      },
      5: {
        type: 'input',
        question: 'Great, enter your Annual Electricity Usage (kWh)',
        field: 'solarDomesticElecUsage', // Updated
        placeholder: 'e.g. 4500',
        inputType: 'number',
        nextStep: 6,
      },
      6: {
        question: 'What is the size of your home?',
        field: 'solarDomesticHomeSize', // Updated
        options: [
          { label: '2/3 BED', value: '2/3 Bed', icon: '/icons/home-alt.svg' },
          {
            label: '4 BED DETACHED',
            value: '4 Bed Detached',
            icon: '/icons/4bed-home-alt.svg',
          },
          {
            label: 'LARGE DETACHED',
            value: 'Large Detached',
            icon: '/icons/large-home-alt.svg',
          },
          { label: 'OTHER', value: 'Other', icon: '/icons/other-home-alt.svg' },
        ],
      },
      7: {
        type: 'map',
        question: 'Your Location',
        field: 'locationDetails',
      },
      8: {
        type: 'addressConfirm',
        question: 'Confirm your address details',
      },
      9: {
        question: 'Where did you hear about us?',
        field: 'heardFrom',
        options: [
          {
            label: 'GOOGLE',
            value: 'Google',
            icon: '/icons/heard-from/google.svg',
          },
          {
            label: 'LINKEDIN',
            value: 'Linked In',
            icon: '/icons/heard-from/linkedin.svg',
          },
          {
            label: 'FACEBOOK',
            value: 'Facebook',
            icon: '/icons/heard-from/facebook.svg',
          },
          {
            label: 'INSTAGRAM',
            value: 'Instagram',
            icon: '/icons/heard-from/instagram.svg',
          },
          {
            label: 'FRIEND',
            value: 'Word of Mouth',
            icon: '/icons/heard-from/chat.svg',
          },
          { label: 'VANS', value: 'Vans', icon: '/icons/heard-from/van.svg' },
          {
            label: 'FLYER',
            value: 'Flyer',
            icon: '/icons/heard-from/flyer.svg',
          },
          {
            label: 'OTHER',
            value: 'Other',
            icon: '/icons/heard-from/more.svg',
          },
        ],
      },
      10: {
        type: 'final',
        question: 'Final Step: Additional Details & Security',
        field: 'details',
        placeholder:
          "Anything else we should know? (e.g. 'I have a flat roof' or 'Call me after 5pm')",
      },
    },

    commercial: {
      // Step 2: Property Ownership
      2: {
        question: 'Do you own the business premises?',
        field: 'commercialOwnership', // Updated
        options: [
          { label: 'YES, WE OWN IT', value: 'Own', icon: '/icons/own.svg' },
          {
            label: 'NO, WE LEASE IT',
            value: 'Lease',
            icon: '/icons/lease.svg',
          },
          {
            label: 'WE ARE THE LANDLORD',
            value: 'Landlord',
            icon: '/icons/landlord.svg',
          },
        ],
      },
      3: {
        type: 'contact',
      },
      // Step 4: Mounting Requirement
      4: {
        question: 'Where will the panels be mounted?',
        field: 'commercialSolarMounting', // Was 'solarType'
        options: [
          {
            label: 'PITCHED ROOF',
            value: 'Pitched Roof',
            icon: '/icons/commercial/pitched.svg',
          },
          {
            label: 'FLAT ROOF',
            value: 'Flat Roof',
            icon: '/icons/commercial/flat.svg',
          },
          {
            label: 'GROUND MOUNT',
            value: 'Ground Mount',
            icon: '/icons/commercial/ground.svg',
          },
          {
            label: 'OTHER',
            value: 'Other',
            icon: '/icons/commercial/other.svg',
          },
        ],
      },
      5: {
        type: 'map',
        question: 'Find the business location on the map',
        field: 'locationDetails',
      },
      6: {
        type: 'addressConfirm',
        question: 'Confirm Business Address',
      },
      7: {
        question: 'Where did you hear about us?',
        field: 'heardFrom',
        options: [
          {
            label: 'GOOGLE',
            value: 'Google',
            icon: '/icons/heard-from/google.svg',
          },
          {
            label: 'LINKEDIN',
            value: 'Linked In',
            icon: '/icons/heard-from/linkedin.svg',
          },
          {
            label: 'FACEBOOK',
            value: 'Facebook',
            icon: '/icons/heard-from/facebook.svg',
          },
          {
            label: 'INSTAGRAM',
            value: 'Instagram',
            icon: '/icons/heard-from/instagram.svg',
          },
          {
            label: 'FRIEND',
            value: 'Word of Mouth',
            icon: '/icons/heard-from/chat.svg',
          },
          { label: 'VANS', value: 'Vans', icon: '/icons/heard-from/van.svg' },
          {
            label: 'FLYER',
            value: 'Flyer',
            icon: '/icons/heard-from/flyer.svg',
          },
          {
            label: 'OTHER',
            value: 'Other',
            icon: '/icons/heard-from/more.svg',
          },
        ],
      },
      8: {
        type: 'final',
        question: 'Final Details & Security',
        field: 'details',
        placeholder:
          'Tell us about your business hours or specific site access requirements...',
      },
    },
  },

  electrical: {
    domestic: {
      2: {
        question: 'Where did you hear about us?',
        field: 'heardFrom',
        options: [
          {
            label: 'GOOGLE',
            value: 'Google',
            icon: '/icons/heard-from/google.svg',
          },
          {
            label: 'LINKEDIN',
            value: 'Linked In',
            icon: '/icons/heard-from/linkedin.svg',
          },
          {
            label: 'FACEBOOK',
            value: 'Facebook',
            icon: '/icons/heard-from/facebook.svg',
          },
          {
            label: 'INSTAGRAM',
            value: 'Instagram',
            icon: '/icons/heard-from/instagram.svg',
          },
          {
            label: 'FRIEND',
            value: 'Word of Mouth',
            icon: '/icons/heard-from/chat.svg',
          },
          { label: 'VANS', value: 'Vans', icon: '/icons/heard-from/van.svg' },
          {
            label: 'FLYER',
            value: 'Flyer',
            icon: '/icons/heard-from/flyer.svg',
          },
          {
            label: 'OTHER',
            value: 'Other',
            icon: '/icons/heard-from/more.svg',
          },
        ],
      },
      3: { type: 'contact' },
      4: {
        type: 'map',
        question: 'Pinpoint the property location',
        field: 'locationDetails',
      },
      5: { type: 'addressConfirm', question: 'Confirm Address Details' },
      6: {
        type: 'final',
        question: 'Final Details & Security',
        field: 'details',
        placeholder: 'Briefly describe the electrical work you need doing...',
      },
    },
    commercial: {
      2: {
        question: 'Where did you hear about us?',
        field: 'heardFrom',
        options: [
          {
            label: 'GOOGLE',
            value: 'Google',
            icon: '/icons/heard-from/google.svg',
          },
          {
            label: 'LINKEDIN',
            value: 'Linked In',
            icon: '/icons/heard-from/linkedin.svg',
          },
          {
            label: 'FACEBOOK',
            value: 'Facebook',
            icon: '/icons/heard-from/facebook.svg',
          },
          {
            label: 'INSTAGRAM',
            value: 'Instagram',
            icon: '/icons/heard-from/instagram.svg',
          },
          {
            label: 'FRIEND',
            value: 'Word of Mouth',
            icon: '/icons/heard-from/chat.svg',
          },
          { label: 'VANS', value: 'Vans', icon: '/icons/heard-from/van.svg' },
          {
            label: 'FLYER',
            value: 'Flyer',
            icon: '/icons/heard-from/flyer.svg',
          },
          {
            label: 'OTHER',
            value: 'Other',
            icon: '/icons/heard-from/more.svg',
          },
        ],
      },
      3: { type: 'contact' },
      4: {
        type: 'map',
        question: 'Pinpoint the business location',
        field: 'locationDetails',
      },
      5: { type: 'addressConfirm', question: 'Confirm Business Address' },
      6: {
        type: 'final',
        question: 'Final Details & Security',
        field: 'details',
        placeholder: 'Briefly describe the electrical work you need doing...',
      },
    },
  },

  ev: {
    domestic: {
      2: {
        question: 'Which type of charger do you prefer?',
        field: 'evDomesticChargerPreference', // Was 'solarType'
        options: [
          {
            label: 'TETHERED (Cable attached)',
            value: 'Tethered',
            icon: '/icons/ev/tethered.svg',
          },
          {
            label: 'UN-TETHERED (Socket only)',
            value: 'Un-tethered',
            icon: '/icons/ev/untethered.svg',
          },
          { label: 'NOT SURE', value: 'Not Sure', icon: '/icons/ev/help.svg' },
        ],
      },
      3: { type: 'contact' },
      4: {
        question: 'Distance from your meter to the charger?',
        field: 'evDomesticDistance', // Was 'Charger Distance'
        options: [
          {
            label: 'UNDER 5 METRES',
            value: 'Under 5m',
            icon: '/icons/ev/dist-s.svg',
          },
          {
            label: '5 - 15 METRES',
            value: '5-15m',
            icon: '/icons/ev/dist-m.svg',
          },
          {
            label: 'OVER 15 METRES',
            value: 'Over 15m',
            icon: '/icons/ev/dist-l.svg',
          },
        ],
      },
      5: {
        type: 'map',
        question: 'Pinpoint your driveway/garage location',
        field: 'locationDetails',
      },
      6: { type: 'addressConfirm', question: 'Confirm Installation Address' },
      7: {
        question: 'Where did you hear about us?',
        field: 'heardFrom',
        options: [
          {
            label: 'GOOGLE',
            value: 'Google',
            icon: '/icons/heard-from/google.svg',
          },
          {
            label: 'LINKEDIN',
            value: 'Linked In',
            icon: '/icons/heard-from/linkedin.svg',
          },
          {
            label: 'FACEBOOK',
            value: 'Facebook',
            icon: '/icons/heard-from/facebook.svg',
          },
          {
            label: 'INSTAGRAM',
            value: 'Instagram',
            icon: '/icons/heard-from/instagram.svg',
          },
          {
            label: 'FRIEND',
            value: 'Word of Mouth',
            icon: '/icons/heard-from/chat.svg',
          },
          { label: 'VANS', value: 'Vans', icon: '/icons/heard-from/van.svg' },
          {
            label: 'FLYER',
            value: 'Flyer',
            icon: '/icons/heard-from/flyer.svg',
          },
          {
            label: 'OTHER',
            value: 'Other',
            icon: '/icons/heard-from/more.svg',
          },
        ],
      },
      8: {
        type: 'final',
        question: 'Final Security Check',
        field: 'details',
        placeholder:
          'Do you already have an EV, or are you waiting for delivery?',
      },
    },
    commercial: {
      2: {
        question: 'What is the primary use for the chargers?',
        field: 'evCommercialPrimaryUse', // Was 'solarType'
        options: [
          {
            label: 'WORKPLACE (Employees)',
            value: 'Workplace',
            icon: '/icons/commercial/office.svg',
          },
          {
            label: 'FLEET (Company Vans/Cars)',
            value: 'Fleet',
            icon: '/icons/commercial/van.svg',
          },
          {
            label: 'PUBLIC / GUEST',
            value: 'Public',
            icon: '/icons/commercial/hotel.svg',
          },
        ],
      },
      3: { type: 'contact' },
      4: {
        question: 'How many charge points are required?',
        field: 'evCommercialChargePoints', // Was 'homeSize'
        options: [
          {
            label: '1 - 4 POINTS',
            value: '1-4',
            icon: '/icons/ev/tethered.svg',
          },
          {
            label: '5 - 10 POINTS',
            value: '5-10',
            icon: '/icons/ev/tethered.svg',
          },
          { label: '10+ POINTS', value: '10+', icon: '/icons/ev/tethered.svg' },
        ],
      },
      5: {
        question: 'Does the site have 3-phase power?',
        field: 'evCommercialPowerSupply', // Was 'elecUsage'
        options: [
          { label: 'YES', value: '3-Phase', icon: '/icons/ev/yes.svg' },
          {
            label: 'NO (Single Phase)',
            value: 'Single Phase',
            icon: '/icons/ev/no.svg',
          },
          { label: 'NOT SURE', value: 'Not Sure', icon: '/icons/ev/help.svg' },
        ],
      },
      6: {
        type: 'map',
        question: 'Locate the installation site',
        field: 'locationDetails',
      },
      7: { type: 'addressConfirm', question: 'Confirm Business Address' },
      8: {
        question: 'Where did you hear about us?',
        field: 'heardFrom',
        options: [
          {
            label: 'GOOGLE',
            value: 'Google',
            icon: '/icons/heard-from/google.svg',
          },
          {
            label: 'LINKEDIN',
            value: 'Linked In',
            icon: '/icons/heard-from/linkedin.svg',
          },
          {
            label: 'FACEBOOK',
            value: 'Facebook',
            icon: '/icons/heard-from/facebook.svg',
          },
          {
            label: 'INSTAGRAM',
            value: 'Instagram',
            icon: '/icons/heard-from/instagram.svg',
          },
          {
            label: 'FRIEND',
            value: 'Word of Mouth',
            icon: '/icons/heard-from/chat.svg',
          },
          { label: 'VANS', value: 'Vans', icon: '/icons/heard-from/van.svg' },
          {
            label: 'FLYER',
            value: 'Flyer',
            icon: '/icons/heard-from/flyer.svg',
          },
          {
            label: 'OTHER',
            value: 'Other',
            icon: '/icons/heard-from/more.svg',
          },
        ],
      },
      9: {
        type: 'final',
        question: 'Additional Requirements',
        field: 'details',
        placeholder:
          'Any specific hardware preferences or back-end billing requirements?',
      },
    },
  },
};
