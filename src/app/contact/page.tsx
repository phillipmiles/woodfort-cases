import s from './page.module.css';
import EmailForm from '@/components/EmailForm';
import Section from '@/components/Section';

const Page = () => {
  return (
    <Section tight narrow>
      <h1>Contact</h1>
      <p>
        If you're interested in comissioning one of my PC cases or would like to
        get in touch with me for any other reason then email me at{' '}
        <a href="mailto:contact@woodfort.com.au">contact@woodfort.com.au</a> or
        use the form below.
      </p>
      <p>I look forward to hearing from you.</p>
      <EmailForm className={s.form} />
    </Section>
  );
};

export default Page;
