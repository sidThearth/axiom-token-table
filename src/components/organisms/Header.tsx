'use client';

import React from 'react';
import Link from 'next/link';
import { Search, Bell, Settings, Star, Wallet, ChevronDown, Command } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const Header: React.FC = () => {
    const navLinks = [
        { name: 'Discover', href: '/discover', active: false },
        { name: 'Pulse', href: '/', active: true }, // Assuming current page is Pulse
        { name: 'Trackers', href: '/trackers', active: false },
        { name: 'Perpetuals', href: '/perpetuals', active: false },
        { name: 'Yield', href: '/yield', active: false },
        { name: 'Vision', href: '/vision', active: false },
        { name: 'Portfolio', href: '/portfolio', active: false },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 h-14 bg-axiom-dark border-b border-axiom-border flex items-center justify-between px-4 z-50">
            {/* Left: Logo & Nav */}
            <div className="flex items-center gap-8">
                <Link href="/" className="flex items-center gap-2">
                    {/* Simple Triangle Logo Placeholder */}
                    <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-white" />
                    <span className="text-xl font-bold text-white tracking-tight">AXIOM <span className="text-xs font-normal text-axiom-text-secondary ml-0.5">Pro</span></span>
                </Link>

                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-white",
                                link.active ? "text-blue-400" : "text-axiom-text-secondary"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Right: Search & Actions */}
            <div className="flex items-center gap-4">
                {/* Search Bar */}
                <div className="relative hidden lg:block w-64 group">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-axiom-text-muted group-hover:text-axiom-text-secondary transition-colors" />
                    <input
                        type="text"
                        placeholder="Search by token or CA..."
                        className="w-full h-9 pl-9 pr-10 rounded-full bg-axiom-card border border-axiom-border text-sm text-axiom-text-primary placeholder:text-axiom-text-muted focus:outline-none focus:border-axiom-highlight transition-colors"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1 px-1.5 py-0.5 rounded bg-axiom-dark border border-axiom-border">
                        <span className="text-[10px] text-axiom-text-muted">/</span>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    {/* Network Selector */}
                    <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2 h-8 rounded-full bg-axiom-card border-axiom-border text-axiom-text-primary hover:bg-axiom-highlight hover:text-white">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500" />
                        <span className="text-xs font-medium">SOL</span>
                        <ChevronDown className="h-3 w-3 text-axiom-text-muted" />
                    </Button>

                    {/* Deposit Button */}
                    <Button size="sm" className="hidden sm:flex h-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium px-4">
                        Deposit
                    </Button>

                    {/* Icons */}
                    <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-axiom-text-secondary hover:text-white hover:bg-axiom-highlight rounded-full">
                            <Star className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-axiom-text-secondary hover:text-white hover:bg-axiom-highlight rounded-full">
                            <Bell className="h-4 w-4" />
                        </Button>

                        {/* Wallet */}
                        <Button variant="ghost" size="sm" className="hidden sm:flex items-center gap-2 h-8 pl-2 pr-1 bg-axiom-card border border-axiom-border hover:bg-axiom-highlight rounded-full ml-1">
                            <Wallet className="h-4 w-4 text-axiom-text-secondary" />
                            <div className="flex flex-col items-end leading-none">
                                <span className="text-[10px] text-axiom-text-muted">0</span>
                            </div>
                            <div className="flex items-center gap-1 bg-axiom-dark rounded-full px-2 py-0.5 ml-1">
                                <div className="w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                                </div>
                                <span className="text-xs text-white">0</span>
                                <ChevronDown className="h-3 w-3 text-axiom-text-muted" />
                            </div>
                        </Button>

                        <Button variant="ghost" size="icon" className="h-8 w-8 text-axiom-text-secondary hover:text-white hover:bg-axiom-highlight rounded-full ml-1">
                            <Settings className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};
