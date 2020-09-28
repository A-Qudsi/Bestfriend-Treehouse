class Spot < ApplicationRecord

    validates :name, :description, :latitude, :longitude, :maxGuests, :price, :address, :city, :host_id, presence: true

    belongs_to :user,
        foreign_key: :host_id,
        class_name: :User 

end
