import s from './DrawerNavigation.module.css';

interface Props {
  children: React.ReactNode;
}

const DrawerNavigation = ({ children }: Props) => {
  return <nav>{children}</nav>;
};
export default DrawerNavigation;
