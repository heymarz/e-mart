class ForSaleItem < ApplicationRecord
  belongs_to :seller, class_name: "User"
  has_many :favorites, :foreign_key => "buyer_id", dependent: :delete_all
  belongs_to :category

  validates :images, presence: true
  validates :itemTitle, :itemDescription, presence: true
  validates :itemPrice, numericality: { greater_than: 0, less_than: 10000 }
end
