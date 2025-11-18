'use client';

import React from 'react';
import Skeleton from '@/components/atoms/Skeleton';

export default function TableSkeleton() {
  // Matches the parent table's 8-column grid
  const gridCols = "grid-cols-[2.4fr_1.2fr_1.2fr_1fr_1fr_1fr_1.8fr_0.8fr]";

  return (
    <div className={`grid ${gridCols} px-4 py-3.5 items-center border-b border-[#1a1a1a] bg-[#09090b]`}>
      {/* 1. Pair Info (Image + Text) */}
      <div className="flex items-center gap-3 pr-2">
        <Skeleton className="w-11 h-11 rounded-md bg-[#222]" />
        <div className="flex flex-col gap-1.5 w-full">
           <Skeleton className="h-3 w-16 bg-[#222]" />
           <Skeleton className="h-2 w-24 bg-[#222]" />
        </div>
      </div>

      {/* 2. Chart */}
      <div className="pr-4">
        <Skeleton className="h-6 w-full bg-[#222] opacity-50" />
      </div>

      {/* 3. Market Cap */}
      <div>
        <Skeleton className="h-3 w-12 bg-[#222] mb-1" />
        <Skeleton className="h-2 w-8 bg-[#222] opacity-50" />
      </div>

      {/* 4. Liquidity */}
      <div><Skeleton className="h-3 w-12 bg-[#222]" /></div>

      {/* 5. Volume */}
      <div><Skeleton className="h-3 w-12 bg-[#222]" /></div>

      {/* 6. TXNS */}
      <div>
         <Skeleton className="h-3 w-10 bg-[#222] mb-1" />
         <div className="flex gap-1">
            <Skeleton className="h-1.5 w-4 bg-[#222]" />
            <Skeleton className="h-1.5 w-4 bg-[#222]" />
         </div>
      </div>

      {/* 7. Info Icons */}
      <div className="grid grid-cols-2 gap-2">
         <Skeleton className="h-3 w-full bg-[#222]" />
         <Skeleton className="h-3 w-full bg-[#222]" />
      </div>

      {/* 8. Action Button */}
      <div className="text-right">
         <Skeleton className="h-7 w-16 rounded-full bg-[#222] ml-auto" />
      </div>
    </div>
  );
}