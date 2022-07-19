import React, { useRef, useState } from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [pending, setPending] = useState(false);
  const form = useRef();

  const notify = () =>
    toast.success("Your message has been successfully sent!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const sendEmail = (e) => {
    e.preventDefault();
    setPending(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID 
      )
      .then(
        (result) => {
          console.log(result.text);
          notify();
          e.target.reset();
          setPending(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
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
            <a
              href="mailto: justmoe23@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              Send an Email
            </a>
          </article>
          <article className="contact__option">
            <GrLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/mohamed-mohamed96/"
              rel="noreferrer"
              target="_blank"
            >
              Connect on LinkedIn
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your e-mail address"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Enter your message here"
            required
          ></textarea>
          <button disabled={pending} type="submit" className="btn btn-primary">{!pending ? "Send Message" : "Message Sending"}</button>
        </form>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default Contact;
