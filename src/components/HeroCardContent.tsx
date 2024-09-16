import s from './HeroCardContent.module.css';

interface Props {
  children: React.ReactNode;
}

const HeroCardContent = ({ children }: Props) => {
  return <div className={s.container}>{children}</div>;
};
export default HeroCardContent;
