'use client';
import Link from 'next/link';
import s from './Footer.module.css';
import Image from 'next/image';
import NaviationItem from '@/components/NavigationItem';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faInstagram,
  faTwitter,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';
import ContentWidth from '@/components/ContentWidth';

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className={s.container}>
      <ContentWidth className={s.inner}>
        <ul className={s.nav}>
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
          <NaviationItem
            href="/policies/terms-of-service"
            active={pathname === '/policies/terms-of-service'}
          >
            Terms of service
          </NaviationItem>
          <NaviationItem
            href="/policies/refund-policy"
            active={pathname === '/policies/refund-policy'}
          >
            Refund Policy
          </NaviationItem>
        </ul>
        <div>
          <Link href="/">
            <Image
              src="/brand/logo-icon_white.png"
              alt="Woodfort Cases"
              width={60}
              height={60}
            />
          </Link>
        </div>
        <ul className={`${s.nav} ${s.socials}`}>
          <li>
            <Link href="/">
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <FontAwesomeIcon icon={faYoutube} size="xl" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <FontAwesomeIcon icon={faTwitter} size="xl" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <FontAwesomeIcon icon={faPinterest} size="xl" />
            </Link>
          </li>
        </ul>
      </ContentWidth>
    </footer>
  );
};
export default Footer;
