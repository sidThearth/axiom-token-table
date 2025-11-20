import React, { useEffect, useRef, useState } from 'react';
import { formatCurrency } from '@/lib/formatters';
import { cn } from '@/lib/utils';

interface PriceCellProps {
  price: number;
}

export const PriceCell: React.FC<PriceCellProps> = ({ price }) => {
  const prevPriceRef = useRef(price);
  const [flashState, setFlashState] = useState<'none' | 'green' | 'red'>('none');

  useEffect(() => {
    if (price > prevPriceRef.current) {
      setFlashState('green');
    } else if (price < prevPriceRef.current) {
      setFlashState('red');
    }

    prevPriceRef.current = price;

    const timer = setTimeout(() => {
      setFlashState('none');
    }, 1000); // Match animation duration

    return () => clearTimeout(timer);
  }, [price]);

  return (
    <div
      className={cn(
        "font-mono font-medium transition-colors duration-300 px-2 py-1 rounded",
        flashState === 'green' && "animate-flash-green text-axiom-success",
        flashState === 'red' && "animate-flash-red text-axiom-danger",
        flashState === 'none' && "text-axiom-text-primary"
      )}
    >
      {formatCurrency(price)}
    </div>
  );
};