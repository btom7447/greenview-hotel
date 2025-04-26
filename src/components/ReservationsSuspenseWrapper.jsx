'use client';

import { Suspense } from 'react';
import CheckAvailabilitySection from './CheckAvailabilitySection';

const ReservationsSuspenseWrapper = () => {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading availability...</div>}>
      <CheckAvailabilitySection />
    </Suspense>
  );
};

export default ReservationsSuspenseWrapper;
