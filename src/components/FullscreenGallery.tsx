import { createPortal } from 'react-dom';
import s from './FullScreenGallery.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { MouseEventHandler } from 'react';
import Image, { StaticImageData } from 'next/image';

interface Props {
  showFullscreen: boolean;
  onClose: MouseEventHandler;
  onNext: MouseEventHandler;
  onPrevious: MouseEventHandler;
  images: {
    src: string | StaticImageData;
    alt: string;
  }[];
  index: number;
}

const FullScreenGallery = ({
  index,
  images,
  showFullscreen,
  onClose,
  onNext,
  onPrevious,
}: Props) => {
  return (
    showFullscreen &&
    createPortal(
      <div className={`${s.container} ${showFullscreen ? s.visible : ''}`}>
        <div
          className={s.carouselContainer}
          style={{ transform: `translateX(${-100 * index}vw)` }}
        >
          {images.map((image, index) => (
            <div className={s.carouselItem} key={index}>
              <Image
                className={s.image}
                key={index}
                src={image.src}
                alt={image.alt}
                sizes={'100vw'}
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '100%',
                  maxHeight: '100%',
                }}
              />
              <div className={s.background} onClick={onClose} />
            </div>
          ))}
        </div>

        <button onClick={onClose} className={`${s.icon} ${s.closeIcon}`}>
          <FontAwesomeIcon icon={faXmark} size="xl" />
        </button>
        {index < images.length - 1 && (
          <button onClick={onNext} className={`${s.icon} ${s.nextIcon}`}>
            <FontAwesomeIcon icon={faChevronRight} size="xl" />
          </button>
        )}
        {index > 0 && (
          <button
            onClick={onPrevious}
            className={`${s.icon} ${s.previousIcon}`}
          >
            <FontAwesomeIcon icon={faChevronLeft} size="xl" />
          </button>
        )}
      </div>,
      document.body
    )
  );
};
export default FullScreenGallery;
