import Link from 'next/link';
import s from './Socials.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faPinterest,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

interface Props {
  className?: string;
}

const Socials = ({ className }: Props) => {
  return (
    <ul className={`${className} ${s.nav} ${s.socials}`}>
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
  );
};
export default Socials;
