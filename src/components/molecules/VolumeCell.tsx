import React from 'react';
import { formatCompactNumber, formatPercentage } from '@/lib/formatters';
import { cn } from '@/lib/utils';

interface VolumeCellProps {
    volume?: number;
    change24h?: number;
}

export const VolumeCell: React.FC<VolumeCellProps> = ({ volume, change24h }) => {
    return (
        <div className="flex flex-col items-end">
            {volume !== undefined && <span className="font-medium text-axiom-text-primary">${formatCompactNumber(volume)}</span>}
            {change24h !== undefined && (
                <span
                    className={cn(
                        "text-xs",
                        change24h > 0 ? "text-axiom-success" : "text-axiom-danger"
                    )}
                >
                    {formatPercentage(change24h)}
                </span>
            )}
        </div>
    );
};
