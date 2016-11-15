import React, { Component } from 'react';

export default class UpdatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.updatePost = this.updatePost.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  updatePost() {
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

  render() {
    return (
      <div className="updatePost">
        <input type="text" name="name" onChange={this.handleChange} />
        <input type="button" value="send" onClick={this.updatePost} />
      </div>
    );
  }
}

