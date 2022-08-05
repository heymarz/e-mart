class Image < ApplicationRecord
  belongs_to :for_sale_item
  has_many :users, through: :for_sale_item
 
  
  # validate :image_type
  
  # def image_type
  #   if images.present? == false
  #     errors.add(:images, "images are missing!")
  #   end
  # end

end
