export const ADD_SONG = 'ADD_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';

export const addSong = song => {
  return {
    type: ADD_SONG,
    song
  };
};

export const removeSong = () => {
  return {
    type: REMOVE_SONG
  };
};