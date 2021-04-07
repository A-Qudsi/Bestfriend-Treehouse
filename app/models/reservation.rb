class Reservation < ApplicationRecord
    validates :start_date, :end_date, :number_guests, presence: true

    belongs_to :user,
        foreign_key: :guest_id,
        class_name: :User
    
    belongs_to :spot,
        foreign_key: :spot_id,
        class_name: :Spot

end
