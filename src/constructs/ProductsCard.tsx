import Image, { StaticImageData } from 'next/image';
import s from './ProductsCard.module.css';
import Link from 'next/link';

interface Props {
  title: string;
  description?: string;
  src: StaticImageData;
  srcHover: StaticImageData;
  alt: string;
  href: string;
}

const ProductsCard = ({
  title,
  description,
  src,
  srcHover,
  alt,
  href,
}: Props) => {
  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <Image
          src={src}
          alt={alt}
          className={s.image}
          fill
          sizes="(max-width: 1024px) 50vw, 33vw"
        />
        <Image
          src={srcHover}
          alt={alt}
          className={s.imageHover}
          fill
          sizes="(max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div>
        <h3 className={s.title}>
          <Link href={href} className={s.link}>
            {title}
          </Link>
        </h3>
        <p className={s.description}>{description}</p>
      </div>
    </div>
  );
};
export default ProductsCard;
