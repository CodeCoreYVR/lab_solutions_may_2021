class Review < ApplicationRecord
  belongs_to :product
  belongs_to :user, optional: true
  validates :rating, numericality:{greater_than: 0,lesser_than:6}
end
