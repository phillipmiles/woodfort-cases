import s from './ProductsCard.module.css';

interface Props {
  children: React.ReactNode;
}

const ProductsCard = ({ children }: Props) => {
  return (
    <div className={s.container}>
      <div>{children}</div>
    </div>
  );
};
export default ProductsCard;
