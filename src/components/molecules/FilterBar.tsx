import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setFilter, setActiveTab } from '@/lib/store';
// import { Input } from '@/components/ui/input'; // Removed unused import
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

export const FilterBar: React.FC = () => {
    const dispatch = useDispatch();
    const { filter, activeTab } = useSelector((state: RootState) => state.table);

    return (
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 bg-axiom-card border-b border-axiom-border">
            <div className="flex items-center gap-2 bg-axiom-dark rounded-md p-1 border border-axiom-border">
                {(['new', 'final', 'migrated'] as const).map((tab) => (
                    <Button
                        key={tab}
                        variant={activeTab === tab ? 'axiom' : 'ghost'}
                        size="sm"
                        onClick={() => dispatch(setActiveTab(tab))}
                        className={cn(
                            "capitalize text-xs font-medium",
                            activeTab !== tab && "text-axiom-text-secondary hover:text-axiom-text-primary"
                        )}
                    >
                        {tab === 'new' ? 'New pairs' : tab === 'final' ? 'Final Stretch' : 'Migrated'}
                    </Button>
                ))}
            </div>

            <div className="relative w-full md:w-64">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-axiom-text-secondary" />
                <input
                    type="text"
                    placeholder="Search tokens..."
                    value={filter}
                    onChange={(e) => dispatch(setFilter(e.target.value))}
                    className="w-full h-9 pl-8 pr-4 rounded-md bg-axiom-dark border border-axiom-border text-sm text-axiom-text-primary placeholder:text-axiom-text-muted focus:outline-none focus:ring-1 focus:ring-axiom-highlight"
                />
            </div>
        </div>
    );
};
