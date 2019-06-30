import React from "react";
import { Store } from "../store/Store";
import ProjectCard from "../components/ProjectCard";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
const portfolioData = Store.portfolio;

const Portfolio = () => {
  return (
    <div className="page">
      <h1 className="heavy">Portfolio</h1>
      <div className="container">
        <div className="card-deck portfolio-cards">
          {portfolioData ? (
            portfolioData.map(project => (
              <ProjectCard
                title={project.title}
                image={project.image}
                description={project.description}
                demo={project.demo}
                github={project.github}
              />
            ))
          ) : (
            <h3 className="light">
              There doesn't appear to be anything here...
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
