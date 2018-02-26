import usersActionTypes from '../action-types/users';

function usersReducer(state = false, action) {
  switch (action.type) {
    case usersActionTypes.authenticated:
      return action.isAuthenticated;
    default:
      return state;
  }
}

export default usersReducer;
