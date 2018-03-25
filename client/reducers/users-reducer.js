import {
  AUTH_USER,
  SIGNUP_SUCCESS,
  UNAUTH_USER
} from '../constants';

function usersReducer(state = false, action) {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case AUTH_USER:
      return { ...state, authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    default:
      return state;
  }
}

export default usersReducer;
