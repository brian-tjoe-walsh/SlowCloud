import { ADD_SONG, REMOVE_SONG } from '../actions/mediaPlayer_actions';

export default function mediaPlayerReducer(oldState = [], action) {
  Object.freeze(oldState);
  let newState = Object.assign([], oldState);

  switch (action.type) {
    case ADD_SONG:
      newState.push(action.song);
      return newState;
    case REMOVE_SONG:
      delete newState[action.song.id];
      return null;
    default:
      return oldState;
  }
}
