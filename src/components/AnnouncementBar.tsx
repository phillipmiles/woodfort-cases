import s from './AnnouncementBar.module.css';

interface Props {
  children: React.ReactNode;
}

const AnnouncementBar = ({ children }: Props) => {
  return <div className={s.container}>{children}</div>;
};
export default AnnouncementBar;
