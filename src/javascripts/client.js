import React from 'react';
import ReactDOM from 'react-dom';
//import App from './app/PhotoInstagram';
//import App from './app/twitterLenta';
import App from './app/facebookNews';



ReactDOM.render(
<App/>,
    document.querySelector('.container')
);



//let element = React.createElement(App , {});
//render(element, document.querySelector('.container'));

//module.hot.dispose()
if (module.hot) {
    module.hot.accept();
}
