import React, { Component } from 'react';

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      url: '',
      token: ''
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeUrl = this.handleChangeUrl.bind(this);
    this.login = this.login.bind(this);
    this.insert = this.insert.bind(this);
  }

  handleChangeName(event) {
    this.setState({ value: event.target.value });
  }

  handleChangeUrl(event) {
    this.setState({ url: event.target.value });
  }

  login() {
    FB.login((response) => {
      FB.api('/me/accounts',
        (account) => {
          this.setState({ token: account.data[0].access_token });
          console.log(account);
        });
    }, { scope: 'publish_pages,manage_pages' });
  }

  insert() {
    FB.api(
      '/me/photos?access_token=' + this.state.token,
      'POST',
      {
        message: this.state.value,
        url: this.state.url
      },
      (response) => console.log(response.id)
    );
  }

  render() {
    return (
      <div className="newPost">
        <form>
          Create post:
          <input type="text" name="name" placeholder="Название..." onChange={this.handleChangeName} />
          <input type="text" name="name" placeholder="URL картинки" onChange={this.handleChangeUrl} />
          <input type="button" value="login" onClick={this.login} />
          <input type="button" value="send" onClick={this.insert} />
        </form>
      </div>
    );
  }
}
