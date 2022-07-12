import React from "react";
import "./Contact.css";
import { MdOutlineEmail, MdOutlineMessage } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lzpncxp",
        "template_06p6px3",
        form.current,
        "xA8ms5ehCIw57EnPm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5></h5>
      <h2></h2>
      <div className="container contact__container ">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5></h5>
            <a href="mailto:mcubedoff@gmail.com" target="blank">
              {" "}
              Send a Meassge
            </a>
          </article>
          <article className="contact__option">
            <MdOutlineMessage className="contact__option-icon" />
            <h4>instagram</h4>
            <h5></h5>
            <a href="" target="blank">
              {" "}
              Follow Us
            </a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5></h5>
            <a href="https://api.whatsapp.com/send?phone+" target="blank">
              {" "}
              Send a Meassge
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
          ></input>
          <textarea
            name="message"
            rows="6"
            placeholder="Write Your Message Here"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Submit Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
