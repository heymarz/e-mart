class SaleItemSerializer < ActiveModel::Serializer
  attributes :id, :item_id, :seller_id, :item, :sellers
end