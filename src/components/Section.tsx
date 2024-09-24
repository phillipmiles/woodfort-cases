import ContentPadding from './ContentPadding';
import ContentWidth from './ContentWidth';
import s from './Section.module.css';

interface Props {
  children: React.ReactNode;
  narrow?: boolean;
  comfort?: boolean;
  primary?: boolean;
  tight?: boolean;
  soft?: boolean;
  center?: boolean;
  callout?: boolean;
}

const Section = ({
  children,
  narrow,
  comfort,
  callout,
  tight,
  primary,
  soft,
  center,
}: Props) => {
  return (
    <ContentPadding
      className={`
        ${s.container} 
        ${comfort ? s.comfort : ''} 
        ${tight ? s.tight : ''}
        ${primary ? s.primary : ''}
        ${soft ? s.soft : ''}
        ${center ? s.center : ''}
        ${callout ? s.callout : ''}
      `}
    >
      <ContentWidth narrow={narrow}>{children}</ContentWidth>
    </ContentPadding>
  );
};
export default Section;
