import ProductsGrid from '@/components/ProductsGrid';
import Section from '@/components/Section';
import ProductsCard from '@/constructs/ProductsCard';
import Link from 'next/link';

import imageTasOakMain from '../../../../public/images/genesis/tasoak/main_tasoak.jpg';
import imageBlackwoodMain from '../../../../public/images/genesis/blackwood/main_blackwood.jpg';
import imageWalnutMain from '../../../../public/images/genesis/walnut/main_walnut.jpg';
import imageTasOakPower1 from '../../../../public/images/genesis/tasoak/power1_tasoak.jpg';
import imageBlackwoodPower1 from '../../../../public/images/genesis/blackwood/power1_blackwood.jpg';
import imageWalnutPower1 from '../../../../public/images/genesis/walnut/power1_walnut.jpg';

import SpecsCell from '@/components/SpecsCell';
import SpecsCellTitle from '@/components/SpecsCellTitle';
import SpecsGrid from '@/components/SpecsGrid';
import OrderNowSection from '@/constructs/OrderNowSection';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      {children}
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
    </div>
  );
};
export default Layout;
