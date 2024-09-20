import { createPortal } from 'react-dom';
import s from './FullScreenGallery.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { MouseEventHandler } from 'react';
import Image, { StaticImageData } from 'next/image';

interface Props {
  showFullscreen: boolean;
  onClose: MouseEventHandler;
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
}: Props) => {
  return createPortal(
    <div className={`${s.container} ${showFullscreen ? s.visible : ''}`}>
      <div
        className={s.carouselContainer}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((image, index) => (
          <div className={s.carouselItem}>
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

      <button onClick={onClose} className={s.closeIcon}>
        <FontAwesomeIcon icon={faXmark} size="xl" />
      </button>
    </div>,
    document.body
  );
};
export default FullScreenGallery;
