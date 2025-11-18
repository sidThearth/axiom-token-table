// /src/components/atoms/Spinner.tsx (COMPLETED)

import React from 'react';

/**
 * A basic, accessible spinning loading indicator.
 */
export default function Spinner() {
  return (
    // Uses standard Tailwind/CSS for a ring spinner effect
    <div 
      role="status" 
      className="inline-block animate-spin w-5 h-5 border-2 border-brand-500 border-t-transparent rounded-full"
      aria-live="polite"
      aria-label="Loading"
    />
  );
}