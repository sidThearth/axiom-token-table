'use client';

import React from 'react';
import type { TokenItem } from '@/redux/tokensSlice';
import { formatLargeNumber, formatPercent, formatPrice } from '@/lib/format';
import { Globe, Twitter, Send, Search, User, Shield, Lock, AlertCircle, Copy, Rocket } from 'lucide-react';
import Tooltip from '@/components/atoms/Tooltip';
import FlashNumber from '@/components/molecules/FlashNumber';

const Sparkline = ({ isPositive }: { isPositive: boolean }) => {
  const color = isPositive ? '#22c55e' : '#ef4444'; 
  const path = isPositive 
    ? "M0 25 L 10 22 L 20 24 L 30 15 L 40 18 L 50 10 L 60 12 L 70 5 L 80 8" 
    : "M0 5 L 10 8 L 20 6 L 30 15 L 40 12 L 50 20 L 60 18 L 70 25 L 80 22";
    
  return (
    <svg width="100%" height="35" viewBox="0 0 80 30" fill="none" className="opacity-90">
      <path d={path} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default React.memo(function TokenRow({ token, onOpen }: { token: TokenItem; onOpen?: (id: string) => void }) {
  const isPositive = token.marketCapChange >= 0;
  const mcColor = isPositive ? 'text-[#22c55e]' : 'text-[#ef4444]'; 

  // 8-Column Grid
  const gridCols = "grid-cols-[2.4fr_1.2fr_1.2fr_1fr_1fr_1fr_1.8fr_0.8fr]";

  return (
    <div 
      role="row"
      onClick={() => onOpen?.(token.id)}
      className={`grid ${gridCols} px-5 py-4 items-center border-b border-[#1a1a1a] hover:bg-[#131313] transition-colors group border-l-2 border-l-transparent hover:border-l-blue-500 cursor-pointer bg-[#09090b]`}
    >
      
      {/* 1. PAIR INFO */}
      <div className="flex items-center gap-4 overflow-hidden pr-2">
        {/* Increased Size w-12 h-12 */}
        <div className="w-12 h-12 rounded-md bg-[#222] flex-shrink-0 relative overflow-hidden border border-[#333]">
             <div className="absolute inset-0 flex items-center justify-center text-[11px] text-gray-400 font-bold tracking-tighter bg-[#1e1e1e]">
                {token.symbol.substring(0, 2)}
             </div>
             <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#10b981] border-[3px] border-[#09090b] rounded-full z-10"></div>
             {token.marketCapChange > 100 && (
                <div className="absolute top-0 left-0 bg-yellow-500/90 p-[2px] rounded-br-md">
                    <Rocket size={8} className="text-black fill-black" />
                </div>
             )}
        </div>
        
        <div className="flex flex-col min-w-0 justify-center gap-0.5">
            <div className="flex items-center gap-2">
                {/* Increased Font Size */}
                <span className="font-bold text-[15px] text-gray-100 truncate leading-tight tracking-tight">{token.symbol}</span>
                <span className="text-[13px] text-gray-500 truncate max-w-[100px] leading-tight">{token.name}</span>
                <Copy size={12} className="text-gray-600 cursor-pointer hover:text-gray-400 ml-0.5" />
            </div>
            <div className="flex items-center gap-3">
                <span className="text-[11px] text-gray-400 font-medium">{token.timeSince}</span>
                <div className="flex gap-2 text-gray-500">
                    <div className="bg-[#1a1a1a] p-0.5 rounded hover:bg-[#222] cursor-pointer group/icon">
                        <Rocket size={12} className={token.hasWebsite ? "text-blue-400" : "text-gray-600"} />
                    </div>
                    {token.hasTwitter && <Twitter size={12} className="hover:text-blue-400 cursor-pointer" />}
                    {token.hasTelegram && <Send size={12} className="hover:text-blue-400 cursor-pointer" />}
                    <Search size={12} className="hover:text-blue-400 cursor-pointer" />
                </div>
            </div>
        </div>
      </div>

      {/* 2. CHART */}
      <div className="pr-6 flex items-center h-full">
        <Sparkline isPositive={isPositive} />
      </div>

      {/* 3. MARKET CAP */}
      <div>
        {/* Increased Font Size */}
        <div className="text-[15px] font-bold text-gray-200 flex items-baseline">
            <span className="text-xs text-gray-500 mr-[1px]">$</span>
            <FlashNumber value={token.marketCap} formatter={(v) => formatLargeNumber(v)} />
        </div>
        <div className={`text-[11px] font-bold mt-0.5 ${mcColor}`}>{formatPercent(token.marketCapChange)}</div>
      </div>

      {/* 4. LIQUIDITY */}
      <div className="text-[14px] font-medium text-gray-200 flex items-baseline">
         <span className="text-xs text-gray-500 mr-[1px]">$</span>
         {formatLargeNumber(token.liquidity)}
      </div>

      {/* 5. VOLUME */}
      <div className="text-[14px] font-medium text-gray-200 flex items-baseline">
         <span className="text-xs text-gray-500 mr-[1px]">$</span>
         {formatLargeNumber(token.volume)}
      </div>

      {/* 6. TXNS */}
      <div>
        <div className="text-[14px] font-medium text-gray-200">
             <FlashNumber value={token.txns} formatter={(v) => formatLargeNumber(v, 1)} />
        </div>
        <div className="text-[11px] font-medium flex gap-1.5 mt-0.5">
            <span className="text-[#22c55e]">{token.buys}</span>
            <span className="text-gray-600">/</span>
            <span className="text-[#ef4444]">{token.sells}</span>
        </div>
      </div>

      {/* 7. TOKEN INFO */}
      <div className="grid grid-cols-2 gap-x-5 gap-y-2 text-[11px] font-medium">
         <Tooltip content="Top Holder %">
             <div className="flex items-center gap-1.5 text-[#ef4444] cursor-help">
                <User size={12} strokeWidth={2.5} /> {token.topHolder}%
             </div>
         </Tooltip>
         <Tooltip content="Buy Tax / Sell Tax">
             <div className="flex items-center gap-1.5 text-[#22c55e] cursor-help">
                <Shield size={12} strokeWidth={2.5} /> 0%
             </div>
         </Tooltip>
         <Tooltip content="Liquidity Lock">
             <div className="flex items-center gap-1.5 text-[#22c55e] cursor-help">
                <Lock size={12} strokeWidth={2.5} /> {token.auditScore}%
             </div>
         </Tooltip>
         <Tooltip content="Developer Status">
             <div className="flex items-center gap-1.5 text-[#ef4444] cursor-help">
                <AlertCircle size={12} strokeWidth={2.5} /> Unpaid
             </div>
         </Tooltip>
      </div>

      {/* 8. ACTION */}
      <div className="text-right">
        <button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white text-xs font-bold px-6 py-2 rounded-full transition-all shadow-[0_0_10px_rgba(59,130,246,0.15)] hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] tracking-wide">
            Buy
        </button>
      </div>

    </div>
  );
});