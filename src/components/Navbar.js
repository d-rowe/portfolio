import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import $ from 'jquery';
import './style.css';

const Navbar = props => {
  const getPageClass = pageName => {
    if ('/' + pageName === props.location.pathname) {
      return 'navbar-item active';
    } else {
      return 'navbar-item';
    }
  };

  const navLink = name => {
    const lowerName = name.toLowerCase();
    const path = lowerName === 'home' ? '' : lowerName;
    return (
      <li
        className={getPageClass(path)}
        // Collapse navbar dropdown on li click
        onClick={() => {
          $('#navbarNavDropdown').collapse('hide');
        }}
      >
        <Link to={'/' + path} className='nav-link'>
          {name}
        </Link>
      </li>
    );
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light shadow-sm navbar-fixed-top'>
      <Link className='navbar-brand' to='/'>
        Daniel Rowe
      </Link>
      <button
        className='navbar-toggler collapsed'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavDropdown'
        aria-controls='navbarNavDropdown'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse ' id='navbarNavDropdown'>
        <ul className='navbar-nav'>
          {navLink('Home')}
          {navLink('Portfolio')}
          {navLink('About')}
          {navLink('Contact')}
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
