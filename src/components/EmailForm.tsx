'use client';

import s from './EmailForm.module.css';
import { useState } from 'react';
import InputText from './InputText';
import InputTextArea from './InputTextArea';
import Button from './Button';

interface Props {
  className: string;
}

const EmailForm = ({ className }: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className={`${className} ${s.container}`}>
      <div className={s.fields}>
        <InputText
          type="text"
          placeholder="Name"
          id="form_name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <InputText
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <InputTextArea
          className={s.message}
          id="message"
          placeholder="Write your message"
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          rows={5}
        ></InputTextArea>
      </div>
      <Button>Send</Button>
    </div>
  );
};
export default EmailForm;
