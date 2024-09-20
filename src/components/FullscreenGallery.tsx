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
}

const FullScreenGallery = ({ images, showFullscreen, onClose }: Props) => {
  return createPortal(
    <div className={`${s.container} ${showFullscreen ? s.visible : ''}`}>
      <div className={s.background} onClick={onClose} />
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          sizes={'100vh'}
          style={{
            width: 'auto',
            maxWidth: '100%',
            height: '100%',
          }}
        />
      ))}

      <button onClick={onClose} className={s.closeIcon}>
        <FontAwesomeIcon icon={faXmark} size="xl" />
      </button>
    </div>,
    document.body
  );
};
export default FullScreenGallery;
