class AddUserIdNotNullToAlbumsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :albums, :user_id
    add_column :albums, :user_id, :integer, presence: true
  end
end
