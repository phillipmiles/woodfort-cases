import s from './ProductsGrid.module.css';

interface Props {
  children: React.ReactNode;
}

const ProductsGrid = ({ children }: Props) => {
  return <div className={s.container}>{children}</div>;
};
export default ProductsGrid;
