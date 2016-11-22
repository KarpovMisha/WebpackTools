import React, { Component, PropTypes } from 'react';

export default class AddItem extends Component {
  static propTypes = {
    desc: PropTypes.string,
    id: PropTypes.number,
    remove: PropTypes.func,
    mark: PropTypes.func

  }

  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
    this.mark = this.mark.bind(this);
  }

  remove() {
    const { id } = this.props;
    this.props.remove(id);
  }

  mark() {
    const { id } = this.props;
    this.props.mark(id);
  }

  render() {
    const { desc, id } = this.props;
    return (
      <div className="addItem">
        <input type="checkbox" onClick={this.mark}></input>
        {desc}
        <button type="button" onClick={this.remove}>Delete</button>
      </div>
    );
  }
}

