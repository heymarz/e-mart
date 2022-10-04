class ItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :category_id, :description, :price, :images

  has_many :sellers, class_name: "User"
end
