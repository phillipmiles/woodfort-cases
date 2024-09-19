import Image, { StaticImageData } from 'next/image';
import s from './HeroCardImage.module.css';

interface Props {
  src: StaticImageData;
  alt: string;
  priority?: boolean;
}

const HeroCardImage = ({ src, alt, priority = false }: Props) => {
  return (
    <div className={s.container}>
      <Image
        className={s.image}
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 780px) 100vw, 80vw"
      />
    </div>
  );
};
export default HeroCardImage;
