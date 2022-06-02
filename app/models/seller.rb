class Seller < ApplicationRecord
  has_many :forSaleItems

  has_secure_password

  validates :email, uniqueness: { case_sensitive: false }
  validates_format_of :email, without: /NOSPAM/
  validates_presence_of :sellerName, :email
  validates_length_of :sellerName, in: 3..10
end