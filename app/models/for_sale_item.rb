require "pry"
class ForSaleItem < ApplicationRecord
  belongs_to :user
  belongs_to :category
  validates :itemTitle, :itemDescription, presence: true
  validate :image_type
  validates :itemPrice, numericality: { greater_than: 0, less_than: 10000 }

  has_many_attached :images
  
  # .each do |attachable|
  #   attachable.representation(resize_to_limit: [100, 100]).processed.url
  # end
 
    def self.append_images
      binding.pry
      if images.present?
        params[:for_sale_item][:images].each do |image|
          for_sale_item.images.attach(io: File.open('image'),
          filename: "image")
        end
      end
    end


  private
  def image_type
    if images.attached? == false
      errors.add(:images, "are missing!")
    else
      images.each do |image|
        if !image.content_type.in?(%('image/jpeg image/png'))
          errors.add(:images, 'needs to be a JPEG or PNG')
        end
    end
  end
end

end
