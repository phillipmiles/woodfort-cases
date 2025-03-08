import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Genesis - Blackwood',
  openGraph: {
    title: 'Genesis - Blackwood',
    description:
      'Handmade wooden PC case made from Blackwood, a prized Australian timber that features golden rown tones meixed with some reds and darker streaks.',
    url: 'https://www.woodfortcases.com',
    siteName: 'Woodfort Cases',
    images: [
      {
        url: 'https://www.woodfortcases.com/images/genesis/blackwood/main_blackwood.jpg',
        width: 3771,
        height: 2828,
      },
      {
        url: 'https://www.woodfortcases.com/images/genesis/blackwood/power1_blackwood.jpg',
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

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Genesis PC Case (Blackwood) | Woodfort Cases',
  image:
    'https://www.woodfortcases.com/images/genesis/blackwood/main_blackwood.jpg',
  description:
    'Handmade wooden PC case made from Blackwood, a prized Australian timber that features golden rown tones meixed with some reds and darker streaks.',
  brand: {
    '@type': 'Brand',
    name: 'Woodfort Cases',
  },
  offers: {
    '@type': 'Offer',
    offerCount: 1,
    // TODO: CONSOLIDATE PRICE AMONGST ALL PAGES AND TILES
    price: 2800,
    priceCurrency: 'AUD',
    itemCondition: 'https://schema.org/NewCondition',
    availability: 'https://schema.org/InStock',
    url: 'https://www.woodfortcases.com/cases/genesis/blackwood',
    seller: {
      '@type': 'Organization',
      name: 'Woodfort Cases',
    },
  },
};
