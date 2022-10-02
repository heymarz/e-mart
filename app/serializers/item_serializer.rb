class ItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :category_id, :description, :price, :images
end
