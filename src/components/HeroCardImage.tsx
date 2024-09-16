import Image from 'next/image';
import s from './HeroCardImage.module.css';

interface Props {
  src: string;
  alt: string;
}

const HeroCardImage = ({ src, alt }: Props) => {
  return (
    <div className={s.container}>
      <Image src={src} alt={alt} fill objectFit="cover" />
    </div>
  );
};
export default HeroCardImage;
