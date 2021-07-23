class Review < ApplicationRecord
    validates :body, :rating, presence: true
    validates :rating, inclusion: { in: 1..5 }
    # validates :spot_id, uniqueness: { scope: :user_id }

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :spot,
        foreign_key: :spot_id,
        class_name: :Spot
end
