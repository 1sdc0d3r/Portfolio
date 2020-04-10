import React from "react";
import { Link } from "react-router-dom";
import coffee from "../images/coffee.jpg";

export default function Work() {
  return (
    <div className="work clicker">
      <div className="top">
        <h2>Work</h2>
        <Link to="/">X</Link>
      </div>
      <div className="bottom">
        <img src={coffee} alt="" />
        <p>
          Here are a few of my projects I completed:{"  "}
          <a
            href="https://space-x.bradenbell.now.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Space X
          </a>
          ,{"  "}
          <a
            href="https://nasa-photo-of-the-day.bradenbell.now.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Photo of the Day
          </a>
          ,{"  "}
          <a
            href="https://todo-list.bradenbell.now.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Todo List
          </a>
          , and {"  "}
          <a
            href="https://baseball-scoreboard.bradenbell.now.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Baseball Scoreboard.
          </a>
          {"  "}
          If you see anything that interests you, or have any additional
          questions please send a <Link to="/contact">message.</Link>
          <br />
          <br />
          My skills include, but not limited to: HTML, CSS, SASS, SCSS,
          Javascript, React, Responsive Design, Redux, NodeJS, Express, SQLite,
          Postgres, Git, and testing.
        </p>
      </div>
    </div>
  );
}
