import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';

import './assets/stylesheets/base.scss';

render(
    <Root history={history} />,
    document.getElementById('root')
);
