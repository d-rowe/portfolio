import React from "react";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Landing = () => {
  return (
    <div className="fullcenter">
      <h1 className="heavy">Daniel Rowe</h1>
      <h3 className="light">front end developer</h3>
      <div>
        <a href="https://github.com/d-rowe">
          <span className="fab fa-github-square socLink" />
        </a>
        <a href="https://www.linkedin.com/in/daniel-rowe-b109a6180/">
          <span className="fab fa-linkedin socLink" />
        </a>
      </div>
    </div>
  );
};

export default Landing;
