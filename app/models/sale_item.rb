class SaleItem < ApplicationRecord
  belongs_to :seller, class_name: "User"
  belongs_to :item
end
