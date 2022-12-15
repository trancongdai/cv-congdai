import React from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useState } from "react";
import { themeContext } from "../../Context";
import { useContext } from "react";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hofg85p",
        "template_04jl2vj",
        form.current,
        "rkrp0hKkFFxVlaJJS"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : " " }}>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur c-blur2"
            style={{ background: "#abf1ff94", width: "21rem", height: "11rem" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            cols="30"
            rows="10"
          ></textarea>
          <input type="submit" value="send" className="button" />
          <span>{done && "Thank for contact me!"}</span>
          <div
            className="blur c-blur1"
            style={{
              background: "var(--purple)",
              width: "25rem",
              height: "19rem",
            }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
