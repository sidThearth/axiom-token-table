import React from 'react';
import Navbar from '@/components/organisms/Navbar'; // NEW
import Footer from '@/components/organisms/Footer'; // NEW
import TokenTable from '@/components/organisms/TokenTable';
import ModalPair from '@/components/organisms/ModalPair';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050505] text-gray-200 pb-12 font-sans">
      <Navbar />
      
      <div className="p-4 max-w-[1920px] mx-auto">
        {/* Removed the large header text to match Axiom Pro's dense dashboard look */}
        <TokenTable />
      </div>
      
      <Footer />
      <ModalPair />
    </main>
  );
}