import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TokenCategory = 'new' | 'final' | 'migrated';

export type TokenItem = {
  id: string;
  symbol: string;
  name: string;
  image: string; 
  // Market Data
  price: number;
  prevPrice?: number; 
  marketCap: number;
  marketCapChange: number; 
  liquidity: number;
  volume: number;
  // Transactions
  txns: number;
  buys: number;
  sells: number;
  // Token Info / Audit
  auditScore: number; 
  topHolder: number; 
  isUnpaid: boolean;
  timeSince: string; 
  // Socials
  hasTwitter: boolean;
  hasTelegram: boolean;
  hasWebsite: boolean;
  // Category for columns
  category: TokenCategory;
};

export type SortKey = 'volume' | 'price' | 'change' | 'liquidity' | 'marketCap' | 'txns';

type TokensState = {
  ids: string[];
  byId: Record<string, TokenItem>;
  loading: boolean;
  error?: string;
  sortBy: SortKey;
  selectedId?: string;
  activeCategory: TokenCategory; // Track active tab
};

const initialState: TokensState = { 
  ids: [], 
  byId: {}, 
  loading: false, 
  sortBy: 'txns' as SortKey,
  activeCategory: 'new' // Default view
};

const tokensSlice = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    upsertTokens(state, action: PayloadAction<TokenItem[]>) {
      action.payload.forEach((t) => {
        if (!state.ids.includes(t.id)) state.ids.push(t.id);
        state.byId[t.id] = { ...(state.byId[t.id] ?? {}), ...t };
      });
    },
    upsertToken(state, action: PayloadAction<TokenItem>) {
      const t = action.payload;
      if (!state.ids.includes(t.id)) state.ids.push(t.id);
      const prev = state.byId[t.id]?.price;
      state.byId[t.id] = { ...state.byId[t.id], ...t, prevPrice: prev };
    },
    setError(state, action: PayloadAction<string | undefined>) {
      state.error = action.payload;
    },
    setSelected(state, action: PayloadAction<string | undefined>) {
      state.selectedId = action.payload;
    },
    setSort(state, action: PayloadAction<SortKey>) {
      state.sortBy = action.payload;
    },
    setCategory(state, action: PayloadAction<TokenCategory>) {
      state.activeCategory = action.payload;
    }
  },
});

export const { 
  setLoading, upsertTokens, upsertToken, setError, setSelected, setSort, setCategory 
} = tokensSlice.actions;
export default tokensSlice.reducer;