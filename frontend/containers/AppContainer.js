import PropTypes from 'prop-types';
import React from 'react';

import './../../public/index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectsContainer from './ProjectsContainer';

const AppContainer = () => (
  <div>
    <Header />
    <ProjectsContainer />
    <Footer />
  </div>
);

AppContainer.propTypes = {
  // name: PropTypes.string,
};

export default AppContainer;
