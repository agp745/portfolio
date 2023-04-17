import '../css/Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';



export const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
    //   emailjs.sendForm(import.meta.env.EMAILJS_SERVICE_ID, import.meta.env.EMAILJS_TEMPLATE_ID, form.current, import.meta.env.EMAILJS_PUBLIC_KEY)
      emailjs.sendForm('service_9itgn6p', 'template_6x54f59', form.current, 'rXVK1BpAkVo5rXcP7')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
    };
  
    return (
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    );
  };

  export default Contact