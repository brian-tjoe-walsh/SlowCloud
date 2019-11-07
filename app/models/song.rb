class Song < ApplicationRecord

  validates :title, presence: true
  validates :album, presence: true

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User
end
