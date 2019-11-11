json.array! @albums do |album|
  json.extract! album, :id, :title, :user_id
  json.photoUrl url_for(album.photo)
end