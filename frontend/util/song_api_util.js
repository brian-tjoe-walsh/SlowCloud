export const fetchSongs = data => (
  $.ajax({
    method: 'GET',
    url: 'api/songs',
    data: {data}
  })
);

export const fetchSong = id => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/songs/${id}`
    })
  );
};

export const createSong = song => (
  $.ajax({
    method: 'POST',
    url: 'api/songs',
    data: { song },
  })
);

export const createNewSong = formData => {
  return (
    $.ajax({
      method: 'POST',
      url: 'api/songs',
      data: formData,
      contentType: false,
      processData: false
    })
  );
};

export const updateSong = song => (
  $.ajax({
    method: 'PATCH',
    url: `api/songs/${song.id}/edit`,
    data: {song}
  })
);

export const deleteSong = songId => (
  $.ajax({
    method: 'DELETE',
    url: `api/songs/${songId}`
  })
);
