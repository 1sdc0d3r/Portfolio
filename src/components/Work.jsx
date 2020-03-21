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
        <Link to="https://space-x.bradenbell.now.sh/">Space X</Link>,{"  "}
        //todo LINK BUTTON BACK TO PORTFOLIO IN NASA
        <Link to="https://nasa-photo-of-the-day.bradenbell.now.sh/">
          Photo of the Day
        </Link>
        ,{"  "}
        <Link to="https://todo-list.bradenbell.now.sh/">Todo List</Link>, and{" "}
        {"  "}
        <Link to="https://baseball-scoreboard.bradenbell.now.sh/">
          Baseball Scoreboard
        </Link>{" "}
        are just a few of my projects I have completed.{"  "}
        If you see anything that interests you, or have any additional questions
        please send me a <Link to="/contact">message.</Link>
      </p>
    </div>
  );
}
