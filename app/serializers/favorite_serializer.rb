class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :item_id, :buyer_id, :item
end