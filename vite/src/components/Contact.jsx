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
      <section id="contact">

      <form ref={form} onSubmit={sendEmail} className="contact-field">
        <section className='contact-wrapper'>
          <h1 className='contact-subheader'>Contact Me</h1>
          <label className='contact-label'>Name</label>
          <input type="text" name="user_name" placeholder='Mary Doe' className='inputbox'/>
          <label className='contact-label'>Email</label>
          <input type="email" name="user_email" placeholder='example@email.com' className='inputbox'/>
          <label className='contact-label'>Message</label>
          <textarea name="message" placeholder='"Hello!"' className='textarea'/>
          <input type="submit" value="Send" className='contact-button'/>
        </section>
      </form>

      </section>
    );
  };

  export default Contact