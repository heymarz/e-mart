class User < ApplicationRecord
  has_secure_password

  validates_length_of :username, in: 3..10
  validates :email, uniqueness: { case_sensitive: false }
  validates_presence_of :username, :email
  validates_format_of :email, with: URI::MailTo::EMAIL_REGEXP

  has_many :forSaleItems
  has_many :categories, through: :forSaleItems
end
