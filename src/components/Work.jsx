import React from "react";
import { Link } from "react-router-dom";
import coffee from "../images/coffee.jpg";

export default function Work() {
  return (
    <div className="work">
      <div className="top">
        <h2>Work</h2>
        <Link to="/">X</Link>
      </div>

      <img src={coffee} alt="" />
      <p>
        <a href="https://space-x.bradenbell.now.sh/">Space X</a>,{"  "}
        <a href="https://nasa-photo-of-the-day.bradenbell.now.sh/">
          Photo of the Day
        </a>
        ,{"  "}
        <a href="https://todo-list.bradenbell.now.sh/">Todo List</a>, and {"  "}
        <a href="https://baseball-scoreboard.bradenbell.now.sh/">
          Baseball Scoreboard
        </a>{" "}
        are just a few of my projects I have completed.{"  "}
        If you see anything that interests you, or have any additional questions
        please send me a <Link to="/contact">message.</Link>
      </p>
    </div>
  );
}
