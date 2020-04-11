import React, { useEffect } from "react";
import "./style/App.css";
import { Switch, Route } from "react-router-dom";
import ParticlesBg from "particles-bg";
import Home from "./components/Home";
import Intro from "./components/Intro";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
// import Loader from "./components/Loader";
import useBreakpoint from "./utils/useBreakpoint";

const queries = {
  sm: "(max-width: 450px)",
  md: "(min-width: 451px) and (max-width: 800px)",
  lg: "(min-width: 801px)",
};

function App() {
  // todo change fonts
  // todo click out of component to navigate home (other than X)
  // todo borders in boxses, change grey to lighter gray with black wording, add logic strengths in about me
  // todo darkmode

  const bp = useBreakpoint(queries);

  return (
    <div className="App">
      {/* <div className="overlay"> */}
      <div className="particles-wrapper">
        {bp && (
          <ParticlesBg
            type="lines"
            num={bp.sm ? 25 : bp.md ? 50 : 100}
            // color={["#00FFFF", "#476AAE", "#ae47aa"]}
            bg={true}
            className="particles"
          />
        )}
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
