import Image from 'next/image';
import s from './page.module.css';
import Footer from '@/constructs/Footer';
import ContentWidth from '@/components/ContentWidth';

export default function Home() {
  return (
    <div className={s.page}>
      <div className={s.banner}>
        <Image src="/images/composite.jpg" alt="" fill objectFit="cover" />
      </div>
      <div style={{ background: '#DDD', height: '200px' }}>
        <ContentWidth>dfh</ContentWidth>
      </div>
    </div>
  );
}
