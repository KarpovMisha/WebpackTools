import React, { Component, PropTypes } from 'react';

export default class AddItem extends Component {
  static propTypes = {
    desc: PropTypes.string,
    id: PropTypes.number,
    remove: PropTypes.func,
    mark: PropTypes.func,
    status: PropTypes.bool
  }

  render() {
    const { desc, status, remove, mark, id } = this.props;
    return (
      <div className="addItem">
        <input type="checkbox" checked={status} onClick={() => mark(id)}></input>
        {desc}
        <button type="button" onClick={() => remove(id)}>Delete</button>
      </div>
    );
  }
}

