import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.jsx';


ReactDOM.render(
    <App text="Instagram photo"/>,
    document.querySelector('.container')
);



//let element = React.createElement(App , {});
//render(element, document.querySelector('.container'));

//module.hot.dispose()
if (module.hot) {
    module.hot.accept();
}

