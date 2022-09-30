class SaleItemSerializer < ActiveModel::Serializer
  attributes :id, :for_sale_item_id, :seller_id, :for_sale_item, :sellers
end