class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest

  has_many :forSaleItems

  def valid_email? 
      errors.add(:email, "invalid") unless
      self.email.match(/[\w\d._%+-]+@[\w\d.-]+\.[\w]{2,4}/)
  end
  
end
