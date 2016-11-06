import React, {Component} from 'react';
import {} from 'stylesheets/main.scss';
import config from 'config';

class Photo extends Component {
  render() {
    return (
      <div className="photo">
        <img src={this.props.img}/>
      </div>
    );
  }
}

export default class InstagrammPosts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      amountPhotos: 5
    };
    this.loadInstagram = this.loadInstagram.bind(this);
  }

  loadInstagram() {
    $.ajax({
      url: config.urlInstagramm,
      dataType: 'jsonp',
      type: 'GET',
      data: {
              access_token: config.tokenInstagramm,
              count: this.state.amountPhotos
            },
      success: ({data}) => {
        this.setState({data});
      }
    });
  }

  componentWillMount() {
    this.loadInstagram();
    //setInterval(this.loadInstagram, 10000);
  }

  render() {
    const {  data } = this.state;
    return (
      <div className="row">
        <h1>Instagramm</h1>
        {
          data.map((c) =>
            <Photo
              img={c.images.low_resolution.url}
            />
          )
        }
      </div>
    );
  }
}
