import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="header">
        <h1>Braden's Portfolio</h1>
        <p>
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque omnis
          beatae facilis, modi quia libero veniam repellat placeat, natus saepe
          fugiat optio quo error obcaecati impedit consectetur in fuga nam?
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
