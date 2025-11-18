'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 border border-red-500/20 bg-red-500/5 rounded-xl flex flex-col items-center justify-center text-center space-y-3 min-h-[300px]">
          <div className="p-3 bg-red-500/10 rounded-full">
             <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-lg font-bold text-red-400">Something went wrong</h2>
          <p className="text-sm text-gray-400 max-w-md">
            We couldn't load the token data. This might be a network issue or a temporary glitch.
          </p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="flex items-center gap-2 px-4 py-2 bg-[#222] hover:bg-[#333] border border-[#333] rounded-lg text-xs font-bold text-white transition-colors mt-2"
          >
            <RefreshCw size={14} /> Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}