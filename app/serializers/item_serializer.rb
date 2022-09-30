class ItemSerializer < ActiveModel::Serializer
  attributes :id, :itemTitle, :category_id, :itemDescription, :itemPrice, :images
end
