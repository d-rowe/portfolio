import React from "react";
import "./style.css";

const ProjectCard = ({ title, description, image, demo, github }) => {
  const githubLink = github ? (
    <a href={github} className="card-link">
      <i class="fab fa-github" /> GitHub
    </a>
  ) : null;
  return (
    <div
      className="card shadow"
      style={{
        maxWidth: 20 + "rem",
        minWidth: 15 + "rem",
        marginBottom: "2em"
      }}
    >
      <img className="card-img-top shadow-sm" src={image} alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer">
        <a href={demo} className="card-link">
          <i class="fas fa-external-link-alt" /> Demo
        </a>
        {githubLink}
      </div>
    </div>
  );
};

export default ProjectCard;
