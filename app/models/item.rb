class Item < ApplicationRecord
  has_one :sale_item, :dependent => :destroy
  
  has_many :favorites, :dependent => :destroy
  has_many :buyers, class_name: "User", through: :favorites

  validates :description, :title, :price, :images, :presence => true
  validates :price, numericality: { greater_than: 0, less_than: 10000 }
  
  validate :image_type
  
  def image_type
    errors.add(:images, 'Image Uploads needs to be a JPEG or PNG.') unless
      self.images.split(", ").all? do |image|
        image.match?(/(jpeg|png)/)
      end
    end
 
end