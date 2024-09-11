import Image from 'next/image';
import s from './page.module.css';

export default function Home() {
  return (
    <div className={s.page}>
      <div className={s.banner}>
        <Image src="/images/composite.jpg" alt="" fill objectFit="cover" />
      </div>
      <div style={{ background: '#DDD', height: '200px' }}>dfh</div>
    </div>
  );
}
