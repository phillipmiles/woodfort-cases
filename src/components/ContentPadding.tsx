import s from './ContentPadding.module.css';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const ContentPadding = ({ className, children }: Props) => {
  return <div className={`${className} ${s.container}`}>{children}</div>;
};
export default ContentPadding;
