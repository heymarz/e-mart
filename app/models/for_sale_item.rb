class ForSaleItem < ApplicationRecord
  belongs_to :user
  belongs_to :category
  has_many :images
  validates :itemTitle, :itemDescription, presence: true
  validates :itemPrice, numericality: { greater_than: 0, less_than: 10000 }
end
