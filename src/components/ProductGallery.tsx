'use client';
import s from './ProductGallery.module.css';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import FullScreenGallery from './FullscreenGallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faUpRightAndDownLeftFromCenter,
} from '@fortawesome/free-solid-svg-icons';

interface Props {
  images: {
    src: string | StaticImageData;
    alt: string;
  }[];
}

const ProductGallery = ({ images }: Props) => {
  const [showFullscreen, setShowFullScreen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const toggleFullScreen = () => {
    setShowFullScreen((state) => {
      if (state) {
        document.body.style.overflow = 'auto';
      } else {
        document.body.style.overflow = 'hidden';
      }
      return !state;
    });
  };

  const handleClickImage = (index: number) => {
    toggleFullScreen();
    setGalleryIndex(index);
  };

  const handleCloseFullscreen = () => {
    toggleFullScreen();
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
      <div className={s.galleryGrid}>
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
      </div>
      <div className={s.carouselContainer}>
        <button className={s.fullscreenIcon} onClick={toggleFullScreen}>
          <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} size="lg" />
        </button>
        <div
          className={s.carouselRail}
          style={{
            // transform: `translateX(calc(${-100 * galleryIndex}vw - 16px))`,
            transform: `translateX(calc(${-100 * galleryIndex}%))`,
          }}
        >
          {images.map((image, index) => (
            <div className={s.carouselItem} key={index}>
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                sizes="(max-width: 780px) 100vw, 30vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
          ))}
        </div>
        <div className={s.carouselControls}>
          <FontAwesomeIcon
            className={s.carouselControlIcon}
            icon={faChevronLeft}
            onClick={handlePrevious}
            size="sm"
          />
          <span className={s.carouselIndex}>
            {galleryIndex + 1} / {images.length}
          </span>
          <FontAwesomeIcon
            className={s.carouselControlIcon}
            icon={faChevronRight}
            onClick={handleNext}
            size="sm"
          />
        </div>
      </div>
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
