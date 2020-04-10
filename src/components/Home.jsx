import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { TweenMax } from "gsap";
import ParticlesBg from "particles-bg";

export default function Home(props) {
  const topSplit = useRef(null);
  const bottomSplit = useRef(null);

  useEffect(() => {
    const section = document.getElementsByClassName("clicker");
    const handleClickOutside = (evt) => {
      if (section.length && !section[0].contains(evt.target)) {
        return props.history.push("/");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    TweenMax.fromTo(topSplit.current, 0.8, { y: -40 }, { y: 0, delay: 0.2 });
    TweenMax.fromTo(bottomSplit.current, 0.8, { y: 100 }, { y: 0, delay: 0.2 });
  }, []);

  return (
    <div className="home">
      {/* <div className="particles-wrapper">
        <ParticlesBg
          type="lines"
          num={125}
          // color={["#00FFFF", "#476AAE", "#ae47aa"]}
          bg={true}
          className="particles"
        />
      </div> */}
      <div className="header" ref={topSplit}>
        <h1 ref={topSplit}>Braden's Portfolio</h1>
        <p>
          I am a fullstack developer who codes his dreams into reality. I love
          to help others solve their problems in unique solutions and bring
          their dreams into existence.
        </p>
      </div>
      <nav ref={bottomSplit}>
        {/* <NavLink to="intro">Intro</NavLink> */}
        <NavLink to="about">About</NavLink>
        <NavLink to="work">Work</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
    </div>
  );
}
