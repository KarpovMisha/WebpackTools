import React from 'react';
import { render } from 'react-dom';
import App from './app/App';

let element = React.createElement(App, {});
render(element, document.querySelector('.container'));