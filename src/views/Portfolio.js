import React from "react";
import ProjectCard from "../components/ProjectCard";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Portfolio = () => {
  return (
    <div className="page">
      <h1 className="heavy">Portfolio</h1>
      <div className="container">
        <div className="card-deck portfolio-cards">
          <ProjectCard
            title="Artist Map"
            image="https://i.imgur.com/pd6OsBH.jpg"
            description="Explore band gigographies. Created with React, Redux, Node.js, Express, Bootstrap, and Mapbox Gl. Utilizes the Songkick API."
            demo="https://artistmap.herokuapp.com"
            github="https://github.com/d-rowe/ArtistMap"
          />
          <ProjectCard
            title="Polyrhythmic Metronome"
            image="https://i.imgur.com/JBGGaA0.jpg"
            description="Explore the juxtopositian of two time subdivisions at once. Created with React, Two.js, GSAP, and Bulma."
            demo="http://polyrhythm.netlify.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
