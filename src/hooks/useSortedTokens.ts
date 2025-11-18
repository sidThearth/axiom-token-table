import { useMemo } from 'react';
import { TokenItem } from '@/redux/tokensSlice';
import { RootState } from '@/redux/store'; // Ensure this path is correct for your store export
import { useAppSelector } from '@/redux/hooks';

export const useSortedTokens = (tokens: TokenItem[]): TokenItem[] => {
  const sortBy = useAppSelector((state: RootState) => state.tokens.sortBy);

  const sortedItems = useMemo(() => {
    if (tokens.length === 0) return [];
    
    let sortableItems = [...tokens];

    sortableItems.sort((a, b) => {
      let aValue: number;
      let bValue: number;
      
      const direction = -1; // Descending

      switch (sortBy) {
        case 'marketCap': aValue = a.marketCap; bValue = b.marketCap; break;
        case 'liquidity': aValue = a.liquidity; bValue = b.liquidity; break;
        case 'txns': aValue = a.txns; bValue = b.txns; break;
        case 'price': aValue = a.price; bValue = b.price; break;
        case 'change': aValue = a.marketCapChange; bValue = b.marketCapChange; break;
        case 'volume':
        default: aValue = a.volume; bValue = b.volume; break;
      }
      
      if (aValue < bValue) return 1 * direction;
      if (aValue > bValue) return -1 * direction;
      return 0;
    });

    return sortableItems;
  }, [tokens, sortBy]);

  return sortedItems;
};