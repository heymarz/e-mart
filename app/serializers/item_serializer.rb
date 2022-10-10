class ItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :category_id, :description, :price, :images

  has_one :sale_item
end
