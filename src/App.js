import React from "react";
import "./style/App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Intro from "./components/Intro";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <div className="overlay">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/intro" component={Intro} />
          <Route path="/work" component={Work} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
