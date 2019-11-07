class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.string :album, null: false
      t.string :genre
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :songs, :title
    add_index :songs, :album
    add_index :songs, :genre
    add_index :songs, :user_id
  end
end
