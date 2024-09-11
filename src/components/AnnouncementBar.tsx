import Link from 'next/link';
import s from './AnnouncementBar.module.css';

interface Props {
  href: string;
  children: React.ReactNode;
}

const AnnouncementBar = ({ href, children }: Props) => {
  return (
    <div className={s.container}>
      <Link href={href} className={s.link}>
        {children}
      </Link>
    </div>
  );
};
export default AnnouncementBar;
