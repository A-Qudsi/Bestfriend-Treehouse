class Spot < ApplicationRecord

    validates :name, :description, :latitude, :longitude, :maxGuests, :price, :address, :city, presence: true

    belongs_to :user,
        foreign_key: :host_id,
        class_name: :User 

    has_many_attached :photos

    def self.in_bounds(bounds)
        Spot.where("lat < ?", bounds[:northEast][:lat])
            .where("lat > ?", bounds[:southWest][:lat])
            .where("lng > ?", bounds[:southWest][:lng])
            .where("lng < ?", bounds[:northEast][:lng])
    end

end
