import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
  CLEAR_ERRORS
} from '../actions/session_actions';

const sessionErrorsReducer = (errorMessages = [], action) => {
  Object.freeze(errorMessages);
  let newMessages; 
  if (errorMessages) {
    newMessages = errorMessages.slice();
  } else {
    newMessages = [];
  }

  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      newMessages = action.errors;
      return newMessages;

    case RECEIVE_CURRENT_USER:
      newMessages = null;
      return newMessages;

    case CLEAR_ERRORS:
      newMessages= [];
      return newMessages;

    default:
      return errorMessages;
  }
};

export default sessionErrorsReducer;