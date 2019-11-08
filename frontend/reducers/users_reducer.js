import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';

import {
  RECEIVE_USERS
} from '../actions/user_actions';

const usersReducer = (oldState= {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState[action.user.id] = action.user;
      return newState;

    case RECEIVE_USERS:
      newState = action.users;
      return newState;

    default:
      return oldState;
  }

};export default usersReducer;