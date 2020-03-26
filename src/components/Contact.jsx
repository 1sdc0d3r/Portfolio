import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import * as emailjs from "emailjs-com";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const onChangeHandler = evt => {
    setData({
      ...data,
      [evt.target.name]: evt.target.value
    });
  };

  const onSubmitHandler = evt => {
    evt.preventDefault();

    const templateParams = {
      subject: "Portfolio Contact",
      to_name: "Braden",
      from_name: data.name,
      message_html: data.message
    };

    emailjs.send(
      "gmail",
      "template_SswCjIcl",
      templateParams,
      "user_vhx6Zrv5irvL2nLhnctr5"
    );

    resetHandler();
  };

  const resetHandler = () => {
    setData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="contact">
      <div className="top">
        <h2>Contact</h2>
        <Link to="/">X</Link>
      </div>
      {/* //todo FORM ACTION */}
      <form onSubmit={onSubmitHandler}>
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={data.name}
          onChange={onChangeHandler}
        />

        <label for="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={data.email}
          onChange={onChangeHandler}
        />

        <label for="message">Message</label>
        <textarea
          name="message"
          id="message"
          rows="6"
          value={data.message}
          onChange={onChangeHandler}
        />
        <div className="actions">
          <input type="submit" value="Send Message" />
          <input type="reset" value="Reset" onClick={() => resetHandler} />
        </div>
      </form>

      <div className="icons">
        <SocialIcon url="https://github.com/1sdc0d3r" />
        <SocialIcon url="https://twitter.com/BradenBell19" />
        <SocialIcon url="https://www.linkedin.com/in/braden-bell-73b168165/" />
      </div>
    </div>
  );
}
