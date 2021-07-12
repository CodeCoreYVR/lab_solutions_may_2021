class Product < ApplicationRecord
    after_initialize :set_default_price
    before_save :capitalize_title
    # The title must be present
    # The title must be unique (case insensitive)
    # The price must be a number that is more than 0
    # The description must be present
    # The description must have at least 10 characters
    validates :title, presence: true, uniqueness: { case_sensitive: false }
    validates :price, numericality:{greater_than: 0}
    validates :description, presence: true, length: { minimum: 10 }


    has_many :reviews, dependent: :destroy
    belongs_to :user, optional: true
    # A callback method to set the default price to 1
    # A callback method to capitalize the product title before saving
    private
    def set_default_price
        self.price ||= 1
    end

    def capitalize_title
        self.title.capitalize!
    end
    

end
