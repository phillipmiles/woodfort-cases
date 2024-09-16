import s from './HeroCard.module.css';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const ImageTextCard = ({ className, children }: Props) => {
  return (
    <div className={`${s.container} ${className ? className : ''}`}>
      {children}
    </div>
  );
};

export default ImageTextCard;
