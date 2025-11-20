import { EventEmitter } from 'events';

export interface TokenUpdate {
    id: string;
    price: number;
    volume: number;
    change24h: number;
}

class MockWebSocketService extends EventEmitter {
    private intervalId: NodeJS.Timeout | null = null;
    private tokens: string[] = [];

    constructor() {
        super();
    }

    connect(tokenIds: string[]) {
        this.tokens = tokenIds;
        this.startUpdates();
    }

    disconnect() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    private startUpdates() {
        this.intervalId = setInterval(() => {
            const updates: TokenUpdate[] = this.tokens.map((id) => ({
                id,
                price: this.generateRandomPrice(),
                volume: this.generateRandomVolume(),
                change24h: this.generateRandomChange(),
            }));

            // Simulate partial updates (not all tokens update every tick)
            const partialUpdates = updates.filter(() => Math.random() > 0.7);

            if (partialUpdates.length > 0) {
                this.emit('message', partialUpdates);
            }
        }, 2000); // Updates every 2 seconds
    }

    private generateRandomPrice() {
        return Math.random() * 1000;
    }

    private generateRandomVolume() {
        return Math.random() * 1000000;
    }

    private generateRandomChange() {
        return (Math.random() * 20) - 10; // -10% to +10%
    }
}

export const webSocketService = new MockWebSocketService();
