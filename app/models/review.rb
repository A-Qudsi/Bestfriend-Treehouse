class Review < ApplicationRecord
    validates :body, :rating, presence: true
    validates :rating, inclusion: { in: 1..5 }
    # validates :spot_id, uniqueness: { scope: :user_id, message: "You've already reviewed this site, please edit previous review" }

    before_create :not_reviewed?

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :spot,
        foreign_key: :spot_id,
        class_name: :Spot

    def not_reviewed? 
        return if Review.exists?(user: user, spot_id: spot_id)
    end

        
end
