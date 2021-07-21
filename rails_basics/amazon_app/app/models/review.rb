class Review < ApplicationRecord
  belongs_to :product
  belongs_to :user, optional: true
  validates :rating, numericality:{greater_than: 0,lesser_than:6}
  # lab for many to many
  has_many :likes, dependent: :destroy
  has_many :likers, through: :likes, source: :user
end
