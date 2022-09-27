class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :for_sale_item_id,  :buyer_id, :for_sale_item
end