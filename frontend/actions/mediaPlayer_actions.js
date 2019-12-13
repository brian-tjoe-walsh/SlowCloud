export const ADD_SONG = 'ADD_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';
export const PAUSE_SONG = 'PAUSE_SONG';
export const PLAY_SONG = 'PLAY_SONG';

export const addSong = song => {
  return {
    type: ADD_SONG,
    song
  };
};

export const pauseSong = () => {
  return {
    type: PAUSE_SONG,
  };
};

export const playSong = () => {
  return {
    type: PLAY_SONG,
  };
};

export const deleteSong = song => {
  debugger
  return {
    type: REMOVE_SONG,
    song
  };
};