import Link from 'next/link';
import s from './LinkButton.module.css';

interface Props {
  href: string;
  className?: string;
  children: React.ReactNode;
  invert?: boolean;
}

const LinkButton = ({ className, href, children, invert }: Props) => {
  return (
    <Link
      className={`${s.container} ${className} ${invert ? s.invert : ''}`}
      href={href}
    >
      {children}
    </Link>
  );
};
export default LinkButton;
