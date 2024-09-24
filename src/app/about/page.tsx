import Banner from '@/components/Banner';
import Section from '@/components/Section';
import HeroCard from '@/components/HeroCard';
import HeroCardContent from '@/components/HeroCardContent';
import HeroCardImage from '@/components/HeroCardImage';
import s from './page.module.css';

import imageSanding from '../../../public/images/wip_sanding_alt_blackwhite.jpg';
import imageCloseup from '../../../public/images/wip_closeup_blackwhite.jpg';
import imagePrototype from '../../../public/images/prototype_blackwhite.jpg';

const Page = () => {
  return (
    <div>
      <Banner src={imageSanding} alt="" />
      <Section comfort>
        <HeroCard>
          <HeroCardContent>
            <h1 className={s.heading}>My story</h1>
            <p>
              Woodfort Cases was established by Phillip Miles in 2023 as a
              result of the pressures brought on by the pandemic.
            </p>
            <p>
              Tied to a desk, burnt out, anxious and depressed, Phillip needed
              to step away from the computer screen for a time and find
              something new to reinvigorate him.
            </p>
            <p>
              After some false starts he discovered the joy and satisfaction of
              working with wood.
            </p>
          </HeroCardContent>
          <HeroCardImage
            src={imageCloseup}
            alt="A man sands the wooden slats from the front panel of the Genesis computer case."
          />
        </HeroCard>
      </Section>
      <Section primary tight narrow callout center>
        <p>
          <i>
            Hellbent on avoiding a return to the desk chair, Phillip played with
            possible business ideas until a chance encounter with a photo of a
            custom made wood and metal hybrid computer case locked him on his
            path.
          </i>
        </p>
      </Section>
      <Section comfort>
        <HeroCard>
          <HeroCardImage src={imagePrototype} alt="" size="small" />
          <HeroCardContent>
            <p>
              Hellbent on avoiding a return to the desk chair, Phillip played
              with possible business ideas until a chance encounter with a photo
              of a custom made wood and metal hybrid computer case locked him on
              his path.
            </p>
            <p>
              The refreshing look brought a quiet elegance to the case which had
              been lacking in the current trend of busy RGB infused boxes.
            </p>
            <p>
              The idea of marrying his old world working in tech and his new
              world of working with wood fit perfectly to him. Inspired, he got
              to work, desperately hoping a market would exist for premium, hand
              crafted computer cases.
            </p>
            <p>
              After sharing a prototype online to good reception he would then
              go on to spend a further 9 months honing his skills and refining
              his process until he was satisfired with the quality of his work.
            </p>
            <p>Finally, in May 2023, Woodfort Cases was launched.</p>
          </HeroCardContent>
        </HeroCard>
      </Section>
      <Section comfort narrow>
        <h2>My process</h2>
        <p>
          My cases consist of handmade wooden panels mounted on an{' '}
          <a href="https://nzxt.com/en-AU/product/h7-flow" target="_blank">
            NZXT H7 Flow cases
          </a>{' '}
          which provides the internal aluminium frame for the case.
        </p>
        <p>
          Solid hardwood, plywood, aluminium, steel and some epoxy resin are
          used to produce the case panels. The wood is finished with a hard
          varnish rated to protect the wood from heat up to 120&deg;C or
          248&deg;F and leaves a satin to semi-gloss sheen.
        </p>
        <p>
          The timber I use is a mixture of wood native to Australia as well as
          wood improted from other countries. I try to make cases that only use
          local timber as much as I can but American Walnut is just too good to
          not use.
        </p>
      </Section>
    </div>
  );
};

export default Page;
