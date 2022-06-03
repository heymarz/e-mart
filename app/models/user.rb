class User < ApplicationRecord
  has_secure_password

  validates :email, uniqueness: { case_sensitive: false }
  validates_format_of :email, without: /NOSPAM/
  validates_presence_of :username, :email
  validates_length_of :username, in: 3..10

  has_many :forSaleItems
  has_many :categories, through: :forSaleItems
end
