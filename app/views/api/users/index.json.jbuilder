@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username
    json.albums user.albums
    if (user.photo.attached?)
      json.photoUrl url_for(user.photo)
    end
  end
end