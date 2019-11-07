import * as SessionApiUtil from '../util/session_api_util';
// import { Session } from 'inspector';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";


export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user: user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors: errors
  });
};

export const clearErrors = () => {
  return({
    type: CLEAR_ERRORS
  });
};

export const login = (user) => (dispatch) => {
  return SessionApiUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveErrors(errors.responseJSON)));
  // .fail( errors => dispatch(receiveErrors(errors)));
};

export const logout = () => (dispatch) => {
  return SessionApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser()));
};

export const signup = (user) => (dispatch) => {
  return SessionApiUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveErrors(errors.responseJSON)));
  // .fail(errors => dispatch(receiveErrors(errors)));
};

