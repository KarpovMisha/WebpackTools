import React, { Component, PropTypes} from 'react';
import Photo from './photo';
import ReactPaginate from 'react-paginate';

export default class Posts extends Component {
  static propTypes = {
    posts: PropTypes.array,
    pageNum: PropTypes.number
  }

  render() {
    const { posts, pageNum } = this.props;
    return(
      <div>
        {
          posts.map((c, i) =>
            <Photo
              desc={c.message}
              img={c.picture}
              key={i}
            />
          )
        }


      </div>
      )
  }
}

