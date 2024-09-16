import ContentWidth from '@/components/ContentWidth';
import s from './layout.module.css';
import ContentPadding from '@/components/ContentPadding';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <ContentPadding>
    <ContentWidth narrow className={s.container}>
      {children}
    </ContentWidth>
  </ContentPadding>
);

export default Layout;
