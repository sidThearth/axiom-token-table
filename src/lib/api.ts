import type { TokenItem } from '@/redux/tokensSlice';

export async function fetchTokens(): Promise<TokenItem[]> {
  await new Promise((r) => setTimeout(r, 600));

  const base: TokenItem[] = [
    { 
      id: 'jc', symbol: 'JC', name: 'Justice for JC', image: '', category: 'new',
      price: 0.00045, marketCap: 88300, marketCapChange: 687.6, 
      liquidity: 29700, volume: 157000, 
      txns: 1870, buys: 973, sells: 893,
      auditScore: 90, topHolder: 20.53, isUnpaid: true, timeSince: '2m',
      hasTwitter: true, hasTelegram: true, hasWebsite: true
    },
    { 
      id: 'jia', symbol: 'Jia Cheng', name: 'Justice ...', image: '', category: 'new',
      price: 0.0021, marketCap: 15000, marketCapChange: 133, 
      liquidity: 16500, volume: 53900, 
      txns: 424, buys: 228, sells: 196,
      auditScore: 75, topHolder: 25.75, isUnpaid: true, timeSince: '3m',
      hasTwitter: true, hasTelegram: false, hasWebsite: true
    },
    { 
      id: 'btc', symbol: 'BTC', name: 'Blackmail Tech...', image: '', category: 'final',
      price: 12.2, marketCap: 12200, marketCapChange: 37.46, 
      liquidity: 14900, volume: 35200, 
      txns: 414, buys: 233, sells: 181,
      auditScore: 42, topHolder: 24.62, isUnpaid: true, timeSince: '4m',
      hasTwitter: false, hasTelegram: true, hasWebsite: false
    },
    { 
        id: 'coll', symbol: 'Collectibles', name: 'Digital Art', image: '', category: 'migrated',
        price: 4.20, marketCap: 15600, marketCapChange: -7.91, 
        liquidity: 16900, volume: 48200, 
        txns: 691, buys: 377, sells: 314,
        auditScore: 97, topHolder: 19.64, isUnpaid: false, timeSince: '9m',
        hasTwitter: true, hasTelegram: true, hasWebsite: true
    },
    { 
      id: 'spsc', symbol: 'SPSC', name: 'Shit Piss Skin ...', image: '', category: 'new',
      price: 0.00001, marketCap: 3240, marketCapChange: 37.97, 
      liquidity: 228000, volume: 50700, 
      txns: 70, buys: 30, sells: 40,
      auditScore: 10, topHolder: 19.64, isUnpaid: false, timeSince: '13d',
      hasTwitter: true, hasTelegram: true, hasWebsite: true
    }
  ];
  
  return base;
}