import s from './ContentPadding.module.css';

interface Props {
  children: React.ReactNode;
}

const ContentPadding = ({ children }: Props) => {
  return <div className={s.container}>{children}</div>;
};
export default ContentPadding;
