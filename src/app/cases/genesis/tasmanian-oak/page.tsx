import s from './page.module.css';
import Section from '@/components/Section';
import type { Metadata } from 'next';

import imageTasOakMain from '../../../../../public/images/genesis/tasoak/main_tasoak.jpg';
import imageTasOakPower1 from '../../../../../public/images/genesis/tasoak/power1_tasoak.jpg';
import imageTasOakPower2 from '../../../../../public/images/genesis/tasoak/power2_tasoak.jpg';
import imageTasOakRear from '../../../../../public/images/genesis/tasoak/rear_tasoak.jpg';
import imageTasOakToweringAlt from '../../../../../public/images/genesis/tasoak/towering_alt_tasoak.jpg';
import imageTasOakBareLeft from '../../../../../public/images/genesis/tasoak/bare_left_tasoak.jpg';
import imageTasOakBareRight from '../../../../../public/images/genesis/tasoak/bare_right_tasoak.jpg';
import imageTasOakBareFront from '../../../../../public/images/genesis/tasoak/bare_front_tasoak.jpg';
import imageTasOakBareBack from '../../../../../public/images/genesis/tasoak/bare_back_tasoak.jpg';

import ProductGallery from '@/components/ProductGallery';

export const metadata: Metadata = {
  title: 'Genesis - Tasmanian Oak | Woodfort Cases',
};

const Page = () => {
  return (
    <Section tight>
      <div className={s.productContainer}>
        <ProductGallery
          images={[
            { src: imageTasOakMain, alt: '' },
            { src: imageTasOakPower1, alt: '' },
            { src: imageTasOakPower2, alt: '' },
            { src: imageTasOakRear, alt: '' },
            { src: imageTasOakToweringAlt, alt: '' },
            { src: imageTasOakBareLeft, alt: '' },
            { src: imageTasOakBareFront, alt: '' },
            { src: imageTasOakBareBack, alt: '' },
            { src: imageTasOakBareRight, alt: '' },
          ]}
        />
        <div className={s.productDetails}>
          <span className={s.overTitle}>Mid Tower</span>
          <h1>Genesis - Tasmanian Oak</h1>
          {/* <span>$2,800</span> */}
          {/* <span>Tax included.</span> */}
          <p>The Genesis is the case that marks the beginning of Woodfort.</p>
          <p>
            Embodying Woodfort's alignment with nature, four hand crafted wooden
            panels cover the cold aluminum structure beneath with the soothing
            glow of natural timber.
          </p>
          <p>
            This case is made from Tasmanian Oak. A name that groups three
            different species of Australian timbers together. Typically in a
            light straw colour this wood can vary slightly with shades of cream
            to pink.
          </p>
          <p>
            The wood has been finished with a durable and heat resistant varnish
            protecting the timber from the warmth generated by the compouter
            components and providing a lustrous satin to semi-gloss sheen.
          </p>
          <blockquote className={s.quote}>
            "It seems to me that the natural world is the greatest source of
            excitement; the greatest source of visual beauty; the greatest
            source of intellectual interest. It is the greatest source of so
            much in life that makes life worth living."
          </blockquote>
          <span className={s.quoteSource}>- Sir David Attenborough</span>
          <h3>Disclaimer</h3>
          <p>
            This item is made of wood so the texture and colour tone will vary
            slightly from piece to piece.
          </p>
          <p>
            Lastly, this is a handmade product and as such minor imperfections
            may exist that betray my human fallibility.
          </p>
          {/* <Link href="/">Share</Link> */}
        </div>
      </div>
    </Section>
  );
};

export default Page;
