class ForSaleItem < ApplicationRecord
  belongs_to :seller, class_name: "User"

  has_many :favorites, dependent: :delete_all
  has_many :buyers, through: :favorites
  belongs_to :category

  validates :images, presence: true
  validates :itemTitle, :itemDescription, presence: true
  validates :itemPrice, numericality: { greater_than: 0, less_than: 10000 }
end
