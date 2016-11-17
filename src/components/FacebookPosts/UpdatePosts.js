import React, { Component, PropTypes } from 'react';

export default class UpdatePost extends Component {
  static propTypes = {
    desc: PropTypes.string,
    id: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.desc,
      token: '',
      id: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.login = this.login.bind(this);
    this.remove = this.remove.bind(this);
  }

  login() {
    FB.login((response) => {
      FB.api('/me/accounts',
        (account) => {
          console.log(account);
          this.setState({ token: account.data[0].access_token });
        }
      );
    }, { scope: 'publish_actions,publish_pages,manage_pages' });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  updatePost() {
    console.log(this.props.id);
    FB.api(
      this.props.id,
      'POST',
      {
        message: this.state.value,
      },
      (response) => console.log(response)
    );
  }

  remove() {
    console.log(this.props.id);
    FB.api(
      this.props.id + '?access_token=' + this.state.token,
      'DELETE',
      (response) => console.log(response)
    );
  }

  render() {
    const { desc, id } = this.props;
    return (
      <div className="updatePost">
        <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
        <input type="button" value="login" onClick={this.login} />
        <input type="button" value="change" onClick={this.updatePost} />
        <input type="button" value="delete" onClick={this.remove} />
      </div>
    );
  }
}

