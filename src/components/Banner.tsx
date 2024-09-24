import Image, { StaticImageData } from 'next/image';
import s from './Banner.module.css';

interface Props {
  src: StaticImageData | string;
  alt: string;
  priority?: boolean;
}

const Banner = ({ src, alt, priority = false }: Props) => {
  return (
    <div className={s.container}>
      <Image
        className={s.image}
        src={src}
        alt={alt}
        priority={priority}
        sizes="100vw"
        fill
      />
    </div>
  );
};
export default Banner;
