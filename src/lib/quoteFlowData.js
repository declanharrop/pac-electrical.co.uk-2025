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
        question: 'Your Location',
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
      // Step 2: Property Ownership
      2: {
        question: 'Do you own the business premises?',
        field: 'ownership',
        options: [
          {
            label: 'YES, WE OWN IT',
            value: 'Own',
            icon: '/icons/own.svg',
          },
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
      // Step 3: Initial Contact (Triggers Zapier Lead)
      3: {
        type: 'contact',
      },
      // Step 4: Mounting Requirement
      4: {
        question: 'Where will the panels be mounted?',
        field: 'solarType',
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
      // Step 5: The Map (Exact Rooftop Location)
      5: {
        type: 'map',
        question: 'Find the business location on the map',
        field: 'locationDetails',
      },
      // Step 6: Address Confirmation
      6: {
        type: 'addressConfirm',
        question: 'Confirm Business Address',
      },
      // Step 7: Marketing Attribution
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
      // Step 8: Final Submission
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
      // Step 2: Marketing Attribution
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
      // Step 3: Contact Details (Triggers Zapier Lead)
      3: { type: 'contact' },
      // Step 4: The Map
      4: {
        type: 'map',
        question: 'Pinpoint the property location',
        field: 'locationDetails',
      },
      // Step 5: Address Confirmation
      5: { type: 'addressConfirm', question: 'Confirm Address Details' },
      // Step 6: Final Submission
      6: {
        type: 'final',
        question: 'Final Details & Security',
        field: 'details',
        placeholder:
          'Briefly describe the electrical work you need doing (e.g., EICR test, full rewire, fault finding)...',
      },
    },

    commercial: {
      // Step 2: Marketing Attribution
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
      // Step 3: Contact Details (Triggers Zapier Lead)
      3: { type: 'contact' },
      // Step 4: The Map
      4: {
        type: 'map',
        question: 'Pinpoint the business location',
        field: 'locationDetails',
      },
      // Step 5: Address Confirmation
      5: { type: 'addressConfirm', question: 'Confirm Business Address' },
      // Step 6: Final Submission
      6: {
        type: 'final',
        question: 'Final Details & Security',
        field: 'details',
        placeholder:
          'Briefly describe the electrical work you need doing (e.g., LED lighting upgrade, 3-phase installation)...',
      },
    },
  },

  ev: {
    domestic: {
      2: {
        question: 'Which type of charger do you prefer?',
        field: 'solarType', // Re-using solarType for Charger Type
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
      // Step 3: Charger Preference
      // Step 5: Mileage / Usage
      4: {
        question: 'Distance from your meter to the charger?',
        field: 'Charger Distance', // We can store this in details or a custom field
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
      // Step 2: Use Case
      2: {
        question: 'What is the primary use for the chargers?',
        field: 'solarType',
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
      // Step 3: Contact
      3: { type: 'contact' },
      // Step 4: Scale
      4: {
        question: 'How many charge points are required?',
        field: 'homeSize',
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
          {
            label: '10+ POINTS',
            value: '10+',
            icon: '/icons/ev/tethered.svg',
          },
        ],
      },
      // Step 5: Power Supply
      5: {
        question: 'Does the site have 3-phase power?',
        field: 'elecUsage',
        options: [
          {
            label: 'YES',
            value: '3-Phase',
            icon: '/icons/ev/yes.svg',
          },
          {
            label: 'NO (Single Phase)',
            value: 'Single Phase',
            icon: '/icons/ev/no.svg',
          },
          {
            label: 'NOT SURE',
            value: 'Not Sure',
            icon: '/icons/ev/help.svg',
          },
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
