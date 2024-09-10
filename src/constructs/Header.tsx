import Navigation from '@/components/Navigation';
import NaviationItem from '@/components/NavigationItem';
import Image from 'next/image';
import s from './Header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={s.container}>
      <Navigation>
        <NaviationItem href="/">Home</NaviationItem>
        <NaviationItem href="/shop">Shop</NaviationItem>
        <NaviationItem href="/about">About</NaviationItem>
        <NaviationItem href="/contact">Contact</NaviationItem>
      </Navigation>
      <div>
        <Link href="/">
          <Image
            src="/brand/logo.webp"
            alt="Woodfort Cases"
            width={230}
            height={118.5}
          />
        </Link>
      </div>
      <div>{/* Right side */}</div>
    </header>
  );
};
export default Header;
