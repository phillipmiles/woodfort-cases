import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Genesis - Walnut',
  openGraph: {
    title: 'Genesis - Walnut',
    description:
      'Handmade wooden PC case made from the recognisable American Walnut which displays deep chocolate brown colours.',
    url: 'https://www.woodfortcases.com',
    siteName: 'Woodfort Cases',
    images: [
      {
        url: 'https://www.woodfortcases.com/images/genesis/walnut/main_walnut.jpg',
        width: 3771,
        height: 2828,
      },
      {
        url: 'https://www.woodfortcases.com/images/genesis/walnut/power1_walnut.jpg',
        width: 3771,
        height: 2828,
      },
      {
        url: 'https://www.woodfortcases.com/images/genesis/walnut/power2_walnut.jpg',
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
  name: 'Genesis PC Case (Walnut) | Woodfort Cases',
  image: 'https://www.woodfortcases.com/images/genesis/walnut/main_walnut.jpg',
  description:
    'Handmade wooden PC case made from the recognisable American Walnut which displays deep chocolate brown colours.',
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
    url: 'https://www.woodfortcases.com/cases/genesis/walnut',
    seller: {
      '@type': 'Organization',
      name: 'Woodfort Cases',
    },
  },
};
