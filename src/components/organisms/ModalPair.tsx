'use client';

import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useAppDispatch } from '@/redux/hooks';
import { setSelected } from '@/redux/tokensSlice';
import { formatLargeNumber, formatPercent } from '@/lib/format';

export default function ModalPair() {
  const dispatch = useAppDispatch();
  const selectedId = useSelector((s: RootState) => s.tokens.selectedId);
  const token = useSelector((s: RootState) => s.tokens.byId[selectedId ?? '']);
  const isOpen = !!selectedId;

  const handleClose = () => dispatch(setSelected(undefined));

  if (!token) return null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        
        <Dialog.Content className="fixed top-[50%] left-[50%] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-[#111] border border-[#333] p-6 shadow-2xl focus:outline-none z-50 text-white font-sans">
          
          <Dialog.Title className="text-xl font-bold flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#222] border border-[#333] flex items-center justify-center text-xs text-gray-500">
                {token.symbol.substring(0,2)}
            </div>
            {token.name}
            <span className="text-sm text-gray-500 font-normal">({token.symbol})</span>
          </Dialog.Title>
          
          <div className="mt-6 space-y-4">
            
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#1a1a1a] p-3 rounded-lg border border-[#222]">
                    <div className="text-xs text-gray-500 mb-1">Market Cap</div>
                    <div className="text-lg font-bold text-white">${formatLargeNumber(token.marketCap)}</div>
                    <div className={token.marketCapChange >= 0 ? "text-green-500 text-xs" : "text-red-500 text-xs"}>
                        {formatPercent(token.marketCapChange)}
                    </div>
                </div>
                <div className="bg-[#1a1a1a] p-3 rounded-lg border border-[#222]">
                    <div className="text-xs text-gray-500 mb-1">Transactions</div>
                    <div className="text-lg font-bold text-white">{formatLargeNumber(token.txns)}</div>
                    <div className="text-xs flex gap-2 mt-1">
                        <span className="text-green-500">Buy: {token.buys}</span>
                        <span className="text-red-500">Sell: {token.sells}</span>
                    </div>
                </div>
            </div>

            <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#222] space-y-3">
                <div className="flex justify-between text-sm border-b border-[#333] pb-2">
                    <span className="text-gray-500">Price</span>
                    <span className="font-mono text-gray-200">${token.price.toFixed(6)}</span>
                </div>
                <div className="flex justify-between text-sm border-b border-[#333] pb-2">
                    <span className="text-gray-500">Liquidity</span>
                    <span className="text-gray-200">${formatLargeNumber(token.liquidity)}</span>
                </div>
                <div className="flex justify-between text-sm border-b border-[#333] pb-2">
                    <span className="text-gray-500">Volume (24h)</span>
                    <span className="text-gray-200">${formatLargeNumber(token.volume)}</span>
                </div>
                <div className="flex justify-between text-sm pt-1">
                    <span className="text-gray-500">Security Score</span>
                    <span className="text-green-500 font-bold">{token.auditScore}/100</span>
                </div>
            </div>
          </div>
          
          <div className="mt-8 flex gap-3">
            <button
              onClick={handleClose}
              className="flex-1 py-2.5 text-sm font-medium rounded-lg border border-[#333] hover:bg-[#222] transition-colors"
            >
              Close
            </button>
            <button className="flex-1 py-2.5 text-sm font-bold rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-[0_0_15px_rgba(37,99,235,0.3)]">
              Trade Now
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}