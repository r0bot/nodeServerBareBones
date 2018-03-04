/* globals localStorage */
import axios from 'axios';
import { browserHistory } from 'react-router';
import { API_URL } from '../config';
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN_FAILURE,
  AUTH_USER,
  UNAUTH_USER,
} from '../constants/index';

export function authError(CONST, error) {
  return {
    type: CONST,
    payload: error,
  };
}


export function signupUser(props) {
  return function (dispatch) {
    axios.post(`${API_URL}/signup`, props)
      .then(() => {
        dispatch({ type: SIGNUP_SUCCESS });

        browserHistory.push('/signin');
      })
      .catch(response => dispatch(authError(SIGNUP_FAILURE, response.data.error)));
  };
}

export function signinUser(props) {
  const { email, password } = props;

  return (dispatch) => {
    axios.post(`${API_URL}/signin`, { email, password })
      .then((response) => {
        localStorage.setItem('user', JSON.stringify(response.data));

        dispatch({ type: AUTH_USER });

        browserHistory.push('/users');
      })
      .catch(() => dispatch(authError(SIGNIN_FAILURE, "Email or password isn't correct")));
  };
}


export function signoutUser() {
  localStorage.clear();

  return {
    type: UNAUTH_USER,
  };
}
