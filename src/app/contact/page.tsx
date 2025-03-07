import Section from '@/components/Section';
import { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
};

const Page = () => {
  return (
    <Section tight narrow>
      <h1>Contact</h1>
      <p>
        If you&#39;re interested in commissioning a PC case or would like to get
        in touch with me for any other reason then email me at{' '}
        <a href="mailto:contact@woodfort.com.au">contact@woodfort.com.au</a> or
        use the form below.
      </p>
      <p>I look forward to hearing from you.</p>
      <ContactForm />
    </Section>
  );
};

export default Page;
