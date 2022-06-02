class Buyer < ApplicationRecord
  has_many :reviews

  has_secure_password

  validates :email, uniqueness: { case_sensitive: false }
  validates_format_of :email, without: /NOSPAM/
  validates_presence_of :buyerName, :email
  validates_length_of :buyerName, in: 3..10
end