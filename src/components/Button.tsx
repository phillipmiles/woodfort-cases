import Link from 'next/link';
import s from './Button.module.css';
import { MouseEventHandler } from 'react';

interface Props {
  href?: string;
  onClick?: MouseEventHandler;
  className?: string;
  children: React.ReactNode;
  invert?: boolean;
}

const Button = ({ className, href, onClick, children, invert }: Props) => {
  if (href)
    return (
      <Link
        className={`${s.container} ${className} ${invert ? s.invert : ''}`}
        href={href}
      >
        {children}
      </Link>
    );
  return (
    <button
      className={`${s.container} ${className} ${invert ? s.invert : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
