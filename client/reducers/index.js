import { combineReducers } from 'redux';
import usersReducer from './users-reducer';

const mainReducer = combineReducers({
  users: usersReducer
});

export default mainReducer;
