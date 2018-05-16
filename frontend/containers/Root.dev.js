// import PropTypes from 'prop-types';
import React from 'react';

// import AppContainer from './AppContainer.js';
// import DevTools from './DevTools';
import './../../public/index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectsContainer from './ProjectsContainer';

export default function Root() {
  return (
    <div>
      <Header />
      <ProjectsContainer />
      <Footer />
    </div>
  );
}

Root.propTypes = {
};
