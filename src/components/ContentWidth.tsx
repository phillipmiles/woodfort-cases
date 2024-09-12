import s from './ContentWidth.module.css';

interface Props {
  children?: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

const ContentWidth = ({ children, className = '', narrow }: Props) => {
  return (
    <div className={`${s.container} ${className} ${narrow ? s.narrow : ''}`}>
      {children}
    </div>
  );
};
export default ContentWidth;
