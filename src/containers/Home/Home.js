import React, { Component, PropTypes } from 'react';
import { FacebookPosts, CreatePosts } from 'components';

export default class Home extends Component {
  static propTypes = {
    params: PropTypes.object
  };

  render() {
    return (
      <div>
        {/*<CreatePosts />*/}
        <FacebookPosts newProps={this.props.params} />
      </div>
    );
  }
}
