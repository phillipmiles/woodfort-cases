'use client';
import s from './ProductGallery.module.css';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import FullScreenGallery from './FullscreenGallery';

interface Props {
  images: {
    src: string | StaticImageData;
    alt: string;
  }[];
}

const ProductGallery = ({ images }: Props) => {
  const [showFullscreen, setShowFullScreen] = useState(false);

  const handleClickImage = () => {
    document.body.style.overflow = 'hidden';
    setShowFullScreen(true);
  };

  const handleCloseFullscreen = () => {
    document.body.style.overflow = 'auto';
    setShowFullScreen(false);
  };

  return (
    <div className={s.container}>
      <Image
        onClick={handleClickImage}
        src={images[0].src}
        alt={images[0].alt}
        sizes="(max-width: 780px) 100vw, 80vw"
        priority
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      {images.slice(1).map((image, index) => (
        <Image
          key={index}
          onClick={handleClickImage}
          src={image.src}
          alt={image.alt}
          sizes="(max-width: 780px) 50vw, 30vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      ))}
      <FullScreenGallery
        showFullscreen={showFullscreen}
        onClose={handleCloseFullscreen}
        images={images}
      />
    </div>
  );
};
export default ProductGallery;
