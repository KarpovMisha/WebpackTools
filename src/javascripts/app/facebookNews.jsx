import React, {Component} from 'react';
import {} from 'stylesheets/main.scss';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    loadFacebook() {
        window.fbAsyncInit = function() {
            FB.init({
                appId      : '1824715864406732',
                xfbml      : false,
                version    : 'v2.8'
            });
            FB.api(
                "/me/feed",
                function (response) {
                    if (response && !response.error) {
                        alert('123');
                       console.log(response);
                    }
                }
            );
        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk/debug.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    componentDidMount() {
        this.loadFacebook();
        //setInterval(this.loadInstagram, 10000);
    }

    render() {

        return (
            <div>
                <div className="row">
                    <h1>Facebook</h1>

                </div>
            </div>
        );
    }
}


export default App;