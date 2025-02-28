'use server';

export interface EmailPayload {
  name: string;
  email: string;
  message: string;
}

export async function emailMessage(payload: EmailPayload) {
  const ACCESS_KEY = process.env.WEB_3_FORMS_ACCESS_KEY;

  if (!payload.name) throw 'Please provide a name.';
  if (!payload.email)
    throw 'Please provide an email address that I can respond to.';
  if (!payload.message) throw 'Please provide a message';

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      name: payload.name,
      email: payload.email,
      message: payload.message,
    }),
  });
  const result = await response.json();
  return result;
}
