import React, { Component, PropTypes } from 'react';

export default class FBlogin extends Component {
  static propTypes = {
    token: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      token: ''
    };
  }

  render() {
    return (
      FB.login((response) => {
        FB.api('/me/accounts',
          (account) => {
            this.setState({ token: account.data[0].access_token });
          });
      }, { scope: 'publish_actions,publish_pages,manage_pages' })
    );
  }
}
