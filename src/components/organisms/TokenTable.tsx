'use client';

import React, { useMemo } from 'react';
import { RootState } from '@/redux/store';
import TokenRow from './TokenRow';
import TableSkeleton from '@/components/molecules/TableSkeleton';
import ErrorBoundary from '@/components/utils/ErrorBoundary';
import Popover from '@/components/atoms/Popover';
import Tooltip from '@/components/atoms/Tooltip';
import FilterPopoverContent from './FilterPopoverContent';
import { useTokensQuery } from '@/hooks/useTokensQuery';
import useWebsocketMock from '@/hooks/useWebsocketMock';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setSelected, setSort, setCategory, SortKey, TokenCategory } from '@/redux/tokensSlice';
import { useSortedTokens } from '@/hooks/useSortedTokens';
import { Filter, LayoutGrid, Settings, Info, ChevronDown, Flame, Zap, Activity } from 'lucide-react';

export default function TokenTable() {
  return (
    <ErrorBoundary>
       <TokenTableContent />
    </ErrorBoundary>
  );
}

function TokenTableContent() {
  const dispatch = useAppDispatch();
  const q = useTokensQuery();
  const { ids, byId, loading, sortBy, activeCategory } = useAppSelector((s: RootState) => s.tokens);
  
  useWebsocketMock(ids);

  const tokenItems = useMemo(() => {
    return ids
        .map((id) => byId[id])
        .filter((t) => t && t.category === activeCategory);
  }, [ids, byId, activeCategory]);

  const sortedItems = useSortedTokens(tokenItems);

  function openModal(id?: string) {
    dispatch(setSelected(id));
  }
  
  const SortHeader = ({ label, sortKey, tooltip }: { label: string, sortKey: SortKey, tooltip?: string }) => {
      const isActive = sortBy === sortKey;
      return (
          <div 
            onClick={() => dispatch(setSort(sortKey))} 
            className={`flex items-center gap-1.5 cursor-pointer transition-colors group select-none ${isActive ? 'text-blue-400' : 'hover:text-gray-300'}`}
          >
              {label}
              <div className="flex flex-col items-center justify-center h-3 w-3">
                 {isActive ? (
                    <ChevronDown size={14} strokeWidth={3} />
                 ) : (
                    <div className="h-2 w-2 bg-transparent" /> 
                 )}
              </div>
              
              {tooltip && (
                  <Tooltip content={tooltip}>
                      <Info size={12} className="text-gray-600 group-hover:text-gray-400 ml-0.5" />
                  </Tooltip>
              )}
          </div>
      );
  };

  const CategoryTab = ({ label, value }: { label: string, value: TokenCategory }) => {
      const isActive = activeCategory === value;
      return (
          <button
            onClick={() => dispatch(setCategory(value))}
            className={`relative px-2 py-3 text-[15px] font-bold transition-colors ${
                isActive ? 'text-white' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
              {label}
              {isActive && (
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-500 shadow-[0_-2px_10px_rgba(59,130,246,0.5)]" />
              )}
          </button>
      );
  };

  const gridCols = "grid-cols-[2.4fr_1.2fr_1.2fr_1fr_1fr_1fr_1.8fr_0.8fr]";

  return (
    <div className="bg-[#09090b] border border-[#222] rounded-xl shadow-2xl overflow-hidden font-sans mb-20">
      
      {/* Top Toolbar */}
      <div className="px-5 border-b border-[#222] flex items-center justify-between bg-[#09090b]">
        <div className="flex items-center gap-8">
            <CategoryTab label="New pairs" value="new" />
            <CategoryTab label="Final Stretch" value="final" />
            <CategoryTab label="Migrated" value="migrated" />
        </div>
        <div className="flex items-center gap-5 py-2">
            <div className="flex bg-[#111] rounded-lg p-0.5 border border-[#222]">
                {['1m', '5m', '30m', '1h'].map((time, idx) => (
                    <button key={time} className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${idx === 1 ? 'bg-[#222] text-blue-400 shadow-sm' : 'text-gray-500 hover:text-gray-300'}`}>{time}</button>
                ))}
            </div>
            
            <Popover 
                align="end"
                trigger={
                    <button className="flex items-center gap-2 px-4 py-1.5 bg-[#111] border border-[#222] rounded-lg text-xs font-bold text-gray-300 hover:bg-[#1a1a1a] transition-colors group data-[state=open]:border-blue-500/50">
                        <Filter size={14} className="text-gray-500 group-hover:text-gray-300" /> 
                        Filter 
                        <ChevronDown size={12} className="text-gray-600" />
                    </button>
                }
            >
                <FilterPopoverContent />
            </Popover>

            <div className="flex gap-4 text-gray-600 border-l border-[#222] pl-5">
                 <LayoutGrid size={18} className="cursor-pointer hover:text-gray-300 transition-colors" />
                 <Settings size={18} className="cursor-pointer hover:text-gray-300 transition-colors" />
            </div>
        </div>
      </div>

      {/* Table Content */}
      <div role="table" className="w-full overflow-x-auto bg-[#09090b]">
        <div className="min-w-[1200px]">
            {/* Headers - UPDATED PADDING AND FONT SIZE */}
            <div className={`grid ${gridCols} px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-[#222] select-none bg-[#09090b]`}>
              <SortHeader label="Pair Info" sortKey="price" />
              <div className="pl-2"></div> 
              <SortHeader label="Market Cap" sortKey="marketCap" />
              <SortHeader label="Liquidity" sortKey="liquidity" tooltip="Total Liquidity" />
              <SortHeader label="Volume" sortKey="volume" />
              <SortHeader label="TXNS" sortKey="txns" tooltip="Buy / Sell Count" />
              <div>Token Info</div>
              <div className="text-right pr-6">Action</div>
            </div>

            {/* Data Rows */}
            <div role="rowgroup" className="divide-y divide-[#1a1a1a]">
                {(q.isLoading || loading) && Array.from({ length: 5 }).map((_, i) => (
                   <TableSkeleton key={i} />
                ))}

                {!q.isLoading && sortedItems.length === 0 && (
                    <div className="py-16 text-center">
                        <p className="text-gray-500 text-sm mb-1">No pairs found in {activeCategory}</p>
                        <p className="text-gray-700 text-xs">Try switching categories or adjusting filters</p>
                    </div>
                )}

                {!q.isLoading && sortedItems.map((t) => (
                    <TokenRow key={t.id} token={t} onOpen={(id) => openModal(id)} />
                ))}
            </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="px-5 py-3 border-t border-[#222] flex items-center justify-between bg-[#09090b] text-xs text-gray-500 font-medium">
         <div>Showing {sortedItems.length} pairs in <span className="text-gray-300 capitalize">{activeCategory}</span></div>
         <div className="flex gap-4">
            <span className="cursor-pointer hover:text-gray-300 transition-colors">Previous</span>
            <span className="cursor-pointer hover:text-gray-300 transition-colors">Next</span>
         </div>
      </div>
    </div>
  );
}