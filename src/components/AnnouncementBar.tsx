import Link from 'next/link';
import s from './AnnouncementBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface Props {
  href: string;
  children: React.ReactNode;
}

const AnnouncementBar = ({ href, children }: Props) => {
  return (
    <div className={s.container}>
      <Link href={href} className={s.link}>
        {children}
        <FontAwesomeIcon icon={faArrowRight} className={s.icon} />
      </Link>
    </div>
  );
};
export default AnnouncementBar;
