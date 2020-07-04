import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="mb-1 navbar navbar-expand-lg navbar-dark primary-color">
        <span className="navbar-brand" href="#">
          <Link to="/" className="nav-link" style={{ color: "white" }}>
            Contact Manager
          </Link>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-333"
          aria-controls="navbarSupportedContent-333"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent-333"
        >
          <ul className="navbar-nav ml-auto nav-flex-icons">
            <li className="nav-item">
              <span className="nav-link waves-effect waves-light">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home"></i>
                  Home
                </Link>
              </span>
            </li>

            <li className="nav-item">
              <span className="nav-link waves-effect waves-light">
                <Link to="/addcontact" className="nav-link">
                  <i className="fas fa-user-plus"></i>
                  Add
                </Link>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link waves-effect waves-light">
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

Header.defaultProps = {
  branding: "My App",
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

export default Header;
