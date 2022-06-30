class ForSaleItemSerializer < ActiveModel::Serializer
  attributes :id, :itemTitle, :category_id, :itemDescription, :itemPrice, :user_id, images: []
end
