import { SEARCH } from '../actions/search_action';

export default function mediaPlayerReducer(oldState = {}, action) {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case SEARCH:
      // debugger
      return newState;
    default:
      return oldState;
  }
}
