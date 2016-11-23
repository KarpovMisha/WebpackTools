import React, { Component, PropTypes } from 'react';
import AddItem from './AddItem';

export default class AddItems extends Component {
  static propTypes = {
    todo: PropTypes.array,
    remove: PropTypes.func,
    mark: PropTypes.func,
    allItems: PropTypes.func,
    activeItems: PropTypes.func,
    completedItems: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.allItems = this.allItems.bind(this);
    this.activeItems = this.activeItems.bind(this);
    this.completedItems = this.completedItems.bind(this);
  }

  allItems() {
    this.props.allItems();
  }

  activeItems() {
    this.props.activeItems();
  }

  completedItems() {
    this.props.completedItems();
  }

  render() {
    const { todo } = this.props;
    return (
      <div>
        {
          todo.map((c, i) =>
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

