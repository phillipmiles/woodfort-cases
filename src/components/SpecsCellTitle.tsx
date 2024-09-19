import s from './SpecsCellTitle.module.css';

interface Props {
  children: React.ReactNode;
}

const SpecsCellTitle = ({ children }: Props) => {
  return <h4 className={s.title}>{children}</h4>;
};
export default SpecsCellTitle;
