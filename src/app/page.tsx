import Image from 'next/image';
import s from './page.module.css';
import HeroCard from '@/components/HeroCard';
import HeroCardImage from '@/components/HeroCardImage';
import HeroCardContent from '@/components/HeroCardContent';
import Button from '@/components/Button';
import Section from '@/components/Section';
import ProductsCard from '@/constructs/ProductsCard';
import ProductsGrid from '@/components/ProductsGrid';

import imageComposite from '../../public/images/composite.jpg';
import imageTasOakMain from '../../public/images/genesis/tasoak/main_tasoak.jpg';
import imageBlackwoodMain from '../../public/images/genesis/blackwood/main_blackwood.jpg';
import imageWalnutMain from '../../public/images/genesis/walnut/main_walnut.jpg';
import imageTasOakPower1 from '../../public/images/genesis/tasoak/power1_tasoak.jpg';
import imageBlackwoodPower1 from '../../public/images/genesis/blackwood/power1_blackwood.jpg';
import imageWalnutPower1 from '../../public/images/genesis/walnut/power1_walnut.jpg';
import imageWipSandingAltBW from '../../public/images/wip_sanding_alt_blackwhite.jpg';
import OrderNowSection from '@/constructs/OrderNowSection';
import Banner from '@/components/Banner';

export default function Home() {
  return (
    <div className={s.page}>
      <Banner src={imageComposite} alt="" />
      <Section narrow comfort center>
        <h2>Handcrafted Luxury PC Cases</h2>
        <p>
          Natural materials meet modern technology. Function with serenity. Made
          to order PC cases.
        </p>
      </Section>
      <Section soft tight>
        <HeroCard className={s.heroCardMargin}>
          <HeroCardImage
            src={imageTasOakPower1}
            alt="The Genesis case by Woodfort Cases. A PC case made with Tasmanian Oak wooden panels giving the case a beautiful, bright, straw coloured appearance. "
          />
          <HeroCardContent>
            <h2 className={s.heading}>The Genesis case</h2>
            <p>The Genesis is the case that marks the beginning of Woodfort.</p>
            <p>
              Embodying Woodfort's alignment with nature, four hand crafted
              wooden panels cover the cold aluminium structure beneath with the
              soothing glow of natural timber.
            </p>
            <Button
              href="/cases/genesis/tasmanian-oak"
              className={s.sectionCTA}
            >
              Learn more
            </Button>
          </HeroCardContent>
        </HeroCard>
        <h3>Available in 3 different timbers</h3>
        <ProductsGrid>
          <ProductsCard
            title="Genesis - Tasmanian Oak"
            // description="$2,800"
            href="/cases/genesis/tasmanian-oak"
            alt=""
            src={imageTasOakMain}
            srcHover={imageTasOakPower1}
          />
          <ProductsCard
            title="Genesis - Walnut"
            // description="$2,800"
            href="/cases/genesis/walnut"
            alt=""
            src={imageWalnutMain}
            srcHover={imageWalnutPower1}
          />
          <ProductsCard
            title="Genesis - Blackwood"
            // description="$2,800"
            href="/cases/genesis/blackwood"
            alt=""
            src={imageBlackwoodMain}
            srcHover={imageBlackwoodPower1}
          />
        </ProductsGrid>
      </Section>

      <OrderNowSection />
      <Section soft comfort>
        <HeroCard>
          <HeroCardContent>
            <h2 className={s.heading}>Handmade wood panels</h2>
            <p>
              Phillip crafts each and every wooden panel by hand. Residing in
              Melbourne, Australia he uses a variety of locally sourced and
              international timbers.
            </p>
            <Button href="/about" className={s.sectionCTA}>
              Learn more
            </Button>
          </HeroCardContent>
          <HeroCardImage
            src={imageWipSandingAltBW}
            alt="A man sands the wooden slats from the front panel of the Genesis computer case."
          />
        </HeroCard>
      </Section>
    </div>
  );
}
