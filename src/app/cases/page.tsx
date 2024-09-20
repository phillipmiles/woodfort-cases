import s from './page.module.css';
import HeroCard from '@/components/HeroCard';
import HeroCardImage from '@/components/HeroCardImage';
import HeroCardContent from '@/components/HeroCardContent';
import LinkButton from '@/components/LinkButton';
import Section from '@/components/Section';
import ProductsCard from '@/constructs/ProductsCard';
import ProductsGrid from '@/components/ProductsGrid';

import imageTasOakMain from '../../../public/images/genesis/tasoak/main_tasoak.jpg';
import imageBlackwoodMain from '../../../public/images/genesis/blackwood/main_blackwood.jpg';
import imageWalnutMain from '../../../public/images/genesis/walnut/main_walnut.jpg';
import imageTasOakPower1 from '../../../public/images/genesis/tasoak/power1_tasoak.jpg';
import imageBlackwoodPower1 from '../../../public/images/genesis/blackwood/power1_blackwood.jpg';
import imageWalnutPower1 from '../../../public/images/genesis/walnut/power1_walnut.jpg';
import imageWipSandingAltBW from '../../../public/images/wip_sanding_alt_blackwhite.jpg';
import OrderNowSection from '@/constructs/OrderNowSection';

export default function Home() {
  return (
    <div className={s.page}>
      <Section soft comfort>
        <h1>PC Cases</h1>
        <h3>The Genesis</h3>
        {/* <p>The Genesis is the case that marks the beginning of Woodfort.</p> */}
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

      {/* <Section soft tight>
        <HeroCard>
          <HeroCardContent>
            <h2 className={s.heading}>Handmade wood panels</h2>
            <p>
              Phillip crafts each and every wooden panel by hand. Residing in
              Melbourne, Australia he uses a variety of locally sourced and
              international timbers.
            </p>
            <LinkButton href="/about" className={s.sectionCTA}>
              Learn more
            </LinkButton>
          </HeroCardContent>
          <HeroCardImage
            src={imageWipSandingAltBW}
            alt="A man sands the wooden slats from the front panel of the Genesis computer case."
          />
        </HeroCard>
      </Section> */}
    </div>
  );
}
