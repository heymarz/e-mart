class Favorite < ApplicationRecord
  # validates :user_id, uniqueness: {scope: :for_sale_item_id}
  belongs_to :user
  belongs_to :for_sale_item
end
