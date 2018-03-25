import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import usersReducer from './users-reducer';

const mainReducer = combineReducers({
  form,
  user: usersReducer
});

export default mainReducer;
