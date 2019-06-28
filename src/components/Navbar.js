import React from "react";
import { Link, withRouter } from "react-router-dom";

const Navbar = props => {
  const getPageClass = pageName => {
    if ("/" + pageName === props.location.pathname) {
      return "navbar-item active";
    } else {
      return "navbar-item";
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
      <a className="navbar-brand" href="/">
        Daniel Rowe
      </a>
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse " id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className={getPageClass("")}>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className={getPageClass("portfolio")}>
            <Link to="/portfolio" className="nav-link">
              Portfolio
            </Link>
          </li>
          <li className={getPageClass("interests")}>
            <Link to="/interests" className="nav-link">
              Interests
            </Link>
          </li>
          <li className={getPageClass("contact")}>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
