import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/constructs/Header';
import AnnouncementBar from '@/components/AnnouncementBar';
import Link from 'next/link';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Woodfort Cases - Handmade wooden PC cases',
  description:
    'Woodfort Cases make beautiful handcrafted wood panelled PC cases that bring a calming warmth to your home office or gaming PC.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AnnouncementBar>
          <Link href="/">Now shipping worldwide</Link>
        </AnnouncementBar>
        <Header />
        {children}
      </body>
    </html>
  );
}
