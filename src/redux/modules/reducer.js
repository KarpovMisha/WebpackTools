import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import { reducer as form } from 'redux-form';

import todo from './todo';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  form,
  todo
});
