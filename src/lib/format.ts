export function formatLargeNumber(n: number, decimals = 2): string {
    if (n === 0) return '0';
    const absN = Math.abs(n);
    
    // Adjust spacing/precision to match Axiom's tight table
    if (absN >= 1e9) return (n / 1e9).toFixed(decimals) + 'B';
    if (absN >= 1e6) return (n / 1e6).toFixed(decimals) + 'M';
    if (absN >= 1e3) return (n / 1e3).toFixed(decimals) + 'K';
    
    return parseFloat(n.toFixed(decimals)).toString();
}

export function formatPercent(n: number): string {
    const sign = n > 0 ? '+' : '';
    return `${sign}${n.toFixed(2)}%`;
}

export function formatPrice(price: number): string {
    if (price < 0.01) return price.toFixed(8);
    if (price < 1) return price.toFixed(6);
    return price.toFixed(2);
}