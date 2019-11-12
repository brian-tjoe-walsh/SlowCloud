json.extract! song, :id, :title, :album, :genre, :user_id
json.audio_fileUrl url_for(song.audio_file)
json.album song.album
json.artist song.user 