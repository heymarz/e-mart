class User < ApplicationRecord
  has_secure_password

  validates_length_of :username, in: 3..10
  validates :email, uniqueness: { case_sensitive: false }
  validates_presence_of :username, :email
  validate :valid_email?

  has_many :forSaleItems
  has_many :categories, through: :forSaleItems


  def valid_email? 
      errors.add(:email, "invalid") unless
      self.email.match(/[\w\d._%+-]+@[\w\d.-]+\.[\w]{2,4}/)
  end
  
end
