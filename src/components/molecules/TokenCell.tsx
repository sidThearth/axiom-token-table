import React from 'react';
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar" // Removed unused import 
// Let's stick to simple div/img for now to avoid extra dependencies if Avatar isn't strictly needed, or I can create it.
// The task list didn't explicitly ask for Avatar, but it's good practice. I'll use a simple placeholder for now.
import { Badge } from "@/components/ui/badge";

interface TokenCellProps {
    name: string;
    symbol: string;
    iconUrl?: string;
    isNew?: boolean;
    isMigrated?: boolean;
}

export const TokenCell: React.FC<TokenCellProps> = ({ name, symbol, iconUrl, isNew, isMigrated }) => {
    return (
        <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                {iconUrl ? (
                    <img src={iconUrl} alt={name} className="h-full w-full object-cover" />
                ) : (
                    <span className="text-xs font-bold">{symbol.slice(0, 2)}</span>
                )}
            </div>
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <span className="font-medium text-axiom-text-primary">{name}</span>
                    {isNew && <Badge variant="axiom" className="text-[10px] px-1 py-0 h-4">NEW</Badge>}
                    {isMigrated && <Badge variant="secondary" className="text-[10px] px-1 py-0 h-4">MIGRATED</Badge>}
                </div>
                <span className="text-xs text-axiom-text-secondary">{symbol}</span>
            </div>
        </div>
    );
};
