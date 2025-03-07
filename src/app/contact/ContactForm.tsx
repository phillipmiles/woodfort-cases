'use client';

import s from './page.module.css';
import EmailForm from '@/components/EmailForm';
import { emailMessage } from './actions';
import { EmailPayload } from '@/app/contact/actions';
import { useState } from 'react';
import { IconAlertTriangle } from '@/icons/icons';

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formError, setFormError] = useState(false);
  const [recipientEmail, setRecipientEmail] = useState('');
  const [recipientName, setRecipientName] = useState('');

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };
    const payload: EmailPayload = {
      name: formElements.name.value,
      email: formElements.email.value,
      message: formElements.message.value,
    };

    setFormSubmitting(true);

    try {
      const response = await emailMessage(payload);

      console.log(response);

      if (response.success) {
        setRecipientEmail(payload.email);
        setRecipientName(payload.name);
        setFormSubmitting(false);
        setFormSubmitted(true);
      } else {
        setFormError(true);
      }
    } catch (error) {
      setFormError(true);
    }
  };

  if (formSubmitted)
    return (
      <div className={s.successContainer}>
        <h3>Your message has been sent!</h3>
        <p>
          Thank you {recipientName}. I will respond to you at{' '}
          <strong>{recipientEmail}</strong> as soon as I am able to.
        </p>
      </div>
    );

  return (
    <>
      {!formError ? (
        <EmailForm
          className={s.form}
          onSubmit={handleSubmit}
          loading={formSubmitting}
          error={formError}
        />
      ) : (
        <div className={s.errorContainer}>
          <span
            style={{
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '48px',
              width: '48px',
              color: 'red',
            }}
          >
            <IconAlertTriangle />
          </span>
          <h3>Woops! Something went wrong.</h3>
          <p>
            Something I didn&#39;t account for happened when submitting your
            message. I&#39;d very much like to hear from you though so could you
            please email me directly at{' '}
            <a href="mailto:contact@woodfort.com.au">contact@woodfort.com.au</a>{' '}
            instead.
          </p>
          <p>Sorry for the hassle.</p>
        </div>
      )}
    </>
  );
};

export default ContactForm;
