import React from 'react';
import { TokenTable } from "@/components/organisms/TokenTable";
import { FilterBar } from "@/components/molecules/FilterBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-axiom-dark p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-axiom-text-primary">Token Discovery</h1>
          <p className="text-axiom-text-secondary">Real-time token data and analytics.</p>
        </div>

        <div className="rounded-lg border border-axiom-border overflow-hidden bg-axiom-card">
          <FilterBar />
          <TokenTable />
        </div>
      </div>
    </main>
  );
}