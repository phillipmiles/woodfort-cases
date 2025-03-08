import type { Metadata } from 'next';
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
  title: {
    template: '%s | Woodfort Cases',
    default: 'Woodfort Cases - Handmade wooden PC cases',
  },
  keywords: [
    'Woodfort Cases',
    'Wood PC Case',
    'Wood Computer Case',
    'PC Case',
    'Computer Case',
  ],
  description:
    'Woodfort Cases make beautiful handcrafted wood panelled PC cases that bring a calming warmth to your home office or gaming PC.',
  openGraph: {
    title: {
      template: '%s | Woodfort Cases',
      default: 'Woodfort Cases - Handmade wooden PC cases',
    },
    description:
      'Woodfort Cases make beautiful handcrafted wood panelled PC cases that bring a calming warmth to your home office or gaming PC.',
    url: 'https://www.woodfortcases.com',
    siteName: 'Woodfort Cases',
    images: [
      {
        url: 'https://www.woodfortcases.com/images/genesis/tasoak/main_tasoak.jpg',
        width: 3771,
        height: 2828,
      },
      {
        url: 'https://www.woodfortcases.com/images/genesis/walnut/power1_walnut.jpg',
        width: 3771,
        height: 2828,
      },
      {
        url: 'https://www.woodfortcases.com/images/genesis/blackwood/power2_blackwood.jpg',
        width: 3771,
        height: 2828,
      },
    ],
    videos: [
      {
        url: 'https://www.woodfortcases.com/woodfort_advert_video_lowres.mp4',
        width: 1280,
        height: 720,
      },
    ],
    locale: 'en_UK',
    type: 'website',
  },
};

import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${assistant.className} ${s.body}`}>
        <AnnouncementBar href="/cases">Now shipping worldwide</AnnouncementBar>
        <Header />
        <main className={s.content}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
