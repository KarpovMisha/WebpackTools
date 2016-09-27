import React, {Component} from 'react';

import {} from 'stylesheets/main.scss';


class App extends React.Component {

    render() {
        return (
            <div className="title">
                <h1>{this.props.text}</h1>
            </div>
        );
    }
}


export default App;