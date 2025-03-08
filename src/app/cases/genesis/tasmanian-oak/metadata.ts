import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Genesis - Tasmanian Oak',
  openGraph: {
    title: 'Genesis - Tasmanian Oak',
    description:
      'Handmade wooden PC case made from Tasmanian Oak. Typically in a light straw colour this wood can vary slightly with shades of cream to pink.',
    url: 'https://www.woodfortcases.com',
    siteName: 'Woodfort Cases',
    images: [
      {
        url: 'https://www.woodfortcases.com/images/genesis/tasoak/main_tasoak.jpg',
        width: 3771,
        height: 2828,
      },
      {
        url: 'https://www.woodfortcases.com/images/genesis/tasoak/power1_tasoak.jpg',
        width: 3771,
        height: 2828,
      },
      {
        url: 'https://www.woodfortcases.com/images/genesis/tasoak/power2_tasoak.jpg',
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
  name: 'Genesis PC Case (Tasmanian Oak) | Woodfort Cases',
  image: 'https://www.woodfortcases.com/images/genesis/tasoak/main_tasoak.jpg',
  description:
    'Handmade wooden PC case made from Tasmanian Oak. Typically in a light straw colour this wood can vary slightly with shades of cream to pink.',
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
    url: 'https://www.woodfortcases.com/cases/genesis/tasmanian-oak',
    seller: {
      '@type': 'Organization',
      name: 'Woodfort Cases',
    },
  },
};
