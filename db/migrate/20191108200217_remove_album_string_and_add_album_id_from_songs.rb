class RemoveAlbumStringAndAddAlbumIdFromSongs < ActiveRecord::Migration[5.2]
  def change
    remove_column :songs, :album
    add_column :songs, :album_id, :integer
  end
end
