import React, { Component } from 'react';
import AddItems from './AddItems';

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      todo: [],
      show: ''
    };
    this.handleItems = this.handleItems.bind(this);
    this.addItems = this.addItems.bind(this);
    this.remove = this.remove.bind(this);
    this.mark = this.mark.bind(this);
  }

  componentWillMount() {
    if (typeof window !== 'undefined') {
      this.updateState();
    }
  }

  setFilter(value) {
    const filter = ['all', 'active', 'completed'];
    this.setState({ show: filter[value] });
  }

  updateState() {
    if (localStorage.todos) {
      const retList = JSON.parse(localStorage.todos);
      this.setState({ todo: retList });
    }
  }

  handleItems(event) {
    this.setState({ item: event.target.value });
  }

  addItems() {
    const { todo, item } = this.state;
    todo.push({
      item,
      status: false
    });
    this.setState({ todo });
    localStorage.setItem('todos', JSON.stringify(todo));
  }

  remove(id) {
    const { todo } = this.state;
    const arr = todo.splice(id, 1);
    this.setState({ todo });
    localStorage.setItem('todos', JSON.stringify(todo));
  }

  mark(id) {
    const retList = JSON.parse(localStorage.todos);
    const changeStatus = retList[id].status;
    if (changeStatus === false) {
      retList[id].status = true;
    } else if (changeStatus === true) {
      retList[id].status = false;
    }
    this.setState({ todo: retList });
    localStorage.setItem('todos', JSON.stringify(retList));
  }

  render() {
    return (
      <div className="todolist">
        <input type="text" name="name" placeholder="Название..." onChange={this.handleItems} />
        <button type="button" onClick={this.addItems}>Add</button>
        <AddItems
          show={this.state.show}
          todo={this.state.todo}
          remove={this.remove}
          mark={this.mark}
          allItems={() => this.setFilter(0)}
          activeItems={() => this.setFilter(1)}
          completedItems={() => this.setFilter(2)}
        />
      </div>
    );
  }
}
