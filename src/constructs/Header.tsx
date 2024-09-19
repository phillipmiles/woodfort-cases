'use client';

import Navigation from '@/components/Navigation';
import NaviationItem from '@/components/NavigationItem';
import Image from 'next/image';
import s from './Header.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ContentWidth from '@/components/ContentWidth';
import Drawer from '@/components/Drawer';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import DrawerNavigation from '@/components/DrawerNavigation';
import DrawerNavigationItem from '@/components/DrawerNavigationItem';
import Socials from '@/components/Socials';
import DrawerFooter from '@/components/DrawerFooter';

import imageLogo from '../../public/brand/logo.webp';

const Header = () => {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((state) => !state);
  };

  return (
    <header className={s.container}>
      <ContentWidth className={s.inner}>
        <button className={s.drawerButton} onClick={toggleDrawer}>
          <FontAwesomeIcon icon={faBars} size="xl" />
        </button>
        <Navigation className={s.nav}>
          <NaviationItem href="/" active={pathname === '/'}>
            Home
          </NaviationItem>
          <NaviationItem
            href="/cases/genesis"
            active={pathname === '/cases/genesis'}
          >
            Cases
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
              src={imageLogo}
              priority
              alt="Woodfort Cases"
              width={230}
              height={118}
            />
          </Link>
        </div>
        <div>{/* Right side */}</div>
      </ContentWidth>
      <Drawer open={drawerOpen} className={s.drawer}>
        <div className={s.drawerContent}>
          <button className={s.drawerButton} onClick={toggleDrawer}>
            <FontAwesomeIcon icon={faXmark} size="xl" />
          </button>
          <DrawerNavigation>
            <DrawerNavigationItem
              href="/"
              active={pathname === '/'}
              onClick={toggleDrawer}
            >
              Home
            </DrawerNavigationItem>
            <DrawerNavigationItem
              href="/shop"
              active={pathname === '/shop'}
              onClick={toggleDrawer}
            >
              Shop
            </DrawerNavigationItem>
            <DrawerNavigationItem
              href="/about"
              active={pathname === '/about'}
              onClick={toggleDrawer}
            >
              About
            </DrawerNavigationItem>
            <DrawerNavigationItem
              href="/contact"
              active={pathname === '/contact'}
              onClick={toggleDrawer}
            >
              Contact
            </DrawerNavigationItem>
          </DrawerNavigation>
        </div>
        <DrawerFooter>
          <Socials />
        </DrawerFooter>
      </Drawer>
    </header>
  );
};
export default Header;
