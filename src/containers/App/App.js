import React, { Component, PropTypes } from 'react';
import {} from '../../stylesheets/main.scss';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object
  };

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
