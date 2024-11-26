'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const ProgressBarProviders = ({ children }) => (
  <>
    {children}
    <ProgressBar
      height="4px"
      color="white"
      options={{ showSpinner: false }}
      shallowRouting
    />
  </>
);

export default ProgressBarProviders;
