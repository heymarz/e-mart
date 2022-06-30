class ForSaleItem < ApplicationRecord
  belongs_to :user
  belongs_to :category
  validates :itemTitle, :itemDescription, presence: true
  validate :image_type
  validates :itemPrice, numericality: { greater_than: 0, less_than: 10000 }
  has_many_attached :images do |attachable|
    attachable.variant :thumb, resize_to_limit: [100, 100]
  end

  private
  def image_type
    if images.attached? == false
      errors.add(:images, "are missing!")
    end
    images.each do |image|
      if !image.content_type.in?(%('image/jpeg image/png'))
        errors.add(:images, 'needs to be a JPEG or PNG')
      end
    end
  end

end
