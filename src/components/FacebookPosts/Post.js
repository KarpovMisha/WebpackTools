import React, { Component, PropTypes } from 'react';
import UpdatePost from './UpdatePosts';

export default class Post extends Component {
  static propTypes = {
    id: PropTypes.string,
    desc: PropTypes.string,
    img: PropTypes.string.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.open = this.open.bind(this);
  }
  open() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { img, desc, id } = this.props;
    const { open } = this.state;
    return (
      <div className="photo">
        <img src={img} alt="" />
        <div className="desc">{desc}</div>
        <input type="button" value="update post" onClick={this.open} />
        {open && <UpdatePost desc={desc} id={id} />}
      </div>
    );
  }
}

