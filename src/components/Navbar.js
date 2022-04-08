import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


export default function Navbar(props) {
  // Setting HTML theme
  let themeMode = 'light';
  if (props.isDarkMode) {
    themeMode='dark';
  };
  return (
    <nav className={`navbar navbar-expand-lg navbar-${themeMode} bg-${themeMode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.brandTxt}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">{props.homeTxt}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutTxt}</Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="isDarkMode" onChange={props.toggleDarkMode}/>
              <label className="form-check-label" htmlFor="isDarkMode">Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
  )
};

Navbar.propTypes = {
  brandTxt: PropTypes.string.isRequired,
  homeTxt: PropTypes.string.isRequired,
  aboutTxt: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  brandTxt: 'TexUtils',
  homeTxt: 'Home',
  aboutTxt: 'About Us'
};