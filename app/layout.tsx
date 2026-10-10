import type { Metadata, Viewport } from 'next';
import { Abril_Fatface, Barlow_Condensed, Poppins } from 'next/font/google';
import './globals.css';

const abril = Abril_Fatface({ subsets: ['latin'], weight: '400', variable: '--font-abril', display: 'swap' });
const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-barlow',
  display: 'swap',
});
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-poppins', display: 'swap' });

export const metadata: Metadata = {
  title: 'Everything Matters Studio — Digital Marketing Agency',
  description: 'Everything Matters Studio — Digital Marketing Agency Indonesia.',
};

export const viewport: Viewport = {
  themeColor: '#c3ff72',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${abril.variable} ${barlow.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
