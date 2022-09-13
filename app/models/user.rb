class User < ApplicationRecord
  has_secure_password

  validates_presence_of :username
  validates_length_of :username, in: 3..10
  validates :email, presence: true, uniqueness: true
  validate :valid_email?
  
  has_many :favorites, foreign_key: "buyer_id"
  has_many :for_sale_items, through: :favorites

  def valid_email? 
      errors.add(:email, "invalid") unless
      self.email.match(/[\w\d._%+-]+@[\w\d.-]+\.[\w]{2,4}/)
  end
  
end
