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
  const [galleryIndex, setGalleryIndex] = useState(0);

  const handleClickImage = (index: number) => {
    document.body.style.overflow = 'hidden';
    setShowFullScreen(true);
    setGalleryIndex(index);
  };

  const handleCloseFullscreen = () => {
    document.body.style.overflow = 'auto';
    setShowFullScreen(false);
  };

  const handleNext = () => {
    setGalleryIndex((state) => {
      if (state === images.length - 1) {
        return 0;
      } else {
        return state + 1;
      }
    });
  };

  const handlePrevious = () => {
    setGalleryIndex((state) => {
      if (state === 0) {
        return images.length - 1;
      } else {
        return state - 1;
      }
    });
  };

  return (
    <div className={s.container}>
      <Image
        className={s.image}
        onClick={() => handleClickImage(0)}
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
          className={s.image}
          key={index}
          onClick={() => handleClickImage(index + 1)}
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
        index={galleryIndex}
        showFullscreen={showFullscreen}
        onClose={handleCloseFullscreen}
        onNext={handleNext}
        onPrevious={handlePrevious}
        images={images}
      />
    </div>
  );
};
export default ProductGallery;
