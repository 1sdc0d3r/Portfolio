import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="header">
        <h1>Braden's Portfolio</h1>
        <p>
          {" "}
          This portfolio displays some skills I developed as a Lambda Web
          Development Student. Some of my skills include:
          <br />
          HTML, CSS, SASS, Javascript, React, Redux, NodeJS, Express, SQL, as
          well as testing.
        </p>
      </div>
      <nav>
        <NavLink to="intro">Intro</NavLink>
        <NavLink to="work">Work</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
    </div>
  );
}
