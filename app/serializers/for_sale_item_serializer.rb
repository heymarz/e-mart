class ForSaleItemSerializer < ActiveModel::Serializer
  attributes :id, :itemTitle, :category_id, :itemDescription, :itemPrice, :seller_id, :images

  belongs_to :seller
end
