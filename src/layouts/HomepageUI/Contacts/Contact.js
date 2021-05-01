import React, { useEffect, useState } from "react";
import RightTitle from "../../../utils/RightTitle/RightTitle";
import Title from "../../../utils/Title/Title";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
// import {MdTele} from "react-icons/md"
import "./style.css";

function Contact() {
  const [visible, setVisible] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const options = { rootMargin: "-200px" };
    const contact = document.querySelector("#contact");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        setVisible(entry.isIntersecting);
      });
    }, options);

    observer.observe(contact);
  }, [visible]);

  useEffect(() => {
    const options = { rootMargin: "-200px" };
    const contactWrapper = document.querySelectorAll(".contact__wrapper");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        let form = entry.target.childNodes;
        console.log(form);
        form.forEach((child) => {
          child.classList.add("visible");
        });
        // setVisible2(entry.isIntersecting);
      });
    }, options);

    contactWrapper.forEach((item) => {
      observer.observe(item);
    });
  }, [visible]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <section id="contact" className="contact">
      {visible && (
        <>
          <Title
            theme="title"
            category="contact"
            title="Get in touch today"
            subtitle="feel free to contact me any time"
          />
        </>
      )}
      <div className="contact__wrapper">
        <form onSubmit={(e) => onSubmit(e)} className="contact__form">
          <div className="form__group">
            <input
              type="text"
              value={name}
              name="name"
              required
              aria-autocomplete="false"
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name..."
            />
            <input
              type="email"
              value={email}
              name="email"
              required
              autoComplete="false"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Fancy Email Address..."
            />
          </div>
          <textarea
            value={message}
            name="message"
            required
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter Message Here..."
            rows="10"
          />
          <button className="btn-secondary" type="submit">
            send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
