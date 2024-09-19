import s from './SpecsGrid.module.css';

interface Props {
  children: React.ReactNode;
}

const SpecsGrid = ({ children }: Props) => {
  return <div className={s.container}>{children}</div>;
};
export default SpecsGrid;
