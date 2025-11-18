'use client';

import React from 'react';
import { Settings, Wallet, Twitter, Globe, Activity, BarChart3, LayoutGrid, Bell, Palette, MessageSquare, FileText, ChevronDown, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#050505] border-t border-[#222] h-10 flex items-center justify-between px-4 z-50 text-[11px] font-medium text-gray-400 select-none">
      
      {/* Left Section */}
      <div className="flex items-center gap-4 h-full">
        <button className="bg-[#1e293b] text-blue-400 px-3 py-1 rounded flex items-center gap-2 hover:bg-[#263345] transition-colors h-7">
           <Settings size={12} /> PRESET 1
        </button>
        
        <div className="flex items-center bg-[#111] border border-[#222] rounded px-2 py-1 h-7 gap-2">
            <Wallet size={12} className="text-gray-500" /> 
            <span className="text-white">1</span>
            <span className="text-[#3b82f6] flex items-center">≡ 0 <ChevronDown size={10} className="ml-1" /></span>
        </div>

        <div className="w-[1px] h-4 bg-[#333]"></div>

        <Settings size={14} className="hover:text-white cursor-pointer" />
        
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 hover:text-white cursor-pointer"><Wallet size={12} /> Wallet <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span></div>
            <div className="flex items-center gap-1 hover:text-white cursor-pointer"><Twitter size={12} /> Twitter <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span></div>
            <div className="flex items-center gap-1 hover:text-white cursor-pointer"><Globe size={12} /> Discover <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span></div>
            <div className="flex items-center gap-1 hover:text-white cursor-pointer"><Activity size={12} /> Pulse <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span></div>
            <div className="flex items-center gap-1 hover:text-white cursor-pointer"><BarChart3 size={12} /> PnL</div>
        </div>
      </div>

      {/* Center Ticker Section */}
      <div className="flex items-center gap-6 h-full">
         <div className="flex items-center gap-2 bg-[#111] border border-[#222] rounded-full px-2 py-0.5">
             <span className="text-green-500">💊</span>
             <Zap size={10} className="text-orange-500 fill-orange-500" />
             <span className="text-pink-500 text-[9px]">🥩</span>
         </div>

         <div className="flex items-center gap-4">
             <div className="flex items-center gap-1.5 text-yellow-500"><span className="font-bold">₿</span> $92.9K</div>
             <div className="flex items-center gap-1.5 text-blue-400"><span className="font-bold">⟠</span> $3,121</div>
             <div className="flex items-center gap-1.5 text-green-400"><span className="font-bold">◎</span> $140.96</div>
         </div>

         <div className="w-[1px] h-4 bg-[#333]"></div>

         <div className="flex items-center gap-4 text-gray-500">
             <span className="flex items-center gap-1"><span className="text-gray-400">$57.9K</span></span>
             <span className="flex items-center gap-1">⛽ 0.02</span>
             <span className="flex items-center gap-1">◎ 0.003</span>
         </div>

         <div className="bg-[#064e3b] text-[#34d399] px-3 py-0.5 rounded text-[10px] font-bold border border-[#065f46] flex items-center gap-1.5">
             <div className="w-1.5 h-1.5 bg-[#34d399] rounded-full animate-pulse"></div>
             Connection is stable
         </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 h-full">
         <div className="flex items-center gap-1 hover:text-white cursor-pointer">
            GLOBAL <ChevronDown size={10} />
         </div>
         
         <div className="w-[1px] h-4 bg-[#333]"></div>
         
         <div className="flex items-center gap-3 text-gray-500">
             <LayoutGrid size={14} className="hover:text-white cursor-pointer" />
             <Bell size={14} className="hover:text-white cursor-pointer" />
             <Palette size={14} className="hover:text-white cursor-pointer" />
             <MessageSquare size={14} className="hover:text-white cursor-pointer" />
             <Twitter size={14} className="hover:text-white cursor-pointer" />
             <FileText size={14} className="hover:text-white cursor-pointer" />
         </div>
      </div>

    </footer>
  );
}