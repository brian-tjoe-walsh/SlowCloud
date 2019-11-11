class Album < ApplicationRecord
  validates :title, presence: true

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  has_many :songs,
  foreign_key: :album_id,
  class_name: :Song

  has_one_attached :photo
end
