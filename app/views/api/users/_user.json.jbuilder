json.extract! user, :id, :username
json.albums user.albums
if (user.photo.attached?) 
  json.photoUrl url_for(user.photo)
end