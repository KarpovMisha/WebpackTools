import React, { Component, PropTypes } from 'react';
import AddItem from './AddItem';

export default class AddItems extends Component {
  static propTypes = {
    todo: PropTypes.array,
    remove: PropTypes.func,
    mark: PropTypes.func,
    allItems: PropTypes.func,
    activeItems: PropTypes.func,
    completedItems: PropTypes.func,
    show: PropTypes.object
  }

  render() {
    const { todo, show } = this.props;
    return (
      <div className="items">
        {
          todo.filter((id) => {
            return id.status === show.a || id.status === show.c;
          }).map((c, i) =>
            <AddItem
              desc={c.item}
              id={i}
              key={i}
              remove={this.props.remove}
              mark={this.props.mark}
              status={c.status}
            />
          )
        }
        <div className="controlGroup">
          <button type="button" onClick={this.props.allItems}>All</button>
          <button type="button" onClick={this.props.activeItems}>Active</button>
          <button type="button" onClick={this.props.completedItems}>Completed</button>
        </div>
      </div>
    );
  }
}

