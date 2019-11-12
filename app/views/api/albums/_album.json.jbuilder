json.extract! album, :id, :title, :user_id
json.photoUrl url_for(album.photo)
json.artist album.user