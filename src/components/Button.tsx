import Link from 'next/link';
import s from './Button.module.css';
import { MouseEventHandler } from 'react';

interface Props {
  href?: string;
  onClick?: MouseEventHandler;
  className?: string;
  children: React.ReactNode;
  invert?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button = ({
  className,
  href,
  onClick,
  children,
  invert,
  type = 'button',
  disabled,
  ...props
}: Props) => {
  if (href)
    return (
      <Link
        className={`${s.container} ${className} ${invert ? s.invert : ''}`}
        href={href}
        {...props}
      >
        {children}
      </Link>
    );
  return (
    <button
      className={`${s.container} ${className} ${invert ? s.invert : ''}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
