import React from "react";
import { Store } from "../store/Store";
import ProjectCard from "../components/ProjectCard";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
const portfolioData = Store.portfolio;

const Portfolio = () => {
  let cards = [];
  for (let i = 0; i < portfolioData.length; i++) {
    let project = portfolioData[i];
    if (i % 2 === 0) {
      cards.push(<div className="w-100 d-none d-sm-block d-md-none" />);
      cards.push(<div className="w-100 d-none d-md-block d-lg-none" />);
      if (i % 4 === 0) {
        cards.push(<div classNames="w-100 d-none d-lg-block d-xl-none" />);
      }
    }
    cards.push(
      <ProjectCard
        title={project.title}
        image={project.image}
        description={project.description}
        demo={project.demo}
        github={project.github}
      />
    );
  }

  return (
    <div className="page">
      <h1 className="heavy mb-4">Portfolio</h1>
      <div className="container">
        <div className="card-deck">{cards}</div>
      </div>
    </div>
  );
};

export default Portfolio;
