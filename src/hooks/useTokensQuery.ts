// /src/hooks/useTokensQuery.ts (v5 Compatible)

import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTokens } from '@/lib/api';
import { useAppDispatch } from '@/redux/hooks'; 
import { setLoading, upsertTokens, setError, TokenItem } from '@/redux/tokensSlice';

export function useTokensQuery() {
  const dispatch = useAppDispatch();

  // 1. Initialize the query
  const query = useQuery<TokenItem[], Error>({
    queryKey: ['tokens'],
    queryFn: fetchTokens,
    staleTime: 5000,
    // ❌ onSuccess and onError are REMOVED in v5. Do not use them here.
  });

  // 2. Handle Success Side Effect
  useEffect(() => {
    if (query.data) {
      dispatch(upsertTokens(query.data));
      // dispatch(setLoading(false)); // Optional if you use loading state
    }
  }, [query.data, dispatch]);

  // 3. Handle Error Side Effect
  useEffect(() => {
    if (query.error) {
      dispatch(setError(String(query.error)));
    }
  }, [query.error, dispatch]);

  return query;
}