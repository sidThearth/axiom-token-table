import './globals.css';
import React from 'react';
import { Inter } from 'next/font/google';
import { Metadata } from 'next'; // Added import for Metadata

import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Axiom Trade Replica",
  description: "Token discovery table replica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}