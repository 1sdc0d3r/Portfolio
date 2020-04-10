import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import clickHandler from "../utils/clickHandlers";
import profileImg from "../images/profile_psudo.jpg";

export default function About(props) {
  return (
    <div className="about clicker">
      <div className="top">
        <h2>About</h2>
        <Link to="/">X</Link>
      </div>
      <div className="bottom">
        <img src={profileImg} alt="" />
        <p>
          {" "}
          I am a developer who strives to evolve daily. One of my life goals is
          to become a professional bass fisherman. The knowledge I obtain every
          day guides me closer to transcendence. I love being a source of color
          in a binary world.
        </p>
      </div>
    </div>
  );
}

// I love to see the ecstatic looks on others faces when I allow  their dreams to become reality. I code my own happiness into my life on a daily. Interested in my philosophy? Checkout my <Link to="/work"> awesome work!</Link>

// I create my own happiness on a daily by helping others

// I am a fullstack developer who codes his dreams into reality. I love to help others solve their problems in unique solutions and bring their dreams into existence.
