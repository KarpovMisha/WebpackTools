import React, { Component, PropTypes } from 'react';
import AddItem from './AddItem';

export default class AddItems extends Component {
  static propTypes = {
    todo: PropTypes.array
  }

  constructor(props) {
    super(props);
    this.state = {
      todo: this.props.todo
    };
    this.remove = this.remove.bind(this);
    this.allItems = this.allItems.bind(this);
    this.activeItems = this.activeItems.bind(this);
    this.completedItems = this.completedItems.bind(this);
    this.mark = this.mark.bind(this);
  }

  remove(id) {
    const { todo } = this.state;
    const arr = todo.splice(id, 1);
    this.setState({ todo });
    localStorage.setItem('todos', JSON.stringify(todo));
  }

  mark(id) {
    const changeStatus = this.state.todo[id].status;
    if (changeStatus === false) {
      this.state.todo[id].status = true;
    } else if (changeStatus === true) {
      this.state.todo[id].status = false;
    }
    console.log(this.state.todo[id]);
  }

  allItems() {
    const retList = JSON.parse(localStorage.todos);
    this.setState({ todo: retList });
  }

  activeItems() {
    const { todo } = this.state;
    const arr = todo.filter((id) => {
      return id.status === false;
    });
    this.setState({ todo: arr });
  }

  completedItems() {
    const { todo } = this.state;
    const arr = todo.filter((id) => {
      return id.status === true;
    });
    this.setState({ todo: arr });
  }

  render() {
    const { todo } = this.state;
    return (
      <div>
        {
          todo.map((c, i) =>
            <AddItem
              desc={c.item}
              id={i}
              key={i}
              remove={this.remove}
              mark={this.mark}
            />
          )
        }
        <div className="controlGroup">
          <button type="button" onClick={this.allItems}>All</button>
          <button type="button" onClick={this.activeItems}>Active</button>
          <button type="button" onClick={this.completedItems}>Completed</button>
        </div>
      </div>
    );
  }
}

