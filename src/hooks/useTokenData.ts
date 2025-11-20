import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { webSocketService, TokenUpdate } from '@/services/websocket';

export interface Token {
    id: string;
    name: string;
    symbol: string;
    price: number;
    volume: number;
    change24h: number;
    isNew?: boolean;
    isMigrated?: boolean;
    iconUrl?: string;
}

// Mock initial data
const MOCK_TOKENS: Token[] = Array.from({ length: 50 }).map((_, i) => ({
    id: `token-${i}`,
    name: `Token ${i + 1}`,
    symbol: `TKN${i + 1}`,
    price: Math.random() * 100,
    volume: Math.random() * 500000,
    change24h: (Math.random() * 20) - 10,
    isNew: Math.random() > 0.8,
    isMigrated: Math.random() > 0.9,
}));

const fetchTokens = async (): Promise<Token[]> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return MOCK_TOKENS;
};

export const useTokenData = () => {
    const queryClient = useQueryClient();

    const { data: tokens, isLoading, error } = useQuery({
        queryKey: ['tokens'],
        queryFn: fetchTokens,
    });

    useEffect(() => {
        if (!tokens) return;

        const tokenIds = tokens.map((t) => t.id);
        webSocketService.connect(tokenIds);

        const handleUpdate = (updates: TokenUpdate[]) => {
            queryClient.setQueryData<Token[]>(['tokens'], (oldTokens) => {
                if (!oldTokens) return oldTokens;

                return oldTokens.map((token) => {
                    const update = updates.find((u) => u.id === token.id);
                    if (update) {
                        return { ...token, ...update };
                    }
                    return token;
                });
            });
        };

        webSocketService.on('message', handleUpdate);

        return () => {
            webSocketService.off('message', handleUpdate);
            webSocketService.disconnect();
        };
    }, [tokens, queryClient]);

    return { tokens, isLoading, error };
};
