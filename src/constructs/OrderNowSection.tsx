import LinkButton from '@/components/LinkButton';
import Section from '@/components/Section';
import s from './OrderNowSection.module.css';

const OrderNowSection = () => {
  return (
    <Section narrow comfort center primary>
      <h2 className={s.title}>Order now</h2>
      <p>
        Woodfort cases are made to order and may be scheduled for production
        months in advance. Enquire below to secure the next available space.
      </p>
      <LinkButton href="/contact" invert className={s.cta}>
        Enquire
      </LinkButton>
    </Section>
  );
};
export default OrderNowSection;
