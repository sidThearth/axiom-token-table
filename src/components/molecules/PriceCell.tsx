// /src/components/molecules/PriceCell.tsx (COMPLETED)
'use client';
import React, { useEffect, useState } from 'react';

export default function PriceCell({ price, prev }: { price: number; prev?: number }) {
  const [flash, setFlash] = useState<'up'|'down'|'none'>('none');
  
  // 核心逻辑: Detect change, apply flash class, and clear it after transition.
  useEffect(() => {
    // Only run if the previous price exists (meaning we have history)
    if (prev === undefined || price === prev) {
        setFlash('none');
        return;
    }

    if (price > prev) setFlash('up');
    else if (price < prev) setFlash('down');

    // Timer matches the CSS transition duration (400ms defined in globals.css)
    const t = setTimeout(() => {
        // Clear the flash class after the transition ends
        setFlash('none');
    }, 450); // Slightly longer than CSS transition

    return () => clearTimeout(t);
  }, [price, prev]);

  return (
    // Apply the class defined in globals.css: .price-up or .price-down
    <div className={`text-right text-sm px-2 ${flash === 'up' ? 'price-up' : flash==='down' ? 'price-down' : ''}`}>
      {/* Use toFixed(6) for crypto prices for precision */}
      {price.toFixed(6)}
    </div>
  );
}