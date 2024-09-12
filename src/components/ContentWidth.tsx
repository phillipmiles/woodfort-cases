import s from './ContentWidth.module.css';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const ContentWidth = ({ children, className }: Props) => {
  return <div className={`${s.container} ${className}`}>{children}</div>;
};
export default ContentWidth;
