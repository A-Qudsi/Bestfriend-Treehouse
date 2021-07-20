class Review < ApplicationRecord
    validates :body, :rating, presence: true
    validates :rating, inclusion: { in: 1..5 }
    validates :spot_id, uniqueness: { scope: :user_id, message: "You've already reviewed this site, please edit previous review" }

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :spot,
        foreign_key: :spot_id,
        class_name: :Spot
    
end
