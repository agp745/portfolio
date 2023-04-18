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
      <form ref={form} onSubmit={sendEmail} className="contact-field" id="contact">
        <section className='contact-wrapper'>
          <h1 className='contact-subheader'>Contact Me</h1>
          <label>Name</label>
          <input type="text" name="user_name" placeholder='Mary Doe'/>
          <label>Email</label>
          <input type="email" name="user_email" placeholder='example@email.com'/>
          <label>Message</label>
          <textarea name="message" placeholder='"Hello!"'/>
          <input type="submit" value="Send"/>
        </section>
      </form>
    );
  };

  export default Contact