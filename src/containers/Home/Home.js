import React, { Component, PropTypes } from 'react';
import { FacebookPosts, CreatePosts, ToDoList } from 'components';

export default class Home extends Component {
  static propTypes = {
    params: PropTypes.object
  };

  render() {
    return (
      <div>
        <ToDoList />
        {/*<CreatePosts />
        <FacebookPosts newProps={this.props.params} />*/}
      </div>
    );
  }
}
