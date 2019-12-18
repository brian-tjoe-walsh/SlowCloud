json.extract! album, :id, :title, :user_id
json.photoUrl url_for(album.photo)
json.artist album.user
json.set! "songs" do
  album.songs.each_with_index do |song, idx|
    json.set! idx do
      json.extract! song, :id, :title, :album, :genre, :user_id
      json.audio_fileUrl url_for(song.audio_file)
    end
  end
end