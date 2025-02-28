'use client';

import s from './EmailForm.module.css';
import { FormEventHandler, useState } from 'react';
import InputText from './InputText';
import InputTextArea from './InputTextArea';
import Button from './Button';

interface Props {
  className: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
  loading: boolean;
  error: boolean;
}

const EmailForm = ({ className, onSubmit, loading, error }: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form className={`${className} ${s.container}`} onSubmit={onSubmit}>
      <div className={s.fields}>
        <InputText
          type="text"
          placeholder="Name"
          id="name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
          }}
          disabled={loading}
          required
        />
        <InputText
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          disabled={loading}
          required
        />
        <InputTextArea
          className={s.message}
          id="message"
          placeholder="Write your message"
          name="message"
          value={message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setMessage(e.target.value);
          }}
          rows={5}
          disabled={loading}
          required
        ></InputTextArea>
      </div>
      <Button type="submit" disabled={loading}>
        Send
      </Button>
      {/* {error && (
        <div className={s.errorContainer}>
          <p>
            Woops! Something that I didn&#39;t account for went wrong when
            submitting your message.
          </p>
          <p>
            I very much would love to hear from you. Could you please email me
            directly at{' '}
            <a href="mailto:contact@woodfort.com.au">contact@woodfort.com.au</a>{' '}
            instead.
          </p>
          <p>Sorry for the hassle.</p>
        </div>
      )} */}
    </form>
  );
};
export default EmailForm;
