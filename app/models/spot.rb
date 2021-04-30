class Spot < ApplicationRecord

    validates :name, :description, :latitude, :longitude, :maxGuests, :price, :address, :city, presence: true

    belongs_to :user,
        foreign_key: :host_id,
        class_name: :User 

    has_many :reviews,
        foreign_key: :spot_id,
        class_name: :Review

    has_many :reservations,
        foreign_key: :guest_id,
        class_name: :Reservation

    has_many_attached :photos

    def average_rating
        average = reviews.average(:rating) || 0
    end

    def self.in_bounds(bounds)
        debugger
        Spot.where("latitude < ?", bounds[:northEast][:lat])
            .where("latitude > ?", bounds[:southWest][:lat])
            .where("longitude < ?", bounds[:northEast][:lng])
            .where("longitude > ?", bounds[:southWest][:lng])
    end

end
