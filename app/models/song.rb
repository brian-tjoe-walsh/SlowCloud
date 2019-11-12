class Song < ApplicationRecord

  validates :title, presence: true

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :album,
  foreign_key: :album_id,
  class_name: :Album

  has_one_attached :audio_file
end
