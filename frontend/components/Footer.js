import React from 'react';
// import PropTypes from 'prop-types';

const Footer = () => (
  <footer className="footer">
    <div className="container-fluid" id="social-media">
      <div className="row">
        <div className="col-sm-6">
          <h3>About This Page</h3>
          <p>Made with HTML, CSS, Bootstrap (w/FontAwesome), and React by Bianca Allyn Morris.</p>
        </div>
        <div className="col-sm-6 text-center">
          <h3>Find Me on the Web</h3>
          <a href="https://www.linkedin.com/in/biancamorris">
            <div className="socialdot">
              <i className="fa fa-linkedin fa-2x" />
            </div>
          </a>
          <a href="https://twitter.com/biancaamorris">
            <div className="socialdot">
              <i className="fa fa-twitter fa-2x" />
            </div>
          </a>
          <a href="https://www.youtube.com/channel/UCyhWTIAHinK5SeM_6izJcRw">
            <div className="socialdot">
              <i className="fa fa-youtube-play fa-2x" />
            </div>
          </a>
          <a href="https://github.com/bianca-morris">
            <div className="socialdot">
              <i className="fa fa-github fa-2x" />
            </div>
          </a>
          <a href="https://www.freecodecamp.com/bianca-morris">
            <div className="socialdot">
              <i className="fa fa-fire fa-2x" />
            </div>
          </a>
        </div>
      </div>
    </div>
    <div className="container-fluid" id="copyright">
      <h4>
        Bianca Allyn Morris
        <i className="fa fa-copyright" />
        2018. All Rights Reserved.
      </h4>
    </div>
  </footer>
);

Footer.propTypes = {
};


export default Footer;
