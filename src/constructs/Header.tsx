'use client';

import Navigation from '@/components/Navigation';
import NaviationItem from '@/components/NavigationItem';
import Image from 'next/image';
import s from './Header.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ContentWidth from '@/components/ContentWidth';

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={s.container}>
      <ContentWidth className={s.inner}>
        <Navigation className={s.nav}>
          <NaviationItem href="/" active={pathname === '/'}>
            Home
          </NaviationItem>
          <NaviationItem href="/shop" active={pathname === '/shop'}>
            Shop
          </NaviationItem>
          <NaviationItem href="/about" active={pathname === '/about'}>
            About
          </NaviationItem>
          <NaviationItem href="/contact" active={pathname === '/contact'}>
            Contact
          </NaviationItem>
        </Navigation>
        <div>
          <Link href="/">
            <Image
              src="/brand/logo.webp"
              alt="Woodfort Cases"
              width={230}
              height={118}
            />
          </Link>
        </div>
        <div>{/* Right side */}</div>
      </ContentWidth>
    </header>
  );
};
export default Header;
