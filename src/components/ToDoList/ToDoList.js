import React, { Component } from 'react';
import AddItems from './AddItems';

const todos = [];

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      todo: todos
    };
    this.handleItems = this.handleItems.bind(this);
    this.addItems = this.addItems.bind(this);
  }

  componentWillMount() {
    if (typeof window !== 'undefined') {
      this.updateState();
    }
  }

  updateState() {
    const retList = JSON.parse(localStorage.todos);
    this.setState({ todo: retList });
  }

  handleItems(event) {
    this.setState({ item: event.target.value });
  }

  addItems() {
    const { todo, item } = this.state;
    const arr = todo.push({
      item,
      status: false
    });

    this.setState({ todo });
    localStorage.setItem('todos', JSON.stringify(todo));
  }

  render() {
    return (
      <div className="todolist">
        <input type="text" name="name" placeholder="Название..." onChange={this.handleItems} />
        <button type="button" onClick={this.addItems}>Add</button>
        <AddItems todo={this.state.todo} />
      </div>
    );
  }
}

