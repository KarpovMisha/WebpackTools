import React, {Component} from 'react';
import {} from 'stylesheets/main.scss';

class Photo extends React.Component {
    render() {
        return (
            <div className="photo">
                <img src={this.props.img}/>
            </div>
        );
    }
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    loadInstagram() {

        var token = '3976132359.575dadc.37f299ea6512452d9bab7b300cbd0b82',
            num_photos = 4;

        $.ajax({
            url: 'https://api.instagram.com/v1/users/self/media/recent',
            dataType: 'jsonp',
            type: 'GET',
            data: {access_token: token, count: num_photos},
            success: function (data) {
                this.setState({data: data.data});
            }.bind(this)
        });

    /*
        superagent
            .get('https://api.instagram.com/v1/users/self/media/recent')
            .send({access_token: 'token', count: num_photos})
            .use(jsonp)
            .set('Accept', 'application/jsonp')
            .end(function (err, res) {
                if (err || !res.ok) {
                    console.log(err);
                } else {
                    alert('yay got ');
                    this.setState({data: res.body});
                }
            });
    */
    }

    componentDidMount() {
        this.loadInstagram();
        //setInterval(this.loadInstagram, 10000);
    }

    render() {
        var photoList = this.state.data.map(function (photo) {
            return (
                <Photo img={photo.images.low_resolution.url}/>
            )
        });
        return (
            <div>
                <div className="row">
                    <h1>photo</h1>
                    {photoList}
                </div>
            </div>
        );
    }
}


export default App;