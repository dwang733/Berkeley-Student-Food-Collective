class Product < ActiveRecord::Base
  validate :picture_has_correct_format

  def picture_has_correct_format
    unless picture.blank? || picture.downcase.start_with?('https://', 'http://')
      errors.add(:picture, 'must start with https:// or http://')
    end
  end

  validates :name, presence: true
  validates :vendor_id, presence: true

  belongs_to :vendor

  has_many :product_certifications
  has_many :certifications, through: :product_certifications
  has_many :product_nutritions
  has_many :nutritions, through: :product_nutritions
  has_many :product_packagings
  has_many :packagings, through: :product_packagings

  accepts_nested_attributes_for :certifications, :allow_destroy => true
  accepts_nested_attributes_for :nutritions, :allow_destroy => true
  accepts_nested_attributes_for :packagings, :allow_destroy => true

  def self.get_tags_hash
    tags_hash = {}
    [:certification, :nutrition, :packaging].each do |tag_type|
      tag_klass = tag_type.to_s.camelize.constantize  # Symbol to actual class
      tag_hash = tag_klass.all.each_with_object({}) do |tag, hash|
        products_array = tag.products.to_a
        unless products_array.empty?
          hash[tag.name] = products_array
        end
      end
      tags_hash.update(tag_hash)
    end
    tags_hash
  end
end
