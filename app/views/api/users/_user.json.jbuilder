json.extract! user, :id, :username

# debugger
json.set! "albums" do 
  user.albums.each do |album|
    json.set! album.id do
      json.extract! album, :id, :title, :user_id
      json.albumUrl url_for(album.photo)
    end
  end
end

if (user.photo.attached?) 
  json.photoUrl url_for(user.photo)
end