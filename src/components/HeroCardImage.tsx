import Image from 'next/image';
import s from './HeroCardImage.module.css';

interface Props {
  src: string;
  alt: string;
  priority?: boolean;
}

const HeroCardImage = ({ src, alt, priority = false }: Props) => {
  return (
    <div className={s.container}>
      <Image className={s.image} src={src} alt={alt} fill priority={priority} />
    </div>
  );
};
export default HeroCardImage;
