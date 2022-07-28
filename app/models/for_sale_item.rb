require "pry"
class ForSaleItem < ApplicationRecord
  belongs_to :user
  belongs_to :category
  validates :itemTitle, :itemDescription, presence: true
  validate :image_type
  validates :itemPrice, numericality: { greater_than: 0, less_than: 10000 }

  has_many_attached :images, :dependent => :destroy

  private
  def image_type
    if images.present? == false
      errors.add(:images, "images are missing!")
    end
  end

end
