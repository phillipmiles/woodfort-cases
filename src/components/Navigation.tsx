import s from './Navigation.module.css';

interface Props {
  children: React.ReactNode;
}

const Navigation = ({ children }: Props) => {
  return (
    <nav className={s.container}>
      <ul>{children}</ul>
    </nav>
  );
};

export default Navigation;
