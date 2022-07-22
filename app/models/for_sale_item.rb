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
  
  # with_all_variant_records.each do |image|
      # image_tag image.representation(resize_to_limit: [100, 100]).processed.url
    # end


  private
  def image_type
    if images.attached? == false
      errors.add(:images, "are missing!")
    images.each do |image|
        if !image.content_type.in?(%('image/jpeg image/png'))
          errors.add(:images, 'needs to be a JPEG or PNG')
        end
    end
  end
end

end
