import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {GrLinkedin} from 'react-icons/gr'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0dp26d5', 'template_eamymoj', form.current, 'af4aQI-y-G_MtnNzm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
    alert("Successfully sent!")
  };
  return (
    <section id="contact">
      <h5>Connect with</h5>
      <h2>Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <a href="mailto: justmoe23@gmail.com" target="_blank">Send an Email</a>
          </article>
          <article className="contact__option">
            <GrLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/mohamed-mohamed96/" target="_blank">Connect on LinkedIn</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Enter your full name" required />
          <input type="email" name="email" placeholder="Enter your e-mail address" required />
          <textarea name="message" rows="7" placeholder="Enter your message here" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact