import React from 'react'
import './Contact.css'
import { HiOutlineMail } from "react-icons/hi";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const send = () => toast(" Message Sent");
  //emailjs
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_k3udfq5', '2711', form.current, {
      publicKey: 'YsBRDovdzib2FVwCh',
    })
    e.target.reset()
  }
// end of emailjs
  
  return (
     <section id="contact">
 <h5>Get In Touch</h5>
 <h2>Contact Me</h2>

 <div className="container contact_container">
  <div data-aos="fade-up-right" className="contact-options">
    <article  className="contact-option">
      <HiOutlineMail className='icon'/>
      <h4>Email</h4>
      <small>ibrahimjamiuwebdev@gmail.com</small>
      <a href="mailto:ibrahimjamiuwebdev@gmail.com"  target='_blank'>send a message</a>
    </article>

    <article className="contact-option">
      <BsTwitterX className='icon'/>
      <h4>X (Twitter)</h4>
      <a href="https://www.x.com/ibrahim_webdev"  target='_blank'>send a message</a>
    </article>

    <article className="contact-option">
      < FaWhatsapp className='icon'/>
      <h4>+234 7032331829</h4>
      <a href="https://wa.me/+2347032331829" target='_blank'>send a message</a>
    </article>
  </div>
  {/* End of contact options */}
  <div>
  <form data-aos="fade-up-left" ref={form} onSubmit={sendEmail}>
    <input type="text" name='name' placeholder='Your Full Name' required />
    <input type="email" name='email' placeholder='Your Email' required />
    <textarea name="message" rows={10} placeholder='Your Message' required></textarea>
    <button  type='submit' className='btn btn-primary'onClick={send} >send message</button>
    <ToastContainer />
  </form>
  </div>
 </div>
     </section>
    
  )
}

export default Contact