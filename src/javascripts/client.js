import React from 'react';
import { render } from 'react-dom';
import App from './app/App.jsx';



let element = React.createElement(App, {});
render(element, document.querySelector('.container'));

//module.hot.dispose()
if (module.hot) {
    module.hot.accept();
}

