import React, { Component } from 'react';
import AddItems from './AddItems';


export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      todo: []
    };
    this.handleItems = this.handleItems.bind(this);
    this.addItems = this.addItems.bind(this);
    this.remove = this.remove.bind(this);
    this.mark = this.mark.bind(this);
    this.allItems = this.allItems.bind(this);
    this.activeItems = this.activeItems.bind(this);
    this.completedItems = this.completedItems.bind(this);
  }

  componentWillMount() {
    if (typeof window !== 'undefined') {
      this.updateState();
    }
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
    //const result = [...todo];
    todo.push({
      item,
      status: false
    });
    this.setState({ todo });
    localStorage.setItem('todos', JSON.stringify(todo));
    //console.log(result);
    //return result;
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

  allItems() {
    const retList = JSON.parse(localStorage.todos);
    this.setState({ todo: retList });
  }

  activeItems() {
    const retList = JSON.parse(localStorage.todos);
    const arr = retList.filter((id) => {
      return id.status === false;
    });
    this.setState({ todo: arr });
  }

  completedItems() {
    const retList = JSON.parse(localStorage.todos);
    const arr = retList.filter((id) => {
      return id.status === true;
    });
    this.setState({ todo: arr });
  }

  render() {
    return (
      <div className="todolist">
        <input type="text" name="name" placeholder="Название..." onChange={this.handleItems} />
        <button type="button" onClick={this.addItems}>Add</button>
        <AddItems
          todo={this.state.todo}
          remove={this.remove}
          mark={this.mark}
          allItems={this.allItems}
          activeItems={this.activeItems}
          completedItems={this.completedItems}
        />
      </div>
    );
  }
}

