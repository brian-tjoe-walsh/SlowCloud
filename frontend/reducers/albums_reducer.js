import {
  RECEIVE_ALBUMS, RECEIVE_ALBUM, REMOVE_ALBUM
} from '../actions/album_actions';

const albumsReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type) {
    case RECEIVE_ALBUMS:
      newState = action.albums;
      return newState;

    case RECEIVE_ALBUM:
      newState[action.album.id] = action.album;
      return newState;

    case REMOVE_ALBUM:
      delete newState[action.albumId];
      return newState;

    default:
      return oldState;
  }
};

export default albumsReducer;