import { component$, $, useStore } from '@builder.io/qwik';
import emailjs from '@emailjs/browser';

export default component$(() => {
  const formStore = useStore({
    name: '',
    email: '',
    message: '',
  });

  const sendEmail = $(async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formStore,
        'YOUR_USER_ID'
      );
      console.log(response.text);
    } catch (error) {
      console.log(error.text);
    }
  });

  return (
    <form onSubmit$={sendEmail}>
      <input
        type='text'
        name='name'
        value={formStore.name}
        onInput$={(e) => (formStore.name = e.target.value)}
      />
      <input
        type='email'
        name='email'
        value={formStore.email}
        onInput$={(e) => (formStore.email = e.target.value)}
      />
      <textarea
        name='message'
        value={formStore.message}
        onInput$={(e) => (formStore.message = e.target.value)}
      />
      <button type='submit'>Send</button>
    </form>
  );
});
