import React from "react";
import "./style/App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Intro from "./components/Intro";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
// import Loader from "./components/Loader";
import ParticlesBg from "particles-bg";
{
  /* "color"
"ball"
"lines"
"thick"
"circle"
"cobweb"
"polygon"
"square"
"tadpole"
"fountain"
"random"
"custom" */
}
function App() {
  // todo add animations (greensock?)
  // todo change fonts
  // todo click out of component to navigate home (other than X)
  // todo borders in boxses, change grey to lighter gray with black wording, add logic strengths in about me
  // todo darkmode

  return (
    <div className="App">
      {/* <div className="overlay"> */}
      <div className="particles-wrapper">
        <ParticlesBg
          type="lines"
          num={125}
          // color={["#00FFFF", "#476AAE", "#ae47aa"]}
          bg={true}
          className="particles"
        />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/intro" component={Intro} />
          <Route path="/work" component={Work} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
