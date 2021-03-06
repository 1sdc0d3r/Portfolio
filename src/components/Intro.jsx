import React from "react";
import { Link } from "react-router-dom";
import profileImg from "../images/profile_psudo.jpg";

export default function Intro() {
  return (
    <div className="intro clicker">
      <div className="top">
        <h2>Intro</h2>
        <Link to="/">X</Link>
      </div>

      {/* // todo replace profile img */}
      <div className="bottom">
        <img src={profileImg} alt="" />
        <p>
          I am a fullstack developer who codes his dreams into reality. I love
          to help others solve their problems in unique solutions and bring
          their dreams into existence.
        </p>
      </div>
    </div>
  );
}
