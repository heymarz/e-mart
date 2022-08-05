class ForSaleItemSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :itemTitle, :category_id, :itemDescription, :itemPrice, :user_id
  
  belongs_to :user
  has_many :images

end
