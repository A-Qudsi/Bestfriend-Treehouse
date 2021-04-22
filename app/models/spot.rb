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

    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:latitude])
            .where("lat > ?", bounds[:southWest][:latitude])
            .where("lng > ?", bounds[:southWest][:longitude])
            .where("lng < ?", bounds[:northEast][:longitude])
    end

end
