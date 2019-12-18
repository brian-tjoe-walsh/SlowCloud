json.extract! user, :id, :username

# debugger
json.set! "albums" do 
  user.albums.each do |album|
    json.set! album.id do
      json.extract! album, :id, :title, :user_id
      json.set! "songs" do
        album.songs.each_with_index do |song, idx|
          json.set! idx do
            json.extract! song, :id, :title, :album, :genre, :user_id
            json.audio_fileUrl url_for(song.audio_file)
          end
        end
      end
      json.albumUrl url_for(album.photo)
    end
  end
end

if (user.photo.attached?) 
  json.photoUrl url_for(user.photo)
end