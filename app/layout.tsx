import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Crypt0xDev | Cybersecurity Portfolio',
  description:
    'Security researcher & developer. Ethical hacking, pentesting, CTF player.',
  keywords: [
    'cybersecurity',
    'pentesting',
    'ethical hacking',
    'CTF',
    'developer',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#00ff9f] font-mono antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[#1a2e1a] py-4 px-6 text-center text-[#00ff9f44] text-xs">
          <span> crypt0xdev ~ 2026 — stay curious, stay secure</span>
        </footer>
      </body>
    </html>
  );
}
