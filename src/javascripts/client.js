import React from 'react';
import ReactDOM from 'react-dom';
import PhotoList from './app/App.jsx';



ReactDOM.render(
    <PhotoList/>,
   document.querySelector('.container')
);



//let element = React.createElement(App , {});
//render(element, document.querySelector('.container'));

//module.hot.dispose()
if (module.hot) {
    module.hot.accept();
}

