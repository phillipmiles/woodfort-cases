import type { Metadata } from 'next';
import './globals.css';
import Header from '@/constructs/Header';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/constructs/Footer';
import { Assistant } from 'next/font/google';
import s from './layout.module.css';

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

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
      <body className={`${assistant.className} ${s.body}`}>
        <AnnouncementBar href="/cases/genesis">
          Now shipping worldwide
        </AnnouncementBar>
        <Header />
        <main className={s.content}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
