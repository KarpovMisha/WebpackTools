import React, {Component} from 'react';
import {} from 'stylesheets/main.scss';

// минификация продакшена js, css
// удаления папки dist (clean webpack plugin)
//  webpack hot reloader

class App extends Component {

    render() {
        return (
                <div className="row">
                    <div className="col-lg-6"><h1>hello</h1></div>
                    <div className="col-lg-6"><h2>World</h2></div>
                </div>
        );
    }
}

export default App;