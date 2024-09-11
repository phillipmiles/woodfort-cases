import Link from 'next/link';
import s from './NavigationItem.module.css';

interface Props {
  active?: boolean;
  href: string;
  children: React.ReactNode;
}

const NaviationItem = ({ active, href, children }: Props) => {
  return (
    <li className={s.container}>
      <Link href={href} className={active ? `${s.link} ${s.active}` : s.link}>
        {children}
      </Link>
    </li>
  );
};
export default NaviationItem;
