import Image, { StaticImageData } from 'next/image';
import s from './HeroCardImage.module.css';

interface Props {
  src: StaticImageData;
  alt: string;
  priority?: boolean;
  size?: 'large' | 'small';
}

const HeroCardImage = ({
  src,
  alt,
  priority = false,
  size = 'large',
}: Props) => {
  return (
    <div className={`${s.container} ${size === 'large' ? s.large : ''}`}>
      <Image
        className={s.image}
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={
          size === 'large'
            ? '(max-width: 780px) 100vw, 80vw'
            : '(max-width: 780px) 100vw, 50vw'
        }
      />
    </div>
  );
};
export default HeroCardImage;
