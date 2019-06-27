import React from "react";

const Navbar = ({ links }) => {
  const linkList = links.map(link => {
    return (
      <li className="nav-item">
        {/* eslint-disable-next-line */}
        <a className="nav-link" href="#">
          {link}
        </a>
      </li>
    );
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="/">
        Daniel Rowe
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">{linkList}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
