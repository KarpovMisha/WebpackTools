import React, { Component } from 'react';

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.insert = this.insert.bind(this);
  }

  componentWillMount() {
    if (typeof window !== 'undefined') {
      this.login();
    }
  }

  login() {
    window.fbAsyncInit = () => {
      FB.init({
        appId: '1824715864406732',
        xfbml: false,
        version: 'v2.8'
      });

      FB.login((response) => {
        if (response.authResponse) {
          console.log('1');
        } else {
          alert('Login attempt failed!');
        }
      }, { scope: 'publish_actions' });
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

  insert() {
    FB.api(
      '/me/feed',
      'POST',
      {
        message: this.state.value
      },
      (response) => {
        console.log(response.id);
      }
    );
  }

  remove() {
    FB.api(
      '101745953633276_148719255602612',
      'delete',
      (response) => {
        console.log(response);
      }
    );
  }

  render() {
    return (
      <div className="newPost">
        <form>
          Create post;
          <input type="text" name="name" onChange={this.handleChange} />
          <input type="button" value="send" onClick={this.insert} />
          <input type="button" value="delete" onClick={this.remove} />
        </form>
      </div>
    );
  }
}
