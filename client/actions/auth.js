/* globals localStorage */
import axios from 'axios';

import { API_URL } from './../config/index';
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN_FAILURE,
  SIGNOUT_FAILURE,
  AUTH_USER,
  UNAUTH_USER,
} from './../constants/index';

export function authError(CONST, error) {
  return {
    type: CONST,
    payload: error,
  };
}

export function signupUser(props) {
  return function (dispatch) {
    axios.post(`${API_URL}/auth/register`, props)
      .then(() => {
        dispatch({ type: SIGNUP_SUCCESS });
      })
      .catch((response) => {
        dispatch(authError(SIGNUP_FAILURE, response.data.error));
      });
  };
}

export function signinUser(props) {
  const { username, password } = props;

  return (dispatch) => {
    axios.post(`${API_URL}/auth/login`, { username, password })
      .then((response) => {
        localStorage.setItem('user', JSON.stringify(response.data));
        dispatch({ type: AUTH_USER });
      })
      .catch(() => dispatch(authError(SIGNIN_FAILURE, "Username or password isn't correct")));
  };
}

export function signoutUser() {
  return (dispatch) => {
    axios.get(`${API_URL}/auth/logout`)
      .then(() => {
        localStorage.removeItem('user');
        dispatch({ type: UNAUTH_USER });
      })
      .catch(() => dispatch(authError(SIGNOUT_FAILURE, "Email or password isn't correct")));
  };
}
