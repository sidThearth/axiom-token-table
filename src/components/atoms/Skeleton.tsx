// /src/components/atoms/Skeleton.tsx (COMPLETED)

import React from 'react';

// The 'skeleton' class is defined in globals.css for the shimmer animation
export default function Skeleton({ className = '' }: { className?: string }) {
  return <div className={`skeleton ${className}`} aria-hidden />;
}