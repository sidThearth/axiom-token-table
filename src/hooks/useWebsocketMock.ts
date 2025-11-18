import { useEffect, useRef } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { upsertToken } from '@/redux/tokensSlice';

export default function useWebsocketMock(activeIds: string[]) {
  const dispatch = useAppDispatch();
  const tick = useRef(0);

  useEffect(() => {
    if (activeIds.length === 0) return;
    
    // Run updates every 1.5 seconds for "Real-time" feel without chaos
    const intervalId = setInterval(() => {
      tick.current += 1;
      
      // Update roughly 40% of the visible tokens each tick
      const numToUpdate = Math.max(1, Math.floor(activeIds.length * 0.4));
      
      for (let i = 0; i < numToUpdate; i++) {
        const randomIdx = Math.floor(Math.random() * activeIds.length);
        const id = activeIds[randomIdx];
        
        dispatch((dispatch, getState) => {
            const state = getState();
            const currentToken = state.tokens.byId[id];
            
            if (!currentToken) return;

            // Generate realistic market movement
            const isBuy = Math.random() > 0.45;
            // Price moves between -1.2% and +1.2%
            const percentChange = (Math.random() - 0.45) * 2.4; 
            
            const newPrice = currentToken.price * (1 + (percentChange / 100));
            const newMarketCap = currentToken.marketCap * (1 + (percentChange / 100));
            
            // Dampened impact on the 24h % change
            const newCapChange = currentToken.marketCapChange + (percentChange * 0.05);

            dispatch(upsertToken({
                ...currentToken,
                price: newPrice,
                prevPrice: currentToken.price, // Critical for change detection
                marketCap: newMarketCap,
                marketCapChange: newCapChange,
                txns: currentToken.txns + 1,
                buys: isBuy ? currentToken.buys + 1 : currentToken.buys,
                sells: !isBuy ? currentToken.sells + 1 : currentToken.sells,
            }));
        });
      }
    }, 1500);

    return () => clearInterval(intervalId);
  }, [activeIds, dispatch]);
}