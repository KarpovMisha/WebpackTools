import React, { Component, PropTypes } from 'react';
import Post from './Post';
import ReactPaginate from 'react-paginate';

export default class Posts extends Component {
  static propTypes = {
    posts: PropTypes.array,
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        {
          posts.map((c, i) =>
            <Post
              id={c.id}
              desc={c.message}
              img={c.picture}
              key={i}
            />
          )
        }
      </div>
    );
  }
}

