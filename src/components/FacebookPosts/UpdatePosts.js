import React, { Component, PropTypes } from 'react';

export default class UpdatePost extends Component {
  static propTypes = {
    desc: PropTypes.string,
    id: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.desc
    };
    this.handleChange = this.handleChange.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.addPost = this.addPost.bind(this);
  }

  componentWillMount() {
    if (typeof window !== 'undefined') {
      this.loadFacebook();
    }
  }

  loadFacebook() {
    window.fbAsyncInit = () => {
      FB.init({
        appId: '1824715864406732',
        xfbml: false,
        version: 'v2.8'
      });
    };

    ((d, s, id) => {
      let js = d.getElementsByTagName(s)[0];
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s);
      js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk/debug.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  addPost() {

  }

  updatePost() {
    const { id } = this.props;
    FB.api(
      id,
      'POST',
      {
        message: this.state.value
      },
      (response) => {
        console.log('111');
      }
    );
  }

  render() {
    const { desc } = this.props;
    return (
      <div className="updatePost">
        <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
        <input type="button" value="add post" onClick={this.addPost} />
        <input type="button" value="send" onClick={this.updatePost} />
      </div>
    );
  }
}

