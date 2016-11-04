 import React, {Component} from 'react';
import {} from 'stylesheets/main.scss';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    loadInstagram() {
        $.ajax({
            url: "https://api.twitter.com/1.1/statuses/home_timeline.json",
            type: "GET",
            dataType: "jsonp",
            headers: {
                "Authorization": "OAuth oauth_consumer_key=OTkeMB1IkOQHvTs0CMCAVDI6",
                "oauth_nonce": "a0e58268b271518cd75105655ee53438",
                "oauth_signature": "1oIfeHnbU/gBmH8inR4D2TXo7TE=",
                "oauth_signature_method": "HMAC-SHA1",
                "oauth_timestamp": "1476185484",
                "oauth_token":"785371126188896256-pdYaEnLtDotBkJOuJGuKmSv3KtYelB2",
                "oauth_version": "1.0"
            },

            success: function (data) {
                console.log(data);
            },
            error: function () {
                console.log('error');
            }
        })


    }

    componentDidMount() {
        this.loadInstagram();
        //setInterval(this.loadInstagram, 10000);
    }

    render() {

        return (
            <div>
                <div className="row">
                    <h1>photo</h1>

                </div>
            </div>
        );
    }
}


export default App;
