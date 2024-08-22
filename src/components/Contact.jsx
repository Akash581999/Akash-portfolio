// import React from 'react'
import { useRef } from "react";
import "../styles/contact.scss";
import contact from "../../src/assets/lottie/contact.json";
import Lottie from "lottie-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oep5rxr",
        "template_w4qkxc7",
        form.current,
        "sPL4CYCUPjXo77TeP"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the email. Please try again later.");
        }
      );
  };

  return (
    <div id="contact" className="container section">
      <h2 className="title">Get In Touch</h2>
      <div className="contactContainer">
        <div className="contactLeft">
          <div className="contact__img">
            <Lottie animationData={contact} />
          </div>
        </div>
        <div className="contactRight">
          <p>
            Whether you want to contact me, starting a project, have business
            inquiries or just want to say hi, my index is always open so feel
            free to reach out and i will get back to you.
          </p>
          <form onSubmit={sendEmail} ref={form}>
            <input
              type="text"
              name="user_name"
              className="Name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              className="email"
              placeholder="Your Email"
              required
            />
            <textarea
              className="message"
              name="message"
              rows="6"
              placeholder="Your Message"
            ></textarea>
            <div className="submit">
              <button type="submit" value="Send" className="submitBtn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="infoContainer">
        <div className="personalInfo">
          <p>
            <i className="fa-solid fa-paper-plane"></i>akash581999@gmail.com
          </p>
          <p>
            <i className="fa-solid fa-square-phone"></i>9634708314
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/akash-kumar-a40b98126/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <i className="fa-brands fa-linkedin"></i>
              linkedin.com/in/akash-kumar
            </a>
          </p>
          <p>
            <a
              href="https://github.com/Akash581999"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <i className="fa-brands fa-github"></i>
              github.com/Akash581999
            </a>
          </p>
        </div>
        <div className="cvButton">
          <a
            className="btn"
            href="https://drive.google.com/file/d/1wJ7fHuJhVBHnTFIE74yGHrFg3uzRHpKE/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
