import Image from 'next/image';
import s from './page.module.css';
import ContentWidth from '@/components/ContentWidth';
import Link from 'next/link';
import HeroCard from '@/components/HeroCard';
import HeroCardImage from '@/components/HeroCardImage';
import HeroCardContent from '@/components/HeroCardContent';
import LinkButton from '@/components/LinkButton';

export default function Home() {
  return (
    <div className={s.page}>
      <div className={s.banner}>
        <Image src="/images/composite.jpg" alt="" fill objectFit="cover" />
      </div>
      <div className={`${s.section} ${s.sectionComfort} ${s.sectionCenter}`}>
        <ContentWidth narrow>
          <h2>Handcrafted Luxury PC Cases</h2>
          <p>
            Natural materials meet modern technology. Function with serenity.
            Made to order PC cases.
          </p>
        </ContentWidth>
      </div>
      <div className={`${s.section} ${s.sectionSoft} ${s.sectionTight}`}>
        <ContentWidth>
          <HeroCard>
            <HeroCardImage
              src="/images/genesis/tasoak/power1_tasoak.jpg"
              alt="The Genesis case by Woodfort Cases. A PC case made with Tasmanian Oak wooden panels giving the case a beautiful, bright, straw coloured appearance. "
            />
            <HeroCardContent>
              <h2 className={s.heading}>The Genesis case</h2>
              <p>
                The Genesis is the case that marks the beginning of Woodfort.
              </p>
              <p>
                Embodying Woodfort's alignment with nature, four hand crafted
                wooden panels cover the cold aluminium structure beneath with
                the soothing glow of natural timber.
              </p>
              <LinkButton href="/" className={s.sectionCTA}>
                Learn more
              </LinkButton>
            </HeroCardContent>
          </HeroCard>
          <h3>Available in 3 different timbers</h3>
        </ContentWidth>
      </div>
      <div
        className={`${s.section} ${s.sectionPrimary} ${s.sectionComfort} ${s.sectionCenter}`}
      >
        <ContentWidth narrow>
          <h2 style={{ fontSize: '52px' }}>Order now</h2>
          <p>
            Woodfort cases are made to order and may be scheduled for production
            months in advance. Enquire below to secure the next available space.
          </p>
          <LinkButton href="/" invert className={s.sectionCTA}>
            Enquire
          </LinkButton>
        </ContentWidth>
      </div>
      <div className={`${s.section} ${s.sectionSoft} ${s.sectionComfort}`}>
        <ContentWidth>
          <HeroCard>
            <HeroCardContent>
              <h2 className={s.heading}>Handmade wood panels</h2>
              <p>
                Phillip crafts each and every wooden panel by hand. Residing in
                Melbourne, Australia he uses a variety of locally sourced and
                international timbers.
              </p>
              <LinkButton href="/" className={s.sectionCTA}>
                Learn more
              </LinkButton>
            </HeroCardContent>
            <HeroCardImage
              src="/images/wip_sanding_alt_blackwhite.jpg"
              alt="A man sands the wooden slats from the front panel of the Genesis computer case."
            />
          </HeroCard>
        </ContentWidth>
      </div>
    </div>
  );
}
