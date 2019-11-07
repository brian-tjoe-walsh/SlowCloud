import {
  RECEIVE_SONGS, RECEIVE_SONG, REMOVE_SONG
} from '../actions/song_actions';

const songsReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type) {
    case RECEIVE_SONGS:
      newState = action.songs;
      return newState;

    case RECEIVE_SONG:
      newState[action.song.id] = action.song;
      return newState;

    case REMOVE_SONG:
      delete newState[action.eventId];
      return newState;

    default:
      return oldState;
  }
};

export default songsReducer;