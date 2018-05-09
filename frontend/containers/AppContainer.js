import PropTypes from 'prop-types';
import React from 'react';
import Title from '../components/Title';

const AppContainer = ({ name }) => {
    return (
        <div>
            <Title name={name} />
        </div>
    );
};

AppContainer.propTypes = {
    name: PropTypes.string,
};

export default AppContainer;
