// /src/components/molecules/SortButton.tsx (COMPLETED)
'use client';
import React from 'react';

interface SortButtonProps {
    label: string;
    active: boolean;
    onClick: () => void;
    direction: 'asc' | 'desc' | 'none';
}

export default function SortButton({ label, active, onClick, direction }: SortButtonProps) {
    
    const indicator = direction === 'asc' ? ' ▲' : direction === 'desc' ? ' ▼' : '';
    
    return (
        <button 
            onClick={onClick} 
            className={`px-3 py-1 text-sm rounded transition-colors ${
                active 
                    ? 'bg-brand-500 text-white shadow-md' // Active/Sorted state
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50' // Default state
            }`}
        >
            {label}
            {active ? indicator : ''}
        </button>
    );
}