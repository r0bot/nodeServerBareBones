import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import usersReducer from './users-reducer';
import dashboardReducer from './dashboard-reducer';

const mainReducer = combineReducers({
  form,
  user: usersReducer,
  dashboard: dashboardReducer
});

export default mainReducer;
