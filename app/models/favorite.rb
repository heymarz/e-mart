class Favorite < ApplicationRecord
  validates :buyer_id, uniqueness: {scope: :for_sale_item}
  belongs_to :buyer, class_name: "User"

  belongs_to :for_sale_item
end
