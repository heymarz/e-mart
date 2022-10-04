class Item < ApplicationRecord
  has_many :sale_items
  has_many :sellers, class_name: "User", through: :sale_items
  
  has_many :favorites
  has_many :buyers, class_name: "User", through: :favorites
end