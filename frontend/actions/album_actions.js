

import * as AlbumApiUtil from "../util/album_api_util";

export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const REMOVE_ALBUM = "REMOVE_ALBUM";

const receiveAlbums = (albums) => ({
  type: RECEIVE_ALBUMS,
  albums: albums
});

const receiveAlbum = (album) => ({
  type: RECEIVE_ALBUM,
  album: album
});

const removeAlbum = (albumId) => ({
  type: REMOVE_ALBUM,
  albumId: albumId
});

export const fetchAlbums = (filters) => dispatch => (
  AlbumApiUtil.fetchAlbums(filters)
    .then(albums => dispatch(receiveAlbums(albums))
    )
);

export const fetchAlbum = (id) => dispatch => (
  AlbumApiUtil.fetchAlbum(id)
    .then(album => dispatch(receiveAlbum(album))
    )
);

export const deleteAlbum = (albumId) => dispatch => (
  AlbumApiUtil.deleteAlbum(albumId)
    .then(() => dispatch(removeAlbum(albumId))
    )
);

export const createAlbum = (album) => dispatch => {
  debugger
  return (
    AlbumApiUtil.createAlbum(album)
      .then((album) => dispatch(receiveAlbum(album)))
      .then(ele => location.reload(true))
  );
};
