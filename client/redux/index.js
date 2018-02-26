import { combineReducers } from 'redux'
import usersReducer from './reducers/users';

const mainReducer = combineReducers({
  users: usersReducer
});

export default mainReducer;
