'use client';

import React, { useEffect, useState, useRef } from 'react';

interface FlashNumberProps {
  value: number;
  formatter: (val: number) => string;
  className?: string;
  prefix?: string;
}

export default function FlashNumber({ value, formatter, className = '', prefix = '' }: FlashNumberProps) {
  const [flash, setFlash] = useState<'up' | 'down' | null>(null);
  const prevValue = useRef(value);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Only flash if value actually changed
    if (value === prevValue.current) return;

    const direction = value > prevValue.current ? 'up' : 'down';
    setFlash(direction);
    prevValue.current = value;

    // Clear existing timeout to prevent race conditions
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Remove flash class after 800ms for smooth fade out
    timeoutRef.current = setTimeout(() => setFlash(null), 800);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [value]);

  // Dynamic classes for smooth color transition
  // We use text color AND a subtle background flash for visibility
  let flashClass = 'text-gray-200 bg-transparent transition-colors duration-500';
  
  if (flash === 'up') {
    flashClass = 'text-[#22c55e] bg-[#22c55e]/10 transition-none'; // Instant on
  } else if (flash === 'down') {
    flashClass = 'text-[#ef4444] bg-[#ef4444]/10 transition-none'; // Instant on
  }

  return (
    <span className={`inline-block px-1 rounded-sm ${flashClass} ${className}`}>
      {prefix}{formatter(value)}
    </span>
  );
}