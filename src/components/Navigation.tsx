import s from './Navigation.module.css';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Navigation = ({ className, children }: Props) => {
  return (
    <nav className={`${s.container} ${className}`}>
      <ul>{children}</ul>
    </nav>
  );
};

export default Navigation;
