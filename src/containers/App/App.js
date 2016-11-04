import React, {Component} from 'react';
import { FacebookPosts, InstagrammPosts } from 'components';

export default class App extends Component{
  render(){
    return(
      <div>
        <FacebookPosts />
        <InstagrammPosts />
      </div>
    );
  }
}
