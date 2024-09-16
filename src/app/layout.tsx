import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/constructs/Header';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/constructs/Footer';
import { Assistant } from 'next/font/google';

const assistant = Assistant({ subsets: ['latin'] });

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
      <body className={`${assistant.className}`}>
        <AnnouncementBar href="/">Now shipping worldwide</AnnouncementBar>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
