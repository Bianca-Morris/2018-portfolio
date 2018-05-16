import React from 'react';
// import PropTypes from 'prop-types';

const Header = () => (
  <nav className="navbar navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#top-nav">
          <i className="fa fa-bars" />
        </button>
        <a className="navbar-brand" href="#splash-page">Bianca-Morris.com</a>
      </div>
      <div>
        <div className="collapse navbar-collapse navbar-right" id="top-nav">
          <ul className="nav navbar-nav">
            <li><a href="/#about-page">About</a></li>
            <li><a href="/#portfolio-page">Portfolio</a></li>
            <li><a href="/#contact-page">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
);

Header.propTypes = {
};


export default Header;
