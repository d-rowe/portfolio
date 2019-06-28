import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Portfolio from "./views/Portfolio";
import Contact from "./views/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
