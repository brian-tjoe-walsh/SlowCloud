

import * as SongApiUtil from "../util/song_api_util";

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const REMOVE_SONG = "REMOVE_SONG";

const receiveSongs = (songs) => ({
  type: RECEIVE_SONGS,
  songs: songs
});

const receiveSong = (song) => ({
  type: RECEIVE_SONG,
  song: song
});

const removeSong = (songId) => ({
  type: REMOVE_SONG,
  songId: songId
});

export const createSong = (song) => dispatch => (
  SongApiUtil.createSong(song)
    .then(song => dispatch(receiveSong(song))
  )
);

export const createNewSong = (song) => dispatch => {
  return(
    SongApiUtil.createNewSong(song)
      .then(song => dispatch(receiveSong(song)))
      .then((ele) => {
        // return (window.location = `albums/${ele.song.album.id}`);
        return (window.location.hash = `#/albums/${ele.song.album.id}`);
      })
      .then((ele) => {
        return (location.reload(true));
      })
  );
};

export const fetchSongs = () => dispatch => (
  SongApiUtil.fetchSongs()
    .then(songs => dispatch(receiveSongs(songs))
  )
);

export const fetchSong = (id) => dispatch => (
  SongApiUtil.fetchSong(id)
    .then(song => dispatch(receiveSong(song))
  )
);

export const deleteSong = (songId) => dispatch => (
  SongApiUtil.deleteSong(songId)
    .then(() => dispatch(removeSong(songId))
  )
);