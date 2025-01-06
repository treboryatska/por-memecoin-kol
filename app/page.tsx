import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ETH Maxi Content',
  description: 'Ethereum is legitimate',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <header className="fixed top-0 right-0 flex items-center p-4 gap-4">
            <Link
              href="/login" // Replace with actual login route
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center text-white gap-2 bg-gray-800 hover:bg-gray-600 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            >
              Sign In
            </Link>
          </header>

          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <h1 className="text-3xl font-bold text-gray-400">
              por memecoin kol
            </h1>

            <div className="flex justify-center w-full">
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center text-white gap-2 bg-gray-800 hover:bg-gray-600 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href="#" // Replace with your actual link
                target="_blank"
                rel="noopener noreferrer"
              >
                Pre Order ethDenver Hoody
              </a>
            </div>
          </main>
          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <Link
              className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
              href="/about"
            >
              About
            </Link>
          </footer>
        </div>
        {children}
      </body>
    </html>
  );
}