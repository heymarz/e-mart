class ForSaleItemSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :itemTitle, :category_id, :itemDescription, :itemPrice, :user_id, :images
  
  belongs_to :user

end
