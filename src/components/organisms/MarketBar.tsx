'use client';

import React from 'react';
import { Settings, Wallet, Globe, Activity, BarChart2, Zap, Wifi, Bell } from 'lucide-react';
import { cn } from '@/lib/utils';

export const MarketBar: React.FC = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 h-8 bg-axiom-dark border-t border-axiom-border flex items-center justify-between px-2 z-50 text-[10px] sm:text-xs select-none">
            {/* Left: Presets & Tools */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-blue-900/30 text-blue-400 px-2 py-0.5 rounded border border-blue-900/50 cursor-pointer hover:bg-blue-900/50 transition-colors">
                    <Settings className="h-3 w-3" />
                    <span className="font-medium">PRESET 1</span>
                </div>

                <div className="hidden sm:flex items-center gap-4 text-axiom-text-secondary">
                    <div className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors">
                        <div className="w-3 h-3 border border-current rounded-[2px] flex items-center justify-center text-[8px]">1</div>
                        <div className="flex items-center gap-1">
                            <div className="w-3 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500" />
                            <span>0</span>
                            <ChevronDown className="h-2 w-2" />
                        </div>
                    </div>

                    <div className="w-px h-3 bg-axiom-border" />

                    <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                        <Settings className="h-3 w-3" />
                    </div>

                    <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                        <Wallet className="h-3 w-3" />
                        <span>Wallet</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                    </div>

                    <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                        <span className="font-bold text-xs">𝕏</span>
                        <span>Twitter</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                    </div>

                    <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                        <Globe className="h-3 w-3" />
                        <span>Discover</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                    </div>

                    <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                        <Activity className="h-3 w-3" />
                        <span>Pulse</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                    </div>

                    <div className="w-px h-3 bg-axiom-border" />

                    <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                        <BarChart2 className="h-3 w-3" />
                        <span>PnL</span>
                    </div>
                </div>
            </div>

            {/* Right: Tickers & Status */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 bg-axiom-card border border-axiom-border rounded-full px-2 py-0.5">
                    <Zap className="h-3 w-3 text-orange-400" />
                    <span className="text-orange-400">🔥</span>
                    <span className="text-red-400">🥩</span>
                </div>

                <div className="hidden md:flex items-center gap-4 font-mono text-axiom-text-secondary">
                    <div className="flex items-center gap-1">
                        <span className="text-orange-500">₿</span>
                        <span className="text-orange-500">$91.9K</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-blue-400">♦</span>
                        <span className="text-blue-400">$3023</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-purple-400">◎</span>
                        <span className="text-green-400">$142.81</span>
                    </div>
                </div>

                <div className="hidden lg:flex items-center gap-4 text-axiom-text-secondary">
                    <span>$58.7K</span>
                    <div className="flex items-center gap-1">
                        <span className="text-xs">📄</span>
                        <span>0.0₂27</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-xs">☁</span>
                        <span>0.0₂41</span>
                    </div>
                </div>

                <div className="flex items-center gap-2 bg-green-900/20 text-green-400 px-2 py-0.5 rounded border border-green-900/30">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="font-medium">Connection is stable</span>
                </div>

                <div className="flex items-center gap-1 text-axiom-text-secondary cursor-pointer hover:text-white">
                    <span>GLOBAL</span>
                    <ChevronDown className="h-2 w-2" />
                </div>

                <div className="w-px h-3 bg-axiom-border" />

                <div className="flex items-center gap-2 text-axiom-text-secondary">
                    <div className="w-3 h-3 border border-current rounded-[2px]" />
                    <Bell className="h-3 w-3" />
                    <Activity className="h-3 w-3" />
                    <div className="w-3 h-3 bg-indigo-500 rounded-full" />
                </div>
            </div>
        </div>
    );
};

function ChevronDown({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    )
}
