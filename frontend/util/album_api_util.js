export const fetchAlbums = data => (
  $.ajax({
    method: 'GET',
    url: 'api/albums',
    data: { data }
  })
);

export const fetchAlbum = id => (
  $.ajax({
    method: 'GET',
    url: `api/albums/${id}`
  })
);

export const createAlbum = album => (
  $.ajax({
    method: 'POST',
    url: 'api/albums',
    data: { album },
  })
);

export const updateAlbum = album => (
  $.ajax({
    method: 'PATCH',
    url: `api/albums/${album.id}/edit`,
    data: { album }
  })
);

export const deleteAlbum = albumId => (
  $.ajax({
    method: 'DELETE',
    url: `api/albums/${albumId}`
  })
);
