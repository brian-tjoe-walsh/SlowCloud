import { ADD_SONG, REMOVE_SONG, PAUSE_SONG, PLAY_SONG } from '../actions/mediaPlayer_actions';

export default function mediaPlayerReducer(oldState = {}, action) {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case ADD_SONG:
      if (newState.songs) {
        newState.songs.push(action.song);
      } else {
        newState.songs = [action.song];
      }
      return newState;
    case PAUSE_SONG:
      newState.playing = false;
      return newState;
    case PLAY_SONG:
      newState.playing = true;
      return newState;
    case REMOVE_SONG:
      newState.songs.pop();
      return newState;
    default:
      return oldState;
  }
}
