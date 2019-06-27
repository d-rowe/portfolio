import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar links={["Home", "Portfolio", "Interests", "Contact"]} />
      <Landing />
    </div>
  );
}

export default App;
