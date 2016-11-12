const ADD = 'todo/ADD';
const REMOVE = 'todo/REMOVE';
const SET_STATUS = 'todo/SET_STATUS';
const CLEAR_CHECKED = 'todo/CLEAR_CHECKED';
const TOGGLE_ALL = 'todo/CHECK_ALL';
const LOAD = 'todo/LOAD';

const initialState = {
  list: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD:
      return { ...state, list: [...state.list, action.todo] };
    case LOAD:
      return { ...state, list: action.todos };
    case SET_STATUS:
      return { ...state, list: state.list.map(c => c.id === action.id ? { ...c, checked: action.checked } : c) };
    case REMOVE:
      return { ...state, list: state.list.filter(c => c.id !== action.id) };
    case CLEAR_CHECKED:
      return { ...state, list: state.list.filter(c => !c.checked) };
    case TOGGLE_ALL:
      return { ...state, list: state.list.map(c => ({ ...c, checked: action.checked })) };
    default:
      return state;
  }
}

export function add(text) {
  return {
    type: ADD,
    todo: {
      id: Math.random().toString(36).slice(2),
      checked: false,
      text
    }
  };
}

export function remove(id) {
  return {
    type: REMOVE,
    id
  };
}

export function setTodoStatus(id, checked) {
  return {
    type: SET_STATUS,
    id,
    checked
  };
}

export function clearChecked() {
  return { type: CLEAR_CHECKED };
}

export function toggleAll(checked) {
  return { type: TOGGLE_ALL, checked };
}

export function save() {
  return (dispatch, getState) => {
    const todos = getState().todo.list;
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('todo_store', JSON.stringify(todos));
    }
  };
}

export function load() {
  let todos = [];
  if (typeof window !== 'undefined' && window.localStorage) {
    todos = localStorage.getItem('todo_store');
    todos = todos ? JSON.parse(todos) : [];
  }
  return { type: LOAD, todos };
}
