import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App/App';

ReactDOM.render(
<App/>,
    document.querySelector('.container')
);

if (module.hot) {
    module.hot.accept();
}
