'use client';

import React from 'react';
import { Search, Star, Bell, Wallet, User, ChevronDown, Settings, BarChart2 } from 'lucide-react';

export default function Navbar() {
  const navLinks = ['Discover', 'Pulse', 'Trackers', 'Perpetuals', 'Yield', 'Vision', 'Portfolio'];

  return (
    <header className="flex flex-col w-full bg-[#050505] border-b border-[#222] sticky top-0 z-40">
      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 h-14">
        {/* Left: Logo & Nav */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 cursor-pointer">
            {/* Logo Icon */}
            <div className="w-6 h-6 bg-white clip-triangle-logo" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
            <span className="text-white font-bold text-xl tracking-tight">AXIOM <span className="font-normal text-gray-400 text-sm">Pro</span></span>
          </div>
          
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link, i) => (
              <a 
                key={link} 
                href="#" 
                className={`text-sm font-medium transition-colors ${i === 0 ? 'text-blue-500' : 'text-gray-400 hover:text-white'}`}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          {/* Search Bar */}
          <div className="relative hidden lg:block group">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-gray-300" />
            <input 
              type="text" 
              placeholder="Search by token or CA..." 
              className="bg-[#111] border border-[#222] text-gray-300 text-xs rounded-full pl-9 pr-10 py-2 w-64 focus:outline-none focus:border-[#444] transition-colors"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-600 border border-[#333] rounded px-1.5 py-0.5">/</span>
          </div>

          {/* Network Selector */}
          <button className="flex items-center gap-2 bg-[#0a1a1a] border border-[#1e3a2f] text-green-500 px-3 py-1.5 rounded-full text-xs font-bold hover:bg-[#0f2424] transition-colors">
             <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
             SOL <ChevronDown size={12} />
          </button>

          {/* Deposit Button */}
          <button className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            Deposit
          </button>

          {/* Icons */}
          <div className="flex items-center gap-2 ml-1">
            <button className="p-2 rounded-full hover:bg-[#222] text-gray-400 hover:text-white transition-colors">
                <Star size={16} />
            </button>
            <button className="p-2 rounded-full hover:bg-[#222] text-gray-400 hover:text-white transition-colors relative">
                <Bell size={16} />
                <span className="absolute top-1.5 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#050505]"></span>
            </button>
          </div>

          {/* Wallet Pill */}
          <div className="flex items-center bg-[#111] border border-[#222] rounded-full px-3 py-1.5 gap-3">
             <div className="flex items-center gap-1.5 text-gray-300 border-r border-[#333] pr-3">
                <Wallet size={14} />
                <span className="text-xs font-mono">0</span>
             </div>
             <div className="flex items-center gap-1.5 text-blue-400">
                <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center text-[8px]">💰</div>
                <span className="text-xs font-mono">0</span>
                <ChevronDown size={12} />
             </div>
          </div>

          {/* Profile */}
          <button className="w-8 h-8 rounded-full bg-[#111] border border-[#222] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#444] transition-all">
             <User size={16} />
          </button>
        </div>
      </div>

      {/* Sub-nav / Toolbar (Small Icons below main nav) */}
      <div className="flex items-center px-4 h-8 border-b border-[#222] bg-[#080808]">
         <div className="flex gap-4 text-gray-600">
            <Settings size={14} className="hover:text-gray-300 cursor-pointer" />
            <Star size={14} className="hover:text-gray-300 cursor-pointer" />
            <BarChart2 size={14} className="hover:text-gray-300 cursor-pointer" />
         </div>
      </div>
    </header>
  );
}