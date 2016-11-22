import React, { Component, PropTypes } from 'react';
import fblogin from '../../actions/FBlogin.js';
import fbAddPost from '../../actions/FBaddPost.js';

export default class CreatePost extends Component {
  static propTypes = {
    token: PropTypes.string
  }

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
    this.submit = this.submit.bind(this);
  }

  handleChangeName(event) {
    this.setState({ value: event.target.value });
  }

  handleChangeUrl(event) {
    this.setState({ url: event.target.value });
  }

  login() {}

  submit() {
    setTimeout(fbAddPost(this), 10000);
    fblogin(this);
  }

  render() {
    return (
      <div className="newPost">
        <button type="button" onClick={this.login}>Login</button>
        <form onSubmit={this.submit} method="post">
          Create post:
          <input type="text" name="name" placeholder="Название..." onChange={this.handleChangeName} />
          <input type="text" name="name" placeholder="URL картинки" onChange={this.handleChangeUrl} />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}
