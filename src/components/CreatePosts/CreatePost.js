import React, { Component } from 'react';

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      token: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.insert = this.insert.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  login() {
    window.fbAsyncInit = () => {
      FB.init({
        appId: '320242895029311',
        xfbml: false,
        version: 'v2.8'
      });
      FB.login((response) => {
        FB.api('/me/accounts',
          (account) => {
            this.setState({ token: account.data[0].access_token });
            console.log(account);
          });
      }, { scope: 'publish_pages,manage_pages' });
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

  insert() {
    FB.api(
      '/329024300809178/photos?access_token=' + this.state.token,
      'POST',
      {
        message: this.state.value,
        url: 'http://nailsfoto.com/media/com_mtree/images/listings/m/3265.jpg'
      },
      (response) => console.log(response.id)
    );
  }

  render() {
    return (
      <div className="newPost">
        <form>
          Create post;
          <input type="text" name="name" onChange={this.handleChange} />
          <input type="button" value="login" onClick={this.login} />
          <input type="button" value="send" onClick={this.insert} />
        </form>
      </div>
    );
  }
}
