'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function GetAQuoteButton({ Title = 'Explore More', onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      style={{ marginTop: '20px', display: 'inline-block' }}
      onClick={onClick}
    >
      {/* We use a div or button here, NOT a Link */}
      <button
        type="button"
        // Add your button styles here (e.g. from CSS module or Tailwind)
        style={{
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          background: 'var(--green)',
          color: '#fff',
          padding: '30px 34px',
          fontSize: '16px',
          borderRadius: '40px',
        }}
      >
        {Title}
        <svg
          width="45px"
          height="20px"
          viewBox="0 0 47 21"
          style={{ marginLeft: '16px' }}
        >
          <path
            d="M46.1782464,9.71281213 C46.3842337,9.92123679 46.5,10.2042381 46.5,10.4993684 C46.5,10.7944987 46.3842337,11.0775 46.1782464,11.2859247 L37.4167145,20.1735661 C36.9884753,20.6079692 36.2941625,20.6079692 35.8659234,20.1735661 C35.4376842,19.7391631 35.4376842,19.0348566 35.8659234,18.6004536 L42.7590585,11.6103236 L1.59519148,11.6103236 C0.990333929,11.6103236 0.5,11.112932 0.5,10.4993684 C0.5,9.88580479 0.990333929,9.38841322 1.59519148,9.38841322 L42.7590585,9.38841322 L35.8659234,2.39828321 C35.4376842,1.96388017 35.4376842,1.25957371 35.8659234,0.825170679 C36.2941625,0.390767651 36.9884753,0.390767645 37.4167145,0.825170667 L46.1782464,9.71281213 Z"
            id="arrow"
            fill="#FFFFFF" // Ensure this matches your design
            fillRule="nonzero"
          />
        </svg>
      </button>
    </motion.div>
  );
}
