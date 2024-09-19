import s from './SpecsCell.module.css';

interface Props {
  children: React.ReactNode;
}

const SpecsCell = ({ children }: Props) => {
  return <div className={s.container}>{children}</div>;
};
export default SpecsCell;
