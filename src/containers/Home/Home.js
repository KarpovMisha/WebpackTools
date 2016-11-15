import React, { Component, PropTypes } from 'react';
import { FacebookPosts, CreatePost } from 'components';

export default class Home extends Component {
  static propTypes = {
    params: PropTypes.object
  };

  render() {
    return (
      <div>
        <FacebookPosts newProps={this.props.params} />
        {/* <CreatePost / > */}
      </div>
    );
  }
}
