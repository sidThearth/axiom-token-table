'use client';

import React, { useState } from 'react';
import { RotateCcw, X, Check, Upload, Download } from 'lucide-react';

// Mock list of protocols from the screenshot
const PROTOCOLS = [
  { name: 'Pump', color: 'text-green-400', border: 'border-green-500/50' },
  { name: 'Mayhem', color: 'text-red-400', border: 'border-red-500/50' },
  { name: 'Bonk', color: 'text-orange-400', border: 'border-orange-500/50' },
  { name: 'Bags', color: 'text-green-500', border: 'border-green-500/50' },
  { name: 'Moonshot', color: 'text-purple-400', border: 'border-purple-500/50' },
  { name: 'Heaven', color: 'text-white', border: 'border-gray-500/50' },
  { name: 'Daos.fun', color: 'text-blue-400', border: 'border-blue-500/50' },
  { name: 'Candle', color: 'text-orange-300', border: 'border-orange-500/50' },
  { name: 'Sugar', color: 'text-pink-400', border: 'border-pink-500/50' },
  { name: 'Raydium', color: 'text-purple-500', border: 'border-purple-500/50' },
  { name: 'Meteora AMM', color: 'text-orange-500', border: 'border-orange-500/50' },
  { name: 'Orca', color: 'text-yellow-400', border: 'border-yellow-500/50' },
];

export default function FilterPopoverContent() {
  const [selected, setSelected] = useState<string[]>(['Pump', 'Raydium']); // Default selections
  const [activeTab, setActiveTab] = useState<'Audit' | 'Metrics'>('Audit');

  const toggleProtocol = (name: string) => {
    if (selected.includes(name)) {
      setSelected(selected.filter(p => p !== name));
    } else {
      setSelected([...selected, name]);
    }
  };

  return (
    <div className="w-[500px] bg-[#0f0f11] text-gray-200 font-sans text-sm rounded-xl overflow-hidden border border-[#222] shadow-2xl">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#222]">
        <h3 className="font-bold text-white">Filters</h3>
        <div className="flex gap-3 text-gray-500">
          <RotateCcw size={14} className="cursor-pointer hover:text-white" />
          <X size={14} className="cursor-pointer hover:text-white" />
        </div>
      </div>

      <div className="p-5 space-y-6">
        
        {/* Protocols Section */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-400 text-xs font-medium">Protocols</span>
            <span 
                onClick={() => setSelected([])}
                className="text-[10px] text-gray-500 cursor-pointer hover:text-white"
            >
                Unselect All
            </span>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            {PROTOCOLS.map((p) => {
              const isSelected = selected.includes(p.name);
              return (
                <button
                  key={p.name}
                  onClick={() => toggleProtocol(p.name)}
                  className={`flex items-center gap-2 px-2 py-1.5 rounded-full border text-[11px] font-medium transition-all ${
                    isSelected 
                      ? `bg-[#1a1a1a] border-gray-600 text-white` 
                      : `bg-transparent border-transparent text-gray-500 hover:bg-[#151515]`
                  }`}
                >
                  {/* Protocol Icon Dot */}
                  <div className={`w-1.5 h-1.5 rounded-full ${p.color} bg-current`} />
                  {p.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Keywords Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
             <label className="text-xs text-gray-500">Search Keywords</label>
             <input 
                type="text" 
                placeholder="keyword1, keyword2..." 
                className="w-full bg-[#0a0a0a] border border-[#333] rounded-lg px-3 py-2 text-xs focus:border-blue-500 focus:outline-none placeholder-gray-700"
             />
          </div>
          <div className="space-y-1.5">
             <label className="text-xs text-gray-500">Exclude Keywords</label>
             <input 
                type="text" 
                placeholder="keyword1, keyword2..." 
                className="w-full bg-[#0a0a0a] border border-[#333] rounded-lg px-3 py-2 text-xs focus:border-blue-500 focus:outline-none placeholder-gray-700"
             />
          </div>
        </div>

        {/* Tab Toggle */}
        <div className="flex gap-6 border-b border-[#222] pb-1">
            {['Audit', 'Metrics'].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`text-sm font-bold pb-2 relative ${
                        activeTab === tab ? 'text-white' : 'text-gray-600 hover:text-gray-400'
                    }`}
                >
                    {tab}
                    {activeTab === tab && (
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500" />
                    )}
                </button>
            ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-5 py-4 border-t border-[#222] bg-[#0a0a0a]">
        <div className="flex gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#151515] hover:bg-[#222] text-xs font-bold text-gray-400 transition-colors">
                <Upload size={12} /> Import
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#151515] hover:bg-[#222] text-xs font-bold text-gray-400 transition-colors">
                <Download size={12} /> Export
            </button>
        </div>
        <button className="px-6 py-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white text-xs font-bold rounded-lg transition-all shadow-lg shadow-blue-900/20">
            Apply All
        </button>
      </div>
    </div>
  );
}