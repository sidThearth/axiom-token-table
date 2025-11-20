import React from 'react';
import { TokenTable } from "@/components/organisms/TokenTable";
import { FilterBar } from "@/components/molecules/FilterBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-axiom-dark p-4 md:p-6">
      <div className="max-w-[1920px] mx-auto space-y-4">
        {/* Title removed as it's now in a full app layout context */}

        <div className="rounded-lg border border-axiom-border overflow-hidden bg-axiom-card">
          <FilterBar />
          <TokenTable />
        </div>
      </div>
    </main>
  );
}