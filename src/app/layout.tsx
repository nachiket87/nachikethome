import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Nachiket's HomePage",
  description: 'Welcome to My World!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <body className="bg-gray-1100 overflow-y-scroll bg-[url('/grid.svg')] pb-36">
        <div>
          <div className="mx-auto space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
