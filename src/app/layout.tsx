
import './globals.css';
import React from 'react';
import { Inter } from 'next/font/google';
import type { Metadata } from "next";
import { Providers } from "./providers";
import { Header } from "@/components/organisms/Header";
import { MarketBar } from "@/components/organisms/MarketBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Axiom Trade - Token Discovery",
  description: "Real-time token data and analytics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <Header />
          <div className="pt-14 pb-8 min-h-screen bg-axiom-dark">
            {children}
          </div>
          <MarketBar />
        </Providers>
      </body>
    </html>
  );
}