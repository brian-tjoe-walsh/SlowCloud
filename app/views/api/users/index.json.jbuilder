@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username
    
    json.set! "albums" do 
      user.albums.each do |album|
        json.set! album.id do
          json.extract! album, :id, :title, :user_id
          json.songs album.songs
          json.albumUrl url_for(album.photo)
        end
      end
    end

    if (user.photo.attached?)
      json.photoUrl url_for(user.photo)
    end
  end
end