import Image from 'next/image';
import s from './ProductsCard.module.css';
import Link from 'next/link';

interface Props {
  title: string;
  description: string;
  src: string;
  srcHover: string;
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
        <Image src={src} alt={alt} className={s.image} fill />
        <Image src={srcHover} alt={alt} className={s.imageHover} fill />
      </div>
      <div>
        <h3 className={s.title}>
          <Link href={href} className={s.link}>
            {title}
          </Link>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default ProductsCard;
