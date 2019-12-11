json.array! @albums do |album|
  json.extract! album, :id, :title, :user_id
  json.artist album.user
  json.songs album.songs
  json.photoUrl url_for(album.photo)
end