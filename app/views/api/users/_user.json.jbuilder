json.extract! user, :id, :username
json.photoUrl url_for(user.photo)
json.albums user.albums