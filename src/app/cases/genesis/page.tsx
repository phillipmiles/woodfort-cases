import ProductsGrid from '@/components/ProductsGrid';
import s from './page.module.css';
import LinkButton from '@/components/LinkButton';
import Section from '@/components/Section';
import ProductsCard from '@/constructs/ProductsCard';
import Link from 'next/link';
import Image from 'next/image';

import imageTasOakMain from '../../../../public/images/genesis/tasoak/main_tasoak.jpg';
import imageBlackwoodMain from '../../../../public/images/genesis/blackwood/main_blackwood.jpg';
import imageWalnutMain from '../../../../public/images/genesis/walnut/main_walnut.jpg';
import imageTasOakPower1 from '../../../../public/images/genesis/tasoak/power1_tasoak.jpg';
import imageBlackwoodPower1 from '../../../../public/images/genesis/blackwood/power1_blackwood.jpg';
import imageWalnutPower1 from '../../../../public/images/genesis/walnut/power1_walnut.jpg';
import imageTasOakPower2 from '../../../../public/images/genesis/tasoak/power2_tasoak.jpg';
import imageBlackwoodPower2 from '../../../../public/images/genesis/blackwood/power2_blackwood.jpg';
import imageWalnutPower2 from '../../../../public/images/genesis/walnut/power2_walnut.jpg';

import imageBlackwoodRear from '../../../../public/images/genesis/blackwood/rear_blackwood.jpg';
import imageBlackwoodToweringAlt from '../../../../public/images/genesis/blackwood/towering_alt_blackwood.jpg';
import imageBlackwoodBareLeft from '../../../../public/images/genesis/blackwood/bare_left_blackwood.jpg';
import imageBlackwoodBareRight from '../../../../public/images/genesis/blackwood/bare_right_blackwood.jpg';
import imageBlackwoodBareFront from '../../../../public/images/genesis/blackwood/bare_front_blackwood.jpg';
import imageBlackwoodBareBack from '../../../../public/images/genesis/blackwood/bare_back_blackwood.jpg';
import SpecsCell from '@/components/SpecsCell';
import SpecsCellTitle from '@/components/SpecsCellTitle';
import SpecsGrid from '@/components/SpecsGrid';
import OrderNowSection from '@/constructs/OrderNowSection';

const Page = () => {
  return (
    <div>
      <Section tight>
        <div className={s.productContainer}>
          <div className={s.productImages}>
            <Image
              src={imageBlackwoodMain}
              alt=""
              sizes="(max-width: 780px) 100vw, 80vw"
              priority
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
            <Image
              src={imageBlackwoodPower1}
              alt=""
              sizes="(max-width: 780px) 50vw, 30vw"
              priority
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
            <Image
              src={imageBlackwoodPower2}
              alt=""
              sizes="(max-width: 780px) 50vw, 30vw"
              priority
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
            <Image
              src={imageBlackwoodRear}
              alt=""
              sizes="(max-width: 780px) 50vw, 30vw"
              priority
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
            <Image
              src={imageBlackwoodToweringAlt}
              alt=""
              sizes="(max-width: 780px) 50vw, 30vw"
              priority
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
            <Image
              src={imageBlackwoodBareLeft}
              alt=""
              sizes="(max-width: 780px) 50vw, 30vw"
              priority
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
            <Image
              src={imageBlackwoodBareFront}
              alt=""
              sizes="(max-width: 780px) 50vw, 30vw"
              priority
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
            <Image
              src={imageBlackwoodBareBack}
              alt=""
              sizes="(max-width: 780px) 50vw, 30vw"
              priority
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
            <Image
              src={imageBlackwoodBareRight}
              alt=""
              sizes="(max-width: 780px) 50vw, 30vw"
              priority
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
          <div className={s.productDetails}>
            <span className={s.overTitle}>Mid Tower</span>
            <h1>Genesis</h1>
            {/* <span>$2,800</span> */}
            <span>Tax included.</span>
            <p>The Genesis is the case that marks the beginning of Woodfort.</p>
            <p>
              Embodying Woodfort's alignment with nature, four hand crafted
              wooden panels cover the cold aluminum structure beneath with the
              soothing glow of natural timber.
            </p>
            <p>
              This case is made from Blackwood, a prized Australian timber that
              features golden rown tones meixed with some reds and darker
              streaks.
            </p>
            <p>
              The wood has been finished with a durable and heat resistant
              varnish protecting the tiumber from thew warmth generated byu the
              compouter components and providing a lustrous satin to semi-gloss
              sheen.
            </p>
            <blockquote>
              "It seems to me that the natural world is the greatest source of
              excitement; the greatest source of visual beauty; the greatest
              source of intellectual interest. It is the greatest source of so
              much in life that makes life worth living."
            </blockquote>
            <span>- Sir David Attenborough</span>
            <h3>Disclaimer</h3>
            <p>
              This item is made of wood so the texture and colour tone will vary
              slightly from piece to piece.
            </p>
            <p>
              Lastly, this is a handmade product and as such minor imperfections
              may exist that betray my human fallibility.
            </p>
            <Link href="/">Share</Link>
          </div>
        </div>
      </Section>
      <Section tight>
        <h2>Tech Specs</h2>
        <SpecsGrid>
          <SpecsCell>
            <SpecsCellTitle>General</SpecsCellTitle>
            <p>
              <strong>Motherboard Support: </strong>
              Mini-ITX, Micro- AIX, AIX
            </p>
            <p>
              <strong>Form Factor: </strong>
              Mid-Tower
            </p>
          </SpecsCell>
          <SpecsCell>
            <SpecsCellTitle>Dimensions</SpecsCellTitle>
            <p>
              <strong>Width: </strong>
              24cm
            </p>
            <p>
              <strong>Height: </strong>
              51cm
            </p>
            <p>
              <strong>Depth: </strong>
              51cm
            </p>
          </SpecsCell>
          <SpecsCell>
            <SpecsCellTitle>Front ports</SpecsCellTitle>
            <p>2 x USB 3.2 Gen 1 Type-A</p>
            <p>1 x USB 3.2 Gen 2 Type-C</p>
            <p>1 x Headset Audio Jack</p>
          </SpecsCell>
          <SpecsCell>
            <SpecsCellTitle>Clearance & Compatibility</SpecsCellTitle>
            <p>
              <strong>CPU Cooler Clearance: </strong>Up to 185mm
            </p>
            <p>
              <strong>GPU Clearance: </strong>Up to 400mm
            </p>
            <p>
              <strong>Front Radiator Clearance: </strong>60mm
            </p>
            <p>
              <strong>Top Radiator Clearance: </strong>30mm
            </p>
          </SpecsCell>
          <SpecsCell>
            <SpecsCellTitle>Fan Support</SpecsCellTitle>
            <p>
              <strong>Front: </strong>3 x 120mm or 3 x 140mm
            </p>
            <p>
              <strong>Top: </strong>3 x 120mm or 2 x 140mm
            </p>
            <p>
              <strong>Rear: </strong>1 x 120mm or 1 x 140mm
            </p>
          </SpecsCell>
          <SpecsCell>
            <SpecsCellTitle>Radiator Support</SpecsCellTitle>
            <p>
              <strong>Front: </strong>Up to 360mm with Push/Pull
            </p>
            <p>
              <strong>Top: </strong>Up to 360mm
            </p>
            <p>
              <strong>Rear: </strong>Up to 140mm
            </p>
          </SpecsCell>
          <SpecsCell>
            <SpecsCellTitle>Drive Bays</SpecsCellTitle>
            <p>
              <strong>2.5in: </strong>4+2
            </p>
            <p>
              <strong>3.5in: </strong>2
            </p>
          </SpecsCell>
          <SpecsCell>
            <SpecsCellTitle>Expansion Slots</SpecsCellTitle>
            <p>
              <strong>Standard: </strong>7
            </p>
            <p>
              <strong>Vertical: </strong>0
            </p>
          </SpecsCell>
          <SpecsCell>
            <SpecsCellTitle>Included</SpecsCellTitle>
            <p>4 x Woodfort Genesis wooden panels</p>
            <p>
              1 x{' '}
              <Link
                href="https://nzxt.com/en-AU/product/h7-flow"
                target="_blank"
              >
                NZXT H7 Flow case
              </Link>{' '}
              in Black
            </p>
            <p>
              2 x{' '}
              <Link
                href="https://nzxt.com/en-AU/collection/f-series"
                target="_blank"
              >
                NZXT F Series Quiet
              </Link>{' '}
              120mm Fans
            </p>
          </SpecsCell>
        </SpecsGrid>
      </Section>
      <OrderNowSection />
      <Section tight>
        <h3>Variants</h3>
        <ProductsGrid>
          <ProductsCard
            title="Genesis - Tasmanian Oak"
            // description="$2,800"
            href=""
            alt=""
            src={imageTasOakMain}
            srcHover={imageTasOakPower1}
          />
          <ProductsCard
            title="Genesis - Walnut"
            // description="$2,800"
            href=""
            alt=""
            src={imageWalnutMain}
            srcHover={imageWalnutPower1}
          />
          <ProductsCard
            title="Genesis - Blackwood"
            // description="$2,800"
            href=""
            alt=""
            src={imageBlackwoodMain}
            srcHover={imageBlackwoodPower1}
          />
        </ProductsGrid>
      </Section>
    </div>
  );
};

export default Page;
