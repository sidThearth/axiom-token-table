import './globals.css';
import React from 'react';
import { Inter } from 'next/font/google';
import AppProviders from '@/providers/AppProviders'; // Import the new Client Component

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Axiom Token Table',
  description: 'Token discovery table replica',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Wrap the children with the Client Component that holds the providers */}
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}