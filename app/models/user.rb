class User < ApplicationRecord
  has_secure_password

  validates_length_of :username, in: 3..10
  validate :valid_email?
  validates_uniqueness_of :email, :username
  
  has_many :favorites, foreign_key: :buyer_id
  has_many :sale_items, foreign_key: :seller_id

  def valid_email? 
    errors.add(:email, "invalid") unless
      self.email.match(/[\w\d._%+-]+@[\w\d.-]+\.[\w]{2,4}/)
  end
  
end
