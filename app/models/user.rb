class User < ApplicationRecord
  has_secure_password

  validates_length_of :username, in: 3..10
  validates :email, uniqueness: true, on: :account_setup
  validates_presence_of :username, :email
  validate :valid_email?

  has_many :forSaleItems
 
  def valid_email? 
      errors.add(:email, "invalid") unless
      self.email.match(/[\w\d._%+-]+@[\w\d.-]+\.[\w]{2,4}/)
  end
  
end
