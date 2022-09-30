class User < ApplicationRecord
  has_secure_password

  validates_length_of :username, in: 3..10
  validate :valid_email?
  
  has_many :favorites
  has_many :sale_items

  def valid_email? 
      errors.add(:email, "invalid") unless
      self.email.match(/[\w\d._%+-]+@[\w\d.-]+\.[\w]{2,4}/)
  end
  
end
