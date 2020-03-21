import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Contact() {
  // const onSubmit = evt => {}
  return (
    <div className="contact">
      <div className="top">
        <h2>Contact</h2>
        <Link to="/">X</Link>
      </div>
      {/* //todo FORM ACTION */}
      <form method="post" action="">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" />

        <label for="email">Email</label>
        <input type="text" name="email" id="email" />

        <label for="message">Message</label>
        <textarea name="message" id="message" rows="6"></textarea>
        <div className="actions">
          <input type="submit" value="Send Message" />
          <input type="reset" value="Reset" />
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
