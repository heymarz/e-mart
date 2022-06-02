class ForSaleItemSerializer < ActiveModel::Serializer
  attributes :id, :itemImg, :itemTitle, :category_id, :itemDescription, :itemPrice, :user_id
end
