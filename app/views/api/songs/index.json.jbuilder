@songs.each do |song|
  json.set! song.id do
    json.extract! song, :id, :title, :album_id, :genre, :user_id
    json.artist song.user
    json.album song.album
    if (song.audio_file.attached?) 
      json.audio_fileUrl url_for(song.audio_file)
    end
  end
end