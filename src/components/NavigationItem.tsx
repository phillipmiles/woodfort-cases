import Link from 'next/link';
import s from './NavigationItem.module.css';

interface Props {
  href: string;
  children: React.ReactNode;
}

const NaviationItem = ({ href, children }: Props) => {
  return (
    <li className={s.container}>
      <Link href={href} className={s.link}>
        {children}
      </Link>
    </li>
  );
};
export default NaviationItem;
