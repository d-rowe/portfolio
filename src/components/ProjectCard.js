import React from "react";

const ProjectCard = ({ title, description, image, demo, github }) => {
  const githubLink = github ? (
    <a href={github} class="card-link">
      GitHub
    </a>
  ) : null;
  return (
    <div className="card shadow">
      <img className="card-img-top shadow-sm" src={image} alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={demo} class="card-link">
          Demo
        </a>
        {githubLink}
      </div>
    </div>
  );
};

export default ProjectCard;
