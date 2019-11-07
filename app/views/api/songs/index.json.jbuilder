@songs.each do |song|
  json.set! song.id do
    json.extract! song, :id, :title, :album, :genre, :user_id
  end
end