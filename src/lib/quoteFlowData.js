// src/lib/quoteFlowData.js

export const quoteQuestions = {
  solar: {
    domestic: {
      // Step 1 is handled by SectorStep.js (Domestic/Commercial)

      // Step 2: What are you looking for today?
      2: {
        question: 'What are you looking for today?',
        field: 'solarType', // Saves to Context under 'solarType'
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
            fullWidth: true, // Spans the bottom of the grid
          },
        ],
      },
      4: {
        question: 'Do You Know Your Annual Electricity Usage?',
        field: 'knowsUsage', // Saves "Yes" or "No" to Context
        options: [
          {
            label: 'YES',
            value: 'Yes',
            icon: '/icons/yes-alt.svg',
            nextStep: 5, // Routes them to Step 5 to type it in
          },
          {
            label: "I'M NOT SURE",
            value: 'No',
            icon: '/icons/no-alt.svg',
            nextStep: 6, // Skips Step 5 and goes straight to Step 6
          },
        ],
      },
      5: {
        type: 'input', // Tells the router to use the InputStep component
        question: 'Great, enter your Annual Electricity Usage (kWh)',
        field: 'elecUsage',
        placeholder: 'e.g. 4500',
        inputType: 'number', // Brings up the number keyboard on mobile!
        nextStep: 6, // After submitting, go to Step 6 to rejoin the flow
      },
      6: {
        question: 'What is the size of your home?',
        field: 'homeSize',
        options: [
          {
            label: '2/3 BED',
            value: '2/3 Bed',
            icon: '/icons/home-alt.svg',
          },
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
          {
            label: 'OTHER',
            value: 'Other',
            icon: '/icons/other-home-alt.svg',
          },
        ],
      },
      7: {
        type: 'map',
        question: 'Find your exact roof on the map',
        field: 'locationDetails', // We will save an object with address, lat, and lng
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
        field: 'details', // This maps to your 'details' field in Context
        placeholder:
          "Anything else we should know? (e.g. 'I have a flat roof' or 'Call me after 5pm')",
      },

      // Step 6 will be the next multiple choice question
      // 6: { ... }
    },

    commercial: {
      // We will populate this later!
    },
  },

  electrical: {
    domestic: {},
    commercial: {},
  },

  ev: {
    domestic: {},
    commercial: {},
  },
};
