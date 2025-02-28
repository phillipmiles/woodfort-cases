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
        <Link
          href="https://www.instagram.com/woodfortcases/"
          target="_blank"
          aria-label="Woodfort Cases on Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} size="xl" />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.youtube.com/channel/UCpavxWMrqsFSqZqnGRO3MFQ"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faYoutube}
            size="xl"
            aria-label="Woodfort Cases on Youtube"
          />
        </Link>
      </li>
      <li>
        <Link href="https://x.com/WoodfortCases" target="_blank">
          <FontAwesomeIcon
            icon={faTwitter}
            size="xl"
            aria-label="Woodfort Cases on X (formally Twitter)"
          />
        </Link>
      </li>
      <li>
        <Link
          href="https://au.pinterest.com/woodfortcases/"
          target="_blank"
          aria-label="Woodfort Cases on Pinterest"
        >
          <FontAwesomeIcon icon={faPinterest} size="xl" />
        </Link>
      </li>
    </ul>
  );
};
export default Socials;
